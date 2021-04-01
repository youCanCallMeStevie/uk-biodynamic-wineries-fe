import styled from "styled-components";

interface Background {
  lightBg: boolean;
}

export const InfoSec = styled.div<Background>`
  color: #f3f4ed;
  padding: 50px 0;
  background-color: ${({ lightBg }) => (lightBg ? "#f3f4ed" : "#101522")};
`;

interface Row {
  imgStart?: string;
}
export const InfoRow = styled.div<Row>`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoCol = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export interface Color {
  lightTopLine?: boolean;
  lightText?: boolean;
  lightTextDesc?: boolean;
}
export const TopLine = styled.div<Color>`
  color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : "#c06014")};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Heading = styled.h1<Color>`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};
`;

export const Subtitle = styled.p<Color>`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#1c2237")};
`;

interface Position {
  start?: string;
}
export const ImgWrapper = styled.div<Position>`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

interface BannerImg {
  src?: string;
}
export const Img = styled.img<BannerImg>`
  padding-right: 0;
  border:0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`