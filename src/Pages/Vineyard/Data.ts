import { BannerProps } from "../../Components/InfoBanner/InfoBanner";
import { MoonData, MoonPhase, VineyardData } from "../../store/types";


export const vineyardObjOne = {
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

type VineyardObjectMaker = (details?: VineyardData) => BannerProps

export const vineyardObjTwo: VineyardObjectMaker = (details?: VineyardData) => ({
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
  alt: "image",
  start: "true",
  details
});

export const vineyardObjThree: VineyardObjectMaker = (details?: VineyardData) => ({
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
  start: "",
  details
});

