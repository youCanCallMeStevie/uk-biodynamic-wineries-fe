import React from "react";
import { Container, Button, Image } from "../../styles/globalStyles";
import { MoonData, VineyardData } from "../../store/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { toggleModalActions } from "../../store/actions/modalActions";
// import { IconWrap, IconsContainer } from "../Summary/Summary.elements";
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
} from "../InfoBanner/InfoBanner.elements";
import { Link } from "react-router-dom";
import { IoIosBed } from "react-icons/io";
import { FaDog, FaTractor } from "react-icons/fa";
import {
  GiKnifeFork,
  GiPlantRoots,
  GiPlantWatering,
  GiWineBottle,
} from "react-icons/gi";

export interface SummaryProps {
  moonInfo?: MoonData;
  details?: VineyardData;
  primary: boolean;
  lightBg: boolean;
  imgStart: string;
  lightTopLine: boolean;
  lightText: boolean;
  lightTextDesc: boolean;
  button: string;
  img?: any;
  start: string;
  alt: string;
}

function Summary({
  primary,
  lightBg,
  imgStart,
  lightTopLine,
  lightText,
  lightTextDesc,
  button,
  img,
  start,
  alt,
  moonInfo,
  details,
}: SummaryProps) {
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
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoCol>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}></TopLine>
                <Heading lightText={lightText}></Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  {/* <IconsContainer>
                    {details?.vineyards[0].dogFriendly && (
                      <IconWrap>
                        <span title="Dog friendly">
                          <FaDog />
                        </span>
                      </IconWrap>
                    )}
                    {details?.vineyards[0].rooms && (
                      <IconWrap>
                        <span title="Rooms available">
                          <IoIosBed />
                        </span>
                      </IconWrap>
                    )}
                    {details?.vineyards[0].guidedTastings && (
                      <IconWrap>
                        <span title="Guided tastings available">
                          <GiWineBottle />
                        </span>
                      </IconWrap>
                    )}
                    {details?.vineyards[0].guidedTours && (
                      <IconWrap>
                        <span title="Vineyard tours available">
                          <FaTractor />
                        </span>
                      </IconWrap>
                    )}
                    {details?.vineyards[0].food && (
                      <IconWrap>
                        <span title="Food available onsite">
                          <GiKnifeFork />
                        </span>
                      </IconWrap>
                    )}
                    {details?.vineyards[0].biodynamic && (
                      <IconWrap>
                        <span title="Certified Biodynamic">
                          <GiPlantRoots />
                        </span>
                      </IconWrap>
                    )}
                    {details?.vineyards[0].organic && (
                      <IconWrap>
                        <span title="Certified Organic">
                          <GiPlantWatering />
                        </span>
                      </IconWrap>
                    )}
                  </IconsContainer> */}
                </Subtitle>
                {/* <Link to="/sign-up"> */}

                <Button
                  big
                  fontBig
                  primary={primary}
                  onClick={() => dispatch(toggleModalActions(true, "review"))}
                >
                  {button}
                </Button>
                {/* </Link> */}
              </TextWrapper>
            </InfoCol>
            <InfoCol>
              <ImgWrapper start={start}>
                <Img src={randomImg} alt={alt} />
              </ImgWrapper>
            </InfoCol>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default Summary;
