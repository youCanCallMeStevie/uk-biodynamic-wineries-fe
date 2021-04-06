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
  console.log("xxxUserInfo", userInfo);

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
      history.push("/");
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
          Next fruit day (& most the best expression of wine) is:
          <h6>{moonInfo!.nextFruitDay}</h6>
        </p>
      );
    }
  }, [moonInfo]);

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
              or Sign Up with Google
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
            <h1>What's the moon doing?</h1>
            <p>
              The moon is currently {moonInfo!.moonPhase} and it's trajectory is
              in {moonInfo!.trajectory}. The moon currently is in the
              constellation of {moonInfo!.zodiac}.
            </p>
            <h2>What does it mean for wine?</h2>
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
                  handleReview();
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
            <h1>No Results</h1>
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
