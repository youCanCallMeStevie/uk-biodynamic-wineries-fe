import styled from "styled-components";
import { Link } from "react-router-dom";

export const MapSecContainer = styled.div`
  z-index: 1;
  width: 100%;
  /* max-height:50vh; */
  .leaflet-container,
  .leaflet-touch,
  .leaflet-fade-anim,
  .leaflet-grab,
  .leaflet-touch-drag,
  .leaflet-touch-zoom,
  .leaflet-control-container {
    position: relative !important;
    height: 50vh;
  }
  @media screen and (max-width: 991px) {
  padding: 30px;
    /* width: 60vw; */
  } ;
`;

export const MapSec = styled.div`
  background-color: #101522;
`;

export const PopupWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;

`


interface PopImg {
  src?: string;
}
export const PopupImg = styled.img<PopImg>`
  padding-right: 0;
  border:0;
  vertical-align: middle;
  display: inline-block;
  padding: 10px;
  width: 150px;
  height: 150px;
  object-fit: cover;

`

export const PopupCol = styled.div`

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
cursor: pointer;
width: auto;

`

export const PopupLink = styled(Link)`
  color: #f3f4ed;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  h3{ 
    font-size: 14px;
  line-height: 16px;
  letter-spacing: 1.4px;
  color: #1c2237;
  &:hover{
    color: #c06014;
  }
};
  p{ color: #1c2237;}
`;