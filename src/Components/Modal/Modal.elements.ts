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
  height: 500px;
  background: #1c2237;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 100000;
  border-radius: 8px;
`;

export const ModalImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #000;
  border-radius: 10px 0 0 10px;
  img {
    margin-top: 5%;
    max-width: 300px;
    padding: 10px 24px;
  }
`;
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  h1 {
    margin-bottom: 24px;
    color: #a9b3c1; 
    font-size: 48px;
    line-height: 1.1;
    text-align: left;
    padding: 10px 24px;

  }
  h2 {
    font-size: 18px;
    color: #a9b3c1;
    line-height: 16px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
  }
  p {
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: #f7f8fa;
    padding: 10px 24px;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

export const CloseModalBtn = styled(FaTimes)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 100000;
`;
