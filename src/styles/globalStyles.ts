import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding:0;
    font-family: "Source Sans Pro", sans-serif;
}
`;
//buttons
//logo
//cards
//dividers
//avatar
//inputs
//text areas

interface IImage {
  src: string;
}
export const Image = styled.img<IImage>``;

export const Avatar = styled.div`
  height: 50px;
  width: 50px;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%fit-content;
    object-fit: cover;
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 50px;
  padding-right: 50px;
  @media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

// FIX THIS LATER
interface IButton {
  primary?: any;
  big?: any;
  fontBig?: any;
}
export const Button = styled.button<IButton>`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#c06014" : "#424642")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #f3f4ed;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease;    
    background: #f3f4ed;
    background: ${({ primary }) => (primary ? "#424642" : "#c06014")};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyles;
