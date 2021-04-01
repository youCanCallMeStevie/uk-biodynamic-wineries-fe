import styled from "styled-components";

interface IClick {
  // children?: Element;
  onClick: () => void;
  click?: any;
}


export const SearchWrapper = styled.form`
  display: flex;
  justify-content: start;
  align-items: center;
  @media screen and (max-width: 990px) {
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