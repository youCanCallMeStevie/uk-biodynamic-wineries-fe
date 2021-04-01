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
    padding: 50px 50px;
    button {
      margin-top: 10px;
    }
  } ;
`;


export const SmallScreenWrapper = styled.div`
display: flex;
flex-direction: row;
background-color: #101522;

`