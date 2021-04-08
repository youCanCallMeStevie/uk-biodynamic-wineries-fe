import React from "react";
import { Container, Button, Image } from "../../styles/globalStyles";
import { VineyardData } from "../../store/types";
import { useDispatch, useSelector } from "react-redux";

import {
  IconWrap,
  IconsContainer,
  IconSection,
  IconTitle,
} from "../IconBanner/IconBanner.elements";
// import {
//   InfoSec,
//   InfoRow,
//   InfoCol,
//   TextWrapper,
//   TopLine,
//   Heading,
//   Subtitle,
//   ImgWrapper,
//   Img,
// } from "../InfoBanner/InfoBanner.elements";
import { IoIosBed } from "react-icons/io";
import { FaDog, FaTractor } from "react-icons/fa";
import {
  GiKnifeFork,
  GiPlantRoots,
  GiPlantWatering,
  GiWineBottle,
} from "react-icons/gi";

export interface IconProps {
  details?: VineyardData;
}
function IconBanner({ details }: IconProps) {
  const dispatch = useDispatch();
  return (
    <>
      <IconSection>
        <Container>
          <IconsContainer>
            <IconWrap>
              <IconTitle>
                What to expect at {details?.vineyards[0].name}:
              </IconTitle>
            </IconWrap>

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
          </IconsContainer>
        </Container>
      </IconSection>
    </>
  );
}

export default IconBanner;
