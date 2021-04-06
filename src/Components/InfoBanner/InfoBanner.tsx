import React from "react";
import { Container, Button, Image } from "../../styles/globalStyles";
import { MoonData, VineyardData } from "../../store/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { toggleModalActions } from "../../store/actions/modalActions";

import {
  InfoSec,
  InfoRow,
  InfoCol,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "./InfoBanner.elements";
import { Link } from "react-router-dom";
export interface BannerProps {
  moonInfo?: MoonData;
  details?: VineyardData;
  primary: boolean;
  lightBg: boolean;
  imgStart: string;
  lightTopLine: boolean;
  lightText: boolean;
  lightTextDesc: boolean;
  buttonLabel: string;
  description: string;
  headline: string;
  topLine: string;
  img?: any;
  start: string;
  alt: string;
}

function InfoBanner({
  primary,
  lightBg,
  imgStart,
  lightTopLine,
  lightText,
  lightTextDesc,
  buttonLabel,
  description,
  headline,
  topLine,
  img,
  start,
  alt,
  moonInfo,
  details,
}: BannerProps) {
  const dispatch = useDispatch();
  const modalStatus = useSelector((state: RootState) => state.modal.isOpen);
  let randomImg =
    details?.vineyards[0].images[
      Math.floor(Math.random() * details?.vineyards[0].images.length)
    ];

  const handleReview = async () => {
    try {
      dispatch(toggleModalActions(true, "review"));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {console.log("moonInfo", moonInfo)}
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoCol>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                {/* <Link to="/sign-up"> */}

                <Button
                  big
                  fontBig
                  primary={primary}
                  onClick={() => dispatch(toggleModalActions(true, "moon"))}
                >
                  {buttonLabel}
                </Button>
                {/* </Link> */}
              </TextWrapper>
            </InfoCol>
            <InfoCol>
              <ImgWrapper start={start}>
                <Img src={randomImg || img?.default} alt={alt} />
              </ImgWrapper>
            </InfoCol>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoBanner;
