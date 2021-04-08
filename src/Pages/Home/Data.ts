import { BannerProps } from "../../Components/InfoBanner/InfoBanner";
import { MoonData, MoonPhase } from "../../store/types";

export const homeObjOne = {
  lightBg: false,
  primary: true,
  imgStart: "",
  lightTopLine: true,
  lightTextDesc: true,
  buttonLabel: "Get Started",
  description:
    "Depending on when you visit a vineyard,.... Biodynamic, blah, blah, blah, spend some time building proepr copy. but get the coding done",
  headline: "Discover the Biodynamic Day for your Visit to UK Bio Vineyard.",
  lightText: true,
  topLine: "What does the Moon's Position have to do with wine",
  img: require(`../../assets/illustrations/moonlight.svg`),
  alt: "image",
  start: ""
};

type HomeObjectMaker = (moonInfo?: MoonData) => BannerProps

export const homeObjTwo: HomeObjectMaker = (moonInfo?: MoonData) => ({
  lightBg: true,
  primary: false,
  imgStart: "start",
  lightTopLine: false,
  lightTextDesc: false,
  buttonLabel: "Check Out",
  description:
    "Depending on when you visit a vineyard,.... Biodynamic, blah, blah, blah, spend some time building proepr copy. but get the coding done",
  headline: "Discover the Biodynamic Day for your Visit to UK Bio Vineyard.",
  lightText: false,
  topLine: "What's today's",
  img: require(`../../assets/illustrations/_male_planet.svg`),
  alt: "image",
  start: "true",
  moonInfo
});

export const homeObjThree = {
  lightBg: false,
  primary: true,
  imgStart: "",
  lightTopLine: true,
  lightTextDesc: true,
  buttonLabel: "Get Started",
  description:
    "Depending on when you visit a vineyard,.... Biodynamic, blah, blah, blah, spend some time building proepr copy. but get the coding done",
  headline: "Discover the Biodynamic Day for your Visit to UK Bio Vineyard.",
  lightText: true,
  topLine: "What does the Moon's Position have to do with wine",
  img: require(`../../assets/illustrations/_flower_day_2.svg`),
  alt: "image",
  start: ""
};

