import React from "react";
// import { IconContext } from "react-icons/lib";
// import { Button } from "../../styles/globalStyles";
import FruitLogo from "../../assets/illustrations/_fruit_day.svg";
import FlowerLogo from "../../assets/illustrations/_flower_day.svg";
import RootLogo from "../../assets/illustrations/_root_day.svg";
import LeafLogo from "../../assets/illustrations/_leaf_day.svg";
import { Image } from "../../styles/globalStyles";
import {
  DayContainer,
  DaysSection,
  DaysHeading,
  DaysWrapper,
  DayCard,
  DayCardInfo,
  DayIcon,
  HouseHeader,
  DayHeader,
  ZodiacHeader,
  AboutDaySection,
} from "./BioDays.elements";

function BioDays() {
  return (
    <>
      {" "}
      <DaysSection>
        <DaysWrapper>
          <DaysHeading>What's it mean for wine?</DaysHeading>

          <DayContainer>
            <DayCard>
              <DayIcon>
                <Image src={FruitLogo} />
              </DayIcon>
              <DayCardInfo>
                <HouseHeader>Light & Fire</HouseHeader>
                <DayHeader>Fruit</DayHeader>
                <ZodiacHeader>Aries | Leo | Sagittarius</ZodiacHeader>
                <AboutDaySection>
                  When the moon is in any of the fire signs, it is the most
                  optimal for tasting wine as fruit flavors are more vibrant,
                  and the wine is rich and full.
                </AboutDaySection>
              </DayCardInfo>
            </DayCard>
            <DayCard>
              <DayIcon>
                <Image src={FlowerLogo} />
              </DayIcon>
              <DayCardInfo>
                <HouseHeader>Air</HouseHeader>
                <DayHeader>Flower</DayHeader>
                <ZodiacHeader>Gemini | Libra | Aquarius</ZodiacHeader>
                <AboutDaySection>
                  When the moon is in any air sign it will be better days for
                  tasting aromatic wines, especially white wines with floral
                  aromas.
                </AboutDaySection>
              </DayCardInfo>
            </DayCard>
            <DayCard>
              <DayIcon>
                <Image src={LeafLogo} />
              </DayIcon>
              <DayCardInfo>
                <HouseHeader>Water</HouseHeader>
                <DayHeader>Leaf</DayHeader>
                <ZodiacHeader>Pisces | Cancer | Scorpio</ZodiacHeader>
                <AboutDaySection>
                  When the moon is in any of the water signs wines appear less
                  sweet, with a dominant, earthy minerality.
                </AboutDaySection>
              </DayCardInfo>
            </DayCard>
            <DayCard>
              <DayIcon>
                <Image src={RootLogo} />
              </DayIcon>
              <DayCardInfo>
                <HouseHeader>Earth</HouseHeader>
                <DayHeader>Root</DayHeader>
                <ZodiacHeader>Taurus | Virgo | Capricorn</ZodiacHeader>
                <AboutDaySection>
                  When the moon is in any Earth sign, it is best to avoid
                  tasting wine as it's expression will appear more subtle.
                </AboutDaySection>
              </DayCardInfo>
            </DayCard>
          </DayContainer>
        </DaysWrapper>
      </DaysSection>
    </>
  );
}

export default BioDays;
