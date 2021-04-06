import { BannerProps } from "../../Components/InfoBanner/InfoBanner";
import { MoonData, MoonPhase, VineyardData } from "../../store/types";
import {RiStarSFill} from "react-icons/ri"



type VineyardObjectMaker = (details?: VineyardData) => BannerProps


export const vineyardObjOne: VineyardObjectMaker = (details?: VineyardData) => ({
    lightBg: true,
    primary: false,
    imgStart: "",
    lightTopLine: false,
    lightTextDesc: false,
    buttonLabel: "Get Started",
    description:
      `${details?.vineyards[0].description}`,
    headline:     `${details?.vineyards[0].bio}`,
  
    lightText: false,
    topLine: `${details?.vineyards[0].name} in ${details?.vineyards[0].region}`,
    img: require(`../../assets/illustrations/_flower_day_2.svg`),
    alt: "image",
    start: "",
    details
  });
  
export const vineyardObjTwo: VineyardObjectMaker = (details?: VineyardData) => ({
  lightBg: false,
  primary: true,
  imgStart: "start",
  lightTopLine: true,
  lightTextDesc: true,
  buttonLabel: "Check Out",
  description:
    "Depending on when you visit a vineyard,.... Biodynamic, blah, blah, blah, spend some time building proepr copy. but get the coding done",
  headline: `${details?.vineyards[0].bio}`,
  lightText: true,
  topLine: `${details?.vineyards[0].name} in ${details?.vineyards[0].region}`,
  alt: "image",
  start: "true",
  details
});

export const vineyardObjThree: VineyardObjectMaker = (details?: VineyardData) => ({
  
  
    lightBg: true,
  primary: false,
  imgStart: "",
  lightTopLine: false,
  lightTextDesc: false,
  buttonLabel: "Leave a Review",
  description:
    ` ${details?.vineyards[0].reviews[0]?.userId?.username} left ${details?.vineyards[0].reviews[0]?.rating} stars`,

  headline:`"${details?.vineyards[0].reviews[0]?.text}"`,
  lightText: false,
  topLine: `Reviews for ${details?.vineyards[0].name}:`,
  img: require(`../../assets/illustrations/_flower_day_2.svg`),
  alt: "image",
  start: "",
  details
});

