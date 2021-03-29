import styled from "styled-components";

export const MapSecContainer = styled.div`
  z-index: 1;
  width: 100%;
  /* max-width: 1300px; */
  /* margin-bottom: 50px; */
  @media screen and (max-width: 991px) {
    max-height: 50vh;
    padding-left: 30px;
    padding-right: 30px;
  };
`;

export const MapSec = styled.div`
  /* color: #f3f4ed; */
  /* padding: 160px 0; */
  background-color: #101522;
  z-index: 500px; 
  .leaflet-pane, .leaflet-tile, .leaflet-marker-icon,
    .leaflet-marker-shadow, .leaflet-tile-container,
    .leaflet-pane > canvas, .leaflet-zoom-box, .leaflet-image-layer,
    .leaflet-layer {
    position: relative !important;
    left: 0;
    top: 0;
    max-height:20vh
  }
`;

export const ButtonWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 100px;
  padding-right:100px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;