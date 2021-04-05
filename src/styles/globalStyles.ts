import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding:0;
    font-family: "Roboto", sans-serif;
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
  src?: string;
}
export const Image = styled.img<IImage>``;

export const Avatar = styled.div`
  margin: 1rem;
  img {
    border-radius: 50px;
    height: 40px;
    width: 40px;
    overflow: hidden;
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
  /* background-color: #101522; */
  @media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  } ;
`;

// FIX THIS LATER
interface IButton {
  primary?: boolean;
  big?: any;
  fontBig?: any;
}
export const Button = styled.button<IButton>`
  border-radius: 8px;
  background: ${({ primary }) => (primary ? "#c06014" : "#101522")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #f3f4ed;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  z-index: 5001;
  &:hover {
    transition: all 0.3s ease;
    background: #f3f4ed;
    background: ${({ primary }) => (primary ? "#424642" : "#c06014")};
  }
  @media screen and (max-width: 960px) {
    width: 80%;
  }
`;

export const Input = styled.input`
  min-width: 200px;
  height: 30px;
  margin: 10px;
  border-radius: 8px;
  padding: 10px 20px;
  border-radius: 2px;
  outline: none;
  border: none;
  font-size: 10px;
  border: 1px solid #fff;
`;
export default GlobalStyles;
