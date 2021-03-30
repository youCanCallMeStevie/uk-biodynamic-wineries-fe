import styled from "styled-components";
import {Link} from "react-router-dom";
export const DaysSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #c06014;
  /* height: 620px; */
`;

export const DaysWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const DaysHeading = styled.h1`
  color: #f3f4ed;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const DayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 80%;
  }
`;
export const DayCard = styled.div`
  background: #536162;
  box-shadow: 0 6px 20px rgba(0, 4, 10, 0.584);
  width: 200px;
  height: 400px;
  text-decoration: none;
  border-radius: 4px;
  margin: 10px;
  /* &:nth-child(2) { add this if i am going to doa button to learn more or something
    margin: 24px;
  } */
  &:hover {
    transform: scale(1.2);
    transition: all 0.75s ease-out;
    color: #424642;
  }
  @media screen and (max-width: 960px) {
    width: 75%;
    min-width: 200px;
    &:hover {
      transform: none;
    }
  }
`;

export const DayCardInfo = styled.div`
/* padding-bottom: 0px; */
  display: flex;
  flex-direction: column;
  height: 400px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const DayIcon = styled.div`
  margin: 24px 0;
  img {
    height:150px !important;
    max-width: 215px;
    /* overflow: hidden */

  }
`;
export const HouseHeader = styled.h3`
  margin-bottom: 5px;
  font-size: 18px;
`;
export const DayHeader = styled.h2`
  font-size: 30px;
`;

export const ZodiacHeader = styled.h6`
  font-size: 12px;
  margin-bottom: 24px;
`;
export const AboutDaySection = styled.p`
  margin: 16px 0 32px;
  display:flex;
  align-items: center;
  color: offwhite;
`;
