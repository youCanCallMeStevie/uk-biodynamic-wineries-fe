import styled from "styled-components";

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
    padding-left: 30px;
    padding-right: 30px;
    max-height: 100vh;
  } ;
`;

export const MapSec = styled.div`
  background-color: #101522;
`;

export const ButtonWrapper = styled.div`
  max-width: 540px;
  position: absolute;
  top:200px;
  left:50px; 
  /* padding-top: 0;
  padding-bottom: 100px;
  padding-right: 100px; */
  z-index: 5005;
  background-color: transparent;

  @media screen and (max-width: 768px) {
    position: relative;
    top: 1rem;
    left: 0;
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

