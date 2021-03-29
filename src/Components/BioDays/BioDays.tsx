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
          <DaysHeading>What are the Biodyanmic Days?</DaysHeading>

          <DayContainer>
            <DayCard>
            <DayIcon>
                  <Image src={FruitLogo} />
                </DayIcon>
              <DayCardInfo>
                
                <HouseHeader>Light & Fire</HouseHeader>
                <DayHeader>Fruit</DayHeader>
                <ZodiacHeader>Aries | Leo | Sagittarius</ZodiacHeader>
                <AboutDaySection>About ths day, what happens </AboutDaySection>
              </DayCardInfo>
            </DayCard>
            <DayCard >
            <DayIcon>
                  <Image src={FlowerLogo} />
                </DayIcon>
              <DayCardInfo>
                
                <HouseHeader>Air</HouseHeader>
                <DayHeader>Flower</DayHeader>
                <ZodiacHeader>Gemini | Libra | Aquarius</ZodiacHeader>
                <AboutDaySection>About ths day, what happens </AboutDaySection>
              </DayCardInfo>
            </DayCard>
            <DayCard >
            <DayIcon>
                  <Image src={LeafLogo} />
                </DayIcon>
              <DayCardInfo>
                
                <HouseHeader>Water</HouseHeader>
                <DayHeader>Leaf</DayHeader>
                <ZodiacHeader>Pisces | Cancer | Scorpio</ZodiacHeader>
                <AboutDaySection>About ths day, what happens </AboutDaySection>
              </DayCardInfo>
            </DayCard>
            <DayCard >
            <DayIcon>
                  <Image src={RootLogo} />
                </DayIcon>
              <DayCardInfo>
                
                <HouseHeader>Earth</HouseHeader>
                <DayHeader>Root</DayHeader>
                <ZodiacHeader>Taurus | Virgo | Capricorn</ZodiacHeader>
                <AboutDaySection>About ths day, what happens </AboutDaySection>
              </DayCardInfo>
            </DayCard>
          </DayContainer>
        </DaysWrapper>
      </DaysSection>
    </>
  );
}

export default BioDays;
