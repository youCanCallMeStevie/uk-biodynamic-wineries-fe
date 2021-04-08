import { BannerProps } from "../../Components/InfoBanner/InfoBanner";
import{SummaryProps} from "../../Components/Summary/Summary"
import { MoonData, MoonPhase, VineyardData } from "../../store/types";
import {RiStarSFill} from "react-icons/ri"



type VineyardObjectMaker = (details?: VineyardData) => BannerProps
type SummaryObjectMaker = (details?: VineyardData) => SummaryProps


export const vineyardObjOne: VineyardObjectMaker = (details?: VineyardData) => ({
    lightBg: true,
    primary: false,
    imgStart: "",
    lightTopLine: false,
    lightTextDesc: false,
    // buttonLabel: "Learn More",
    description:
      `${details?.vineyards[0].description}`,
    headline:     `${details?.vineyards[0].bio}`,
  
    lightText: false,
    topLine: `${details?.vineyards[0].name} in ${details?.vineyards[0].region}`,
    img: require(`../../assets/illustrations/_flower_day_2.svg`),
    alt: `Random Image 2 for ${details?.vineyards[0].name}`,
    start: "",
    details
  });
  
export const vineyardObjTwo: VineyardObjectMaker = (details?: VineyardData) => ({
  lightBg: false,
  primary: true,
  imgStart: "start",
  lightTopLine: true,
  lightTextDesc: true,
  buttonLabel: "Get Directions",
  description:
  ``,
  headline: `${details?.vineyards[0].fullAddress}`,
  lightText: true,
  topLine: `${details?.vineyards[0].name} in ${details?.vineyards[0].region}`,
  alt: `Random Image 2 for ${details?.vineyards[0].name}`,
  start: "true",
  details
});

export const vineyardObjThree: SummaryObjectMaker = (details?: VineyardData) => ({
  lightBg: true,
  primary: false,
  imgStart: "",
  lightTopLine: false,
  lightTextDesc: false,
  buttonLabel: "Leave a Review",
  lightText: false,
  img: require(`../../assets/illustrations/_flower_day_2.svg`),
  alt: "image",
  start: "",
  details
});

