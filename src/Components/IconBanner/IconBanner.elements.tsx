import styled from "styled-components";

export const IconSection = styled.div`
  padding: 50px 0;
  background-color: #f3f4ed;
  width: 100%;
`;
export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const IconWrap = styled.div`
  color: #101522;
  font-size: 50px;
  margin-left: 10px;
  @media screen and (max-width: 775px) {
    font-size: 30px;
  } ;
`;
export const IconTitle = styled.div`
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  @media screen and (max-width: 775px) {
    font-size: 16px;
  } ;
`;
