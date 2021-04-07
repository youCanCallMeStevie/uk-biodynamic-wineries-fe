import styled from "styled-components";

export const Tab = styled.div`
  position: absolute;
  top: 3.5rem;
  right: 9rem;
  width: 0;
  height: 0;
  border-left: 16px solid transparent;
  border-right: 16px solid transparent;
  border-bottom: 16px solid rgba(255, 255, 255, 0.9);
  z-index: 100001;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const DropdownContainer = styled.div`
  position: absolute;
  top: 4.5rem;
  right: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
  flex-direction: column;
  padding: 20px 10px;
  border-radius: 8px;
  z-index: 100000;
  max-width: 500px;
  color: black;
  box-shadow: 3px 3px 5px 3px rgba(62, 62, 62, 0.4);
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const Divider = styled.div`
  border-bottom: 1px solid grey;
  width: 100px;
  margin: 0.5rem;
`;
