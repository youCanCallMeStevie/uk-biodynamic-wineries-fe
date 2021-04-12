import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100000;
`;

export const ModalWrapper = styled.div`
  width: 800px;
  height: 100%;
  background: #1c2237;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 100000;
  border-radius: 15px;
  @media screen and (max-width: 960px){
    width: 333px;
    display: flex;
justify-content: center;
align-items: center;  }
`;

export const ModalImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #1c2237;
  border-radius: 10px 0 0 10px;
  img {
    margin-top: 5%;
    max-width: 300px;
    padding: 10px 24px;
  }
  @media screen and (max-width: 960px){
    display: none;
  }
`;
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* line-height: 1.8; */
  color: #141414;
  padding:20px;
  h1 {
    margin-bottom: 16px;

    color: whitesmoke; 
    font-size: 45px;
    line-height: 1;
    /* text-align: left; */
    /* padding-left:18px; */

  }
  h2 {
    font-size: 24px;
    /* text-align: left; */
    color: #c06014;
    line-height: 16px;
    margin-bottom: 16px;
    line-height: 1.1;
  };
  h6 {
    font-size: 18px;
    color: #c06014;
    margin-bottom: 16px;
  };
  a {
    margin: 10px;
  }
  p {
    font-size: 18px;
    line-height: 24px;
    color: #f7f8fa;
    padding: 10px;
  };
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
    margin: 10px;

  };
  a {
    font-size: 16px;
    text-decoration: none;
    color: #f3f4ed;
    &:hover {
      color: #c06014;
      transition: all 0.3s ease;
    }


  }
  @media screen and (max-width: 960px){
    h1{
      margin-top: 10px;
      margin-bottom: 10px;
      line-height: .9;
      font-size: 38px;
    };
    h2{
      padding-left: 20px;
    }
  }
`;

export const CloseModalBtn = styled(FaTimes)`
  cursor: pointer;
  color: white;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 100000;
`;

export const SignInForm = styled.form`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;

`