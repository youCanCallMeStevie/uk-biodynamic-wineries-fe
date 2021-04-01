import React, { useState, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Image, Input } from "../../styles/globalStyles";
import { Credentials } from "../../utils/interfaces";
import {
  loginAction,
  registerUserAction,
} from "../../store/actions/userActions";
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
  SignInForm,
} from "./Modal.elements";

function Modal() {
  const { REACT_APP_API_URI } = process.env;

  const history = useHistory();
  const dispatch = useDispatch();
  const modalType = useSelector((state: RootState) => state.modal.type);
  const modalStatus = useSelector((state: RootState) => state.modal.isOpen);
  const moonInfo = useSelector((state: RootState) => state.moon.moonInfo);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const credentials = { password, username, name, lastname };

  const animation = useSpring({
    config: { duration: 500 },
    opacity: !modalStatus ? 0 : 1,
    transform: !modalStatus ? `translateY(-100%)` : `translateY(0%)`,
  });

  const handleLogin = async (credentials: Credentials) => {
    try {
      await dispatch(loginAction(credentials));
      setUsername("");
      setPassword("");
      history.push("/");
      dispatch(toggleModalActions(false, ""));
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignup = async (credentials: Credentials) => {
    try {
      await dispatch(registerUserAction(credentials));
      setUsername("");
      setPassword("");
      setName("");
      setLastname("");
      history.push("/");
      dispatch(toggleModalActions(false, ""));
    } catch (err) {
      console.log(err);
    }
  };

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

  const contentSection = useMemo(() => {
    if (modalType == "login") {
      return (
        <>
          <ModalImgWrapper>
            <Image src={LoginImg} alt="nature and tech illustration" />
          </ModalImgWrapper>
          <ModalContent>
            <h1>Welcome back, moon baby!</h1>
            <SignInForm>
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
              ></Input>
              <Input
                type="password"
                value={password}
                placeholder="password"
                onChange={e => setPassword(e.target.value)}
              ></Input>
            </SignInForm>
            <Button
              primary
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                event.preventDefault();
                handleLogin(credentials);
              }}
            >
              Log In
            </Button>
            <a href={`${REACT_APP_API_URI}/api/auth/google`}>
              <div>or Sign Up with Google</div>
            </a>
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
            <SignInForm>
              <Input
                type="text"
                placeholder="First Name"
                value={name}
                onChange={e => setName(e.target.value)}
              ></Input>
              <Input
                type="text"
                placeholder="Last Name"
                value={lastname}
                onChange={e => setLastname(e.target.value)}
              ></Input>
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
              ></Input>
              <Input
                type="password"
                value={password}
                placeholder="password"
                onChange={e => setPassword(e.target.value)}
              ></Input>
              <Button
                primary
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  event.preventDefault();
                  handleSignup(credentials);
                }}
              >
                Register
              </Button>

              <a href={`${REACT_APP_API_URI}/api/auth/google`}>
                <div>or Sign Up with Google</div>
              </a>
            </SignInForm>

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

  return (
    <Background>
      <animated.div style={animation}>
        <ModalWrapper>{contentSection}</ModalWrapper>
      </animated.div>
    </Background>
  );
}

export default Modal;
