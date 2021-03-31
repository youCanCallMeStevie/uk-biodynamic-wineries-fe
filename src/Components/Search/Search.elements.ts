import styled from "styled-components";

interface IClick {
  // children?: Element;
  onClick: () => void;
  click?: any;
}

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  button {
    margin: 0;
    min-width: 200px;
  }
`;

export const SearchWrapper = styled.form`
  display: flex;
  justify-content: start;
  align-items: center;
  
  @media screen and (max-width: 960px) {
    flex-direction: column;
    margin-top: 2rem;
  }
`;

export const SearchInput = styled.input`
  min-width: 200px;
  height: 30px;
  margin: 10px 20px 10px 0;
  border-radius: 8px;
  padding: 10px 20px;
  border-radius: 2px;
  outline: none;
  border: none;
  font-size: 10px;
  border: 1px solid #fff;
`;
