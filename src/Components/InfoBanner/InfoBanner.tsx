import React from "react";
import { Container, Button, Image } from "../../styles/globalStyles";
import { MoonData } from "../../store/types";

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
interface BannerProps {
  moonInfo: MoonData | null;
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
  img: any;
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
}: BannerProps) {
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
                <Link to="/sign-up">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoCol>
            <InfoCol>
              <ImgWrapper start={start}>
                <Img src={img?.default} alt={alt} />
              </ImgWrapper>
            </InfoCol>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoBanner;
