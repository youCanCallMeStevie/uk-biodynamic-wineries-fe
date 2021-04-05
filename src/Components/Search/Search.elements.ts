import styled from "styled-components";

interface IClick {
  // children?: Element;
  onClick: () => void;
  click?: any;
}

export const SearchContainer = styled.div`
padding-bottom: 10px;
background-color: #101522;
`
export const SearchWrapper = styled.form`
margin: 10px 50px 20px 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 990px) {
    justify-content: center;
    flex-direction: column;
    margin-top: 2rem;
    button {
      /* width:60%; */
      width: 200px;

    }
  }
`;



export const DayHeading = styled.h1`
color: #c06014;
font-size: 1.5rem;
padding: 0.5rem;
@media screen and (max-width: 990px) {
    font-size:16px;
  }

`