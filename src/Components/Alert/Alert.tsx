//   return (
//     <div className="model is-active has-text-centered">
//       <div className="modal-background" onClick={onClose}></div>
//       <div className="modal-card">
//         <header className="modal-card-head has-background-danger">
//           <p className="modal-card-title has-text-white">{message}</p>
//         </header>
//         <footer className="modal-card-foot" style={{justifyContent: 'center'}}><button onClick={onClose}>
//             Close</button></footer>
//       </div>
//     </div>
//   );
// }

// export default Alert;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Image } from "../../styles/globalStyles";
import { getVineyardAction } from "../../store/actions/vineyardActions";
import { toggleModalActions } from "../../store/actions/modalActions";
import MoonImg from "../../assets/illustrations/moon_only.svg";
import { useSpring, animated } from "react-spring";
import { RootState } from "../../store";
import {
  Background,
  ModalWrapper,
  ModalImgWrapper,
  ModalContent,
  CloseModalBtn,
} from "./Alert.elements";

interface AlertProps {
  message: string;
  onClose: () => void;
}
function Alert({ message, onClose }: AlertProps) {
  const modalStatus = useSelector((state: RootState) => state.modal.isOpen);

  const dispatch = useDispatch();

  const animation = useSpring({
    config: { duration: 500 },
    opacity: !modalStatus ? 0 : 1,
    transform: !modalStatus ? `translateY(-100%)` : `translateY(0%)`,
  });

  const contentSection = () => {
    return (
      <>
        <ModalImgWrapper>
          <Image src={MoonImg} alt="nature and tech illustration" />
        </ModalImgWrapper>
        <ModalContent>
          <h1>{message}</h1>
          <Button
            primary
            onClick={() =>
              dispatch(getVineyardAction()) &&
              dispatch(toggleModalActions(false, ""))
            }
          >
            See All Vineyards
          </Button>
          <CloseModalBtn
            onClick={() => dispatch(toggleModalActions(false, ""))}
          />
        </ModalContent>
      </>
    );
  };

  return (
    <Background>
      <animated.div style={animation}>
        <ModalWrapper>{contentSection()}</ModalWrapper>
      </animated.div>
    </Background>
  );
}

export default Alert;
