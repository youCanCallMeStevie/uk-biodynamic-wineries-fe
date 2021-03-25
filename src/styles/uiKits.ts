import styled, { css } from "styled-components";
//buttons
//logo
//cards
//dividers
//avatar
//inputs
//text areas

interface Image {
  src: string; //how can i fix :(
}
export const Image = styled.img<Image>``;

export const Avatar = styled.div`
  height: 50px;
  width: 50px;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%fit-content;
    object-fit: cover;
  }
`;
