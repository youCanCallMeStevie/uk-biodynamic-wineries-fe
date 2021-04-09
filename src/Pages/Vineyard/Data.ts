import { BannerProps } from "../../Components/InfoBanner/InfoBanner";
// import{SummaryProps} from "../../Components/Summary/Summary"
import { VineyardData } from "../../store/types";


type VineyardObjectMaker = (details?: VineyardData) => BannerProps
// type SummaryObjectMaker = (details?: VineyardData) => SummaryProps


export const vineyardObjOne: VineyardObjectMaker = (details?: VineyardData) => ({
    lightBg: true,
    primary: false,
    saveIcon: true,
    imgStart: "",
    lightTopLine: false,
    lightTextDesc: false,
    button: "button1",
    description:
      `${details?.vineyards[0]?.description}`,
    headline:     `${details?.vineyards[0]?.bio}`,
  
    lightText: false,
    topLine: `${details?.vineyards[0]?.name} in ${details?.vineyards[0]?.region}`,
    img: require(`../../assets/illustrations/_flower_day_2.svg`),
    alt: `Random Image for ${details?.vineyards[0]?.name}`,
    start: "",
    details
  });
  
export const vineyardObjTwo: VineyardObjectMaker = (details?: VineyardData) => ({
  lightBg: false,
  primary: true,
  saveIcon: false,

  imgStart: "start",
  lightTopLine: true,
  lightTextDesc: true,
  button: "button2",
  description:
  ``,
  headline: `${details?.vineyards[0]?.fullAddress}`,
  lightText: true,
  topLine: `${details?.vineyards[0]?.name} in ${details?.vineyards[0]?.region}`,
  alt: `Random Image for ${details?.vineyards[0]?.name}`,
  start: "true",
  details
});

// export const vineyardObjThree: SummaryObjectMaker = (details?: VineyardData) => ({
//   lightBg: true,
//   primary: false,
//   imgStart: "",
//   lightTopLine: false,
//   lightTextDesc: false,
//   button: "button3",
//   lightText: false,
//   img: require(`../../assets/illustrations/_flower_day_2.svg`),
//   alt: "image",
//   start: "",
//   details
// });

export const vineyardObjThree: VineyardObjectMaker = (details?: VineyardData) => ({
  lightBg: true,
  primary: false,
  saveIcon: false,
  imgStart: "",
  lightTopLine: false,
  lightTextDesc: false,
  button: "button3",
  description:
    `${details?.vineyards[0]?.description}`,
  headline:     `${details?.vineyards[0]?.bio}`,

  lightText: false,
  topLine: `${details?.vineyards[0]?.name} in ${details?.vineyards[0]?.region}`,
  img: require(`../../assets/illustrations/_flower_day_2.svg`),
  alt: `Random Image for ${details?.vineyards[0]?.name}`,
  start: "",
  details
});