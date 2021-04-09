import React, { useMemo } from "react";
import { Container, Button, Image } from "../../styles/globalStyles";
import { MoonData, VineyardData, UserProfile } from "../../store/types";
import { SaveIcon, DateSearch } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { toggleModalActions } from "../../store/actions/modalActions";
import { Link, useParams } from "react-router-dom";

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

export interface BannerProps {
  moonInfo?: MoonData;
  details?: VineyardData;
  user?: UserProfile;
  primary: boolean;
  lightBg: boolean;
  saveIcon?: boolean;
  imgStart: string;
  lightTopLine: boolean;
  lightText: boolean;
  lightTextDesc: boolean;
  button: string;
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
  saveIcon,
  imgStart,
  lightTopLine,
  lightText,
  lightTextDesc,
  button,
  description,
  headline,
  topLine,
  img,
  start,
  alt,
  moonInfo,
  details,
  user,
}: BannerProps) {
  const dispatch = useDispatch();
  const params = useParams();
  const { vineyardId }: any = params;
  const userStatus = useSelector((state: RootState) => state.user.isLoggedIn);

  let randomImg =
    details?.vineyards[0].images[
      Math.floor(Math.random() * details?.vineyards[0].images.length)
    ];

  const saveIconToLoad = useMemo(() => {
    if (!saveIcon) {
      return "";
    }
    switch (saveIcon) {
      case true:
        return vineyardId && userStatus && <SaveIcon />;
      default:
        return <></>;
    }
  }, [params, saveIcon]);

  const buttonToLoad = useMemo(() => {
    if (!button) {
      return "";
    }
    switch (button) {
      case "button1":
        return <DateSearch moonInfo={moonInfo} />;
      case "button2":
        return (
          <Button
            big
            fontBig
            primary={primary}
            onClick={() => dispatch(toggleModalActions(true, "moon"))}
          >
            Moon Info
          </Button>
        );
      case "button3":
        return (
          <Button
            big
            fontBig
            primary={primary}
            onClick={() => dispatch(toggleModalActions(true, "review"))}
          >
            Reviews
          </Button>
        );

      default:
        return <></>;
    }
  }, [params, button]);

  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoCol>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>
                  {topLine} {saveIconToLoad}
                </TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                {buttonToLoad}
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
