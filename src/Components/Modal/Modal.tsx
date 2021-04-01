import React, { useEffect, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Image } from "../../styles/globalStyles";
import { toggleModalActions } from "../../store/actions/modalActions";
import RegisterImg from "../../assets/illustrations/nature_tech.svg";
import LoginImg from "../../assets/illustrations/moon_location.svg";
import MoonImg from "../../assets/illustrations/moon_only.svg";
import { useSpring, animated } from "react-spring";
import { RootState } from "../../store";

import {
  Background,
  ModalWrapper,
  ModalImgWrapper,
  ModalContent,
  CloseModalBtn,
} from "./Modal.elements";

function Modal() {
  const dispatch = useDispatch();
  const modalType = useSelector((state: RootState) => state.modal.type);
  const modalStatus = useSelector((state: RootState) => state.modal.isOpen);
  const moonInfo = useSelector((state: RootState) => state.moon.moonInfo);

  const animation = useSpring({
    config: { duration: 500 },
    opacity: !modalStatus ? 0 : 1,
    transform: !modalStatus ? `translateY(-100%)` : `translateY(0%)`,
  });

  const nextFruitDayInfo = useMemo(() => {
    if (moonInfo!.bioDay == "Fruit") {
      return <h2>Today is an ideal time for wine!</h2>;
    } else {
      return (
        <p>
          {" "}
          Next fruit day (& most the best expression of wine) is{" "}
          {moonInfo!.nextFruitDay}
        </p>
      );
    }
  }, [moonInfo]);
  console.log("nextFruitDayInfo", nextFruitDayInfo);
  const contentSection = useMemo(() => {
    if (modalType == "login") {
      return (
        <>
          <ModalImgWrapper>
            <Image src={LoginImg} alt="nature and tech illustration" />
          </ModalImgWrapper>
          <ModalContent>
            <h1>Welcome back, moon baby!</h1>
            <p> Login with username & password</p>
            <Button primary>Or login with Google</Button>
            <CloseModalBtn
              onClick={() => dispatch(toggleModalActions(false, ""))}
            />
          </ModalContent>
        </>
      );
    } else if (modalType == "signup") {
      return (
        <>
          <ModalImgWrapper>
            <Image src={RegisterImg} alt="nature and tech illustration" />
          </ModalImgWrapper>
          <ModalContent>
            <h1>Are you ready?</h1>
            <p> Save vineyards, leave reviews & plan your next visit</p>

            <Button primary>Sign up with Google</Button>
            <CloseModalBtn
              onClick={() => dispatch(toggleModalActions(false, ""))}
            />
          </ModalContent>
        </>
      );
    } else if (modalType == "moon") {
      return (
        <>
          <ModalImgWrapper>
            <Image src={MoonImg} alt="nature and tech illustration" />
          </ModalImgWrapper>
          <ModalContent>
            <h1>What's the moon doing?</h1>
            <p>
              The moon is currently {moonInfo!.moonPhase} and it's trajectory is
              in {moonInfo!.trajectory}. The moon currently is in the
              constellation of {moonInfo!.zodiac}.
            </p>
            <h2>What does this mean for wine?</h2>
            <p>
              This constelaltion represents {moonInfo!.house} it's biodyanmic
              day is {moonInfo!.bioDay}.
            </p>
            {nextFruitDayInfo}
            <CloseModalBtn
              onClick={() => dispatch(toggleModalActions(false, ""))}
            />
          </ModalContent>
        </>
      );
    }
  }, [modalType]);

  const keyPress = useCallback(
    e => {
      if (e.key === "Escape" && modalStatus) {
        return !modalStatus;
      }
    },
    [modalStatus]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <Background>
      <animated.div style={animation}>
        <ModalWrapper>{contentSection}</ModalWrapper>
      </animated.div>
    </Background>
  );
}

export default Modal;
