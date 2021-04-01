import styled from "styled-components";

export const LargeSearch = styled.div`
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export const SmallSearch = styled.div`
  display: none;
  @media screen and (max-width: 990px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 30px;
    padding-right: 30px;
  } ;
`;
