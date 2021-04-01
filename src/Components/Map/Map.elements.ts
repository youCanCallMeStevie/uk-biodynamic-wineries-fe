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
    /* width: 60vw; */
  } ;
`;

export const MapSec = styled.div`
  background-color: #101522;
`;
