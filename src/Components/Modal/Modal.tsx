import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../styles/globalStyles";
import { toggleModalActions } from "../../store/actions/modalActions";

import {
  Background,
  ModalWrapper,
  ModalImg,
  ModalContent,
  CloseModalBtn,
} from "./Modal.elements";

function Modal() {
  const dispatch = useDispatch();
  return (
    <Background>
      <ModalWrapper>
        <ModalImg
          src={require("../../assets/illustrations/nature_tech.svg")}
          alt="nature and tech illustration"
        />
        <ModalContent>
          <h1>Are you ready?</h1>
          <p> Sign up or log in blah blah</p>
          <Button primary> Login or Sign up</Button>
          <CloseModalBtn
            onClick={() => dispatch(toggleModalActions(false, ""))}
          />
        </ModalContent>
      </ModalWrapper>
    </Background>
  );
}

export default Modal;
