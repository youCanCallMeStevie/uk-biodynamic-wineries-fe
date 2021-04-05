import styled from 'styled-components';

export const GalleryContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 40%;
  user-select: none;
  background-color: #1c1c1c;
  box-shadow: 0 0 22px rgba(0, 0, 0, 0.5);
  input {
    display: none;
  }
`;

interface PropsImageWrapper {
  image: ImageData;
}

export const ImageWrapper = styled.div<PropsImageWrapper>`
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center center;
  position: absolute;
  width: 100%;
  height: 100%;
  visibility: hidden;
  @keyframes scroll {
    0% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Move = styled.label`
  width: 12%;
  height: inherit;
  position: absolute;
  top: 0;
  transition: 0.45s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    border-radius: 50%;
    width: 60%;
    padding-bottom: 60%;
    background-color: rgba(35, 47, 169, 0.3);
    position: relative;
  }
  > div > span {
    position: absolute;
    top: 25%;
    width: 0px;
    height: 0px;
  }
  &:hover {
    background-color: rgba(239, 116, 96, 0.3);
  }
`;

export const Prev = styled(Move)`
  left: 0;
  > div > span {
    left: 30%;
    width: 25%;
    height: 0;
    padding-top: 25%;
    padding-bottom: 25%;
    overflow: hidden;
    &::after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      margin-top: -500px;
      border-top: 500px solid transparent;
      border-bottom: 500px solid transparent;
      border-right: 500px solid rgba(70, 121, 189, 1);
    }
  }
`;

export const Next = styled(Move)`
  right: 0;
  > div > span {
    right: 30%;
    width: 0;
    height: 0;
    padding-top: 25%;
    padding-bottom: 25%;
    padding-left: 25%;
    overflow: hidden;
    &::after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      margin-top: -500px;
      margin-left: -500px;
      border-top: 500px solid transparent;
      border-bottom: 500px solid transparent;
      border-left: 500px solid rgba(70, 121, 189, 1);
    }
  }
`;