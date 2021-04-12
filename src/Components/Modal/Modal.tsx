import React, { useState, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Button, Image, Input } from "../../styles/globalStyles";
import {
  loginAction,
  registerUserAction,
} from "../../store/actions/userActions";
import { UserProfile } from "../../store/types";
import { getVineyardAction } from "../../store/actions/vineyardActions";
import { newReviewAction } from "../../store/actions/reviewActions";
import { toggleModalActions } from "../../store/actions/modalActions";
import RegisterImg from "../../assets/illustrations/nature_tech.svg";
import LoginImg from "../../assets/illustrations/moon_location.svg";
import MoonImg from "../../assets/illustrations/moon_only.svg";
import FruitImg from "../../assets/illustrations/_fruit_day.svg";
import ReviewImg from "../../assets/illustrations/location_marker_girl.svg";
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
  // const params = useParams();
  const modalType = useSelector((state: RootState) => state.modal.type);
  const details = useSelector((state: RootState) => state.vineyard.data);
  const modalStatus = useSelector((state: RootState) => state.modal.isOpen);
  const moonInfo = useSelector((state: RootState) => state.moon.moonInfo);
  const userInfo = useSelector((state: RootState) => state.user.profile);
  const moment = require("moment");

  const initialFormData = {
    name: "",
    lastname: "",
    username: "",
    password: "",
    email: "",
  };
  const initialLoginData = {
    username: "",
    password: "",
  };
  const initialReviewData = {
    rating: 5,
    text: "",
    userId: userInfo?._id,
  };
  const [formData, setFormData] = useState(initialFormData);
  const [loginData, setLoginData] = useState(initialLoginData);
  const [reviewData, setReviewData] = useState(initialReviewData);
  // const credentials = { ...formData };

  const animation = useSpring({
    config: { duration: 500 },
    opacity: !modalStatus ? 0 : 1,
    transform: !modalStatus ? `translateY(-100%)` : `translateY(0%)`,
  });

  const handleLoginChange = (e: any) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const handleLogin = async () => {
    try {
      dispatch(loginAction(loginData));
      setLoginData(initialLoginData);
      // history.push("/");
      dispatch(toggleModalActions(false, ""));
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignupChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSignup = async () => {
    try {
      dispatch(registerUserAction(formData));
      setFormData(initialFormData);
      dispatch(toggleModalActions(true, "login"));
    } catch (err) {
      console.log(err);
    }
  };

  const handleReviewChange = (e: any) => {
    setReviewData({ ...reviewData, [e.target.name]: e.target.value });
  };
  const handleReview = async () => {
    try {
      // dispatch(newReviewAction(reviewData, vineyardId));
      setReviewData(initialReviewData);
    } catch (err) {
      console.log(err);
    }
  };
  const nextFruitDayInfo = useMemo(() => {
    if (moonInfo!.bioDay == "Fruit") {
      return <h3>* Today is an ideal time for wine! *</h3>;
    } else {
      return (
        <p>
          {" "}
          Next fruit day (& most the best expression of wine) is:
          <h3>{moonInfo!.nextFruitDay}</h3>
        </p>
      );
    }
  }, [moonInfo]);

  const fruitDayToLoad = useMemo(() => {
    if (!moonInfo?.bioDay) {
      return "";
    }
    switch (moonInfo?.bioDay) {
      case "Fruit":
        return (
          <>
            <h3>Aries | Leo | Sagittarius</h3>
            <p>
              When the moon is in any of the fire signs, and today it's in{" "}
              {moonInfo?.zodiac}, it is the most optimal for tasting wine as
              fruit flavors are more vibrant, and the wine is rich and full.
            </p>
            <p>
              Use fruit days to harvest...well, fruits! This day is the most
              ideal time for the grapes to be plucked from the vines (if
              winemakers harvested on Leaf Days, the grapes could be water
              logged).{" "}
            </p>
            ;
          </>
        );
      case "Leaf":
        return (
          <>
            <h3>Pisces | Cancer | Scorpio</h3>
            <p>
              When the moon is in any of the water signs, and today it's in{" "}
              {moonInfo?.zodiac}, wines can appear less sweet, with a dominant,
              earthy minerality.
            </p>
            <p>
              This is an ideal day for salads, spinach, leaf herbs (mint,basil),
              leeks, cabbages and cauliflower as well as grass or non flowering
              hedges. Sow leaf–plants when the moon is waxing, ideally on
              leafdays. Fertilize when the moon is waning, (when the earth is
              inhaling) and ideally on a leaf-day.
            </p>
          </>
        );
      case "Flower":
        return (
          <>
            <h3>Gemini | Libra | Aquarius</h3>
            <p>
              When the moon is in any air sign, and today it's in{" "}
              {moonInfo?.zodiac}, it will be better for tasting aromatic wines,
              especially white wines with floral aromas like Viognier or
              Torrontes.
            </p>
            <p>
              Use flower days for harvesting flowers, flowering herbs, flowering
              hedges, flowering trees (eg Lilac). Plant and prune whilst the
              moon is descending, ideally on flower-days, when the sap is drawn
              to the roots.
            </p>
          </>
        );
      case "Root":
        return (
          <>
            <h3>Taurus | Virgo | Capricorn</h3>
            <p>
              When the moon is in any Earth sign, and today it's in{" "}
              {moonInfo?.zodiac}, it is best to avoid tasting wine, as it's
              expression will appear more subtle and uncharacteristically
              earthy.
            </p>
            <p>
              Root days are ideal for pruning, as water is sent down to the
              roots. Also ideal for harvesting rooted vegetables like potatoes &
              turnips
            </p>
          </>
        );

      default:
        return <></>;
    }
  }, [moonInfo?.bioDay]);

  const contentSection = () => {
    if (modalType == "login") {
      const { username, password } = loginData;
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
                name="username"
                value={username}
                placeholder="Username"
                onChange={handleLoginChange}
              ></Input>
              <Input
                type="password"
                name="password"
                value={password}
                placeholder="password"
                onChange={handleLoginChange}
              ></Input>
              <Button
                primary
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  event.preventDefault();
                  handleLogin();
                }}
              >
                Login
              </Button>
            </SignInForm>
            <a href={`${REACT_APP_API_URI}/api/auth/google`}>
              or Sign-in with Google
            </a>
            <CloseModalBtn
              onClick={() => dispatch(toggleModalActions(false, ""))}
            />
          </ModalContent>
        </>
      );
    } else if (modalType == "signup") {
      const { name, lastname, username, password, email } = formData;
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
                name="name"
                value={name}
                onChange={handleSignupChange}
              ></Input>
              <Input
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={lastname}
                onChange={handleSignupChange}
              ></Input>
              <Input
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleSignupChange}
              ></Input>
              <Input
                type="text"
                placeholder="email@web.com"
                name="email"
                value={email}
                onChange={handleSignupChange}
              ></Input>
              <Input
                type="password"
                name="password"
                value={password}
                placeholder="password"
                onChange={handleSignupChange}
              ></Input>
              <Button
                primary
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  event.preventDefault();
                  handleSignup();
                }}
              >
                Register
              </Button>
            </SignInForm>
            <a href={`${REACT_APP_API_URI}/api/auth/google`}>
              or Sign Up with Google
            </a>
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
            <h1>What's the</h1>
            <h1>Moon doing?</h1>
            <p>
              The moon's currently {moonInfo!.moonPhase} and it's trajectory is
              in {moonInfo!.trajectory}. The moon is in the constellation of{" "}
              {moonInfo!.zodiac}.{" "}
              {moonInfo &&
                moonInfo!.moonPhase !== "Full" &&
                `The next Full Moon will be on ${moment(
                  moonInfo!.nextFullMoon.date
                ).format("dddd, MMMM Do")}`}
            </p>
            <h3>What does it mean for wine?</h3>
            <p>
              This constelaltion represents {moonInfo!.house} & it's biodyanmic
              day is {moonInfo!.bioDay}.
            </p>
            {nextFruitDayInfo}
            <CloseModalBtn
              onClick={() => dispatch(toggleModalActions(false, ""))}
            />
          </ModalContent>
        </>
      );
    } else if (modalType == "review") {
      const { text, rating } = reviewData;
      return (
        <>
          <ModalImgWrapper>
            <Image src={ReviewImg} alt="nature and tech illustration" />
          </ModalImgWrapper>
          <ModalContent>
            <SignInForm>
              <h1>What do you think of {details?.vineyards[0].name}?</h1>
              <Input
                type="text"
                placeholder="Your review"
                name="text"
                value={text}
                onChange={handleReviewChange}
              ></Input>
              <Input
                type="number"
                name="rating"
                placeholder="1-5 stars"
                value={rating}
                onChange={handleReviewChange}
              ></Input>
              <Button
                primary
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  event.preventDefault();
                  handleReview() &&
                    dispatch(toggleModalActions(true, "thanks"));
                }}
              >
                Submit Reivew
              </Button>
            </SignInForm>

            <CloseModalBtn
              onClick={() => dispatch(toggleModalActions(false, ""))}
            />
          </ModalContent>
        </>
      );
    } else if (modalType == "alert") {
      return (
        <>
          <ModalImgWrapper>
            <Image src={MoonImg} alt="nature and tech illustration" />
          </ModalImgWrapper>
          <ModalContent>
            <br></br>
            <br></br>
            <h1>No Results</h1>
            <br></br>
            <Button
              primary
              onClick={() =>
                dispatch(getVineyardAction()) &&
                dispatch(toggleModalActions(false, ""))
              }
            >
              See All Vineyards
            </Button>
            <CloseModalBtn
              onClick={() => dispatch(toggleModalActions(false, ""))}
            />
          </ModalContent>
        </>
      );
    } else if (modalType == "thanks") {
      return (
        <>
          <ModalImgWrapper>
            <Image src={MoonImg} alt="nature and tech illustration" />
          </ModalImgWrapper>
          <ModalContent>
            <h1>Thanks!</h1>
            <h3>
              Your review for {details?.vineyards[0].name} has been submitted
            </h3>

            <CloseModalBtn
              onClick={() => dispatch(toggleModalActions(false, ""))}
            />
          </ModalContent>
        </>
      );
    } else if (modalType == "fruit") {
      return (
        <>
          <ModalImgWrapper>
            <Image src={FruitImg} alt="man with grapes & wine glass" />
          </ModalImgWrapper>
          <ModalContent>
            <h1>What's a</h1>
            <h1>{moonInfo!.bioDay} Day?</h1>
            {fruitDayToLoad}
            <CloseModalBtn
              onClick={() => dispatch(toggleModalActions(false, ""))}
            />
          </ModalContent>
        </>
      );
    }
  };

  return (
    <Background>
      <animated.div style={animation}>
        <ModalWrapper>{contentSection()}</ModalWrapper>
      </animated.div>
    </Background>
  );
}

export default Modal;
