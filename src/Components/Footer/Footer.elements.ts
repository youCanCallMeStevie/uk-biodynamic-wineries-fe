import styled from "styled-components";
import { Link } from "react-router-dom";
import { WiMoonWaningGibbous6 } from "react-icons/wi";

export const FooterContainer = styled.div`
  background-color: #536162;
  padding: 4rem, 0 2em 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  /* max-width: 1000px; */
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  @media screen and (min-width: 820px) {
    padding-top: 32px;
  }
`;
export const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    margin-top: 2rem;
  }
`;
export const FooterItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #f3f4ed;
  @media screen and (max-width: 420px) {
    margin: 0px;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #f3f4ed;
  text-decoration: none;
  margin-bottom: 0.5rem;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    color: #c06014;
    transition: 0.3s ease-out;
  }
`;

export const SocialContainer = styled.section`
  /* max-width: 1000px; */
  width: 100%;
`;

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  /* max-width: 1000px; */
  margin: 40px auto 20px auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SiteLogo = styled(Link)`
  color: #f3f4ed;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const MoonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 820px) {
    margin-bottom: 20px;
  }
`;

export const MoonText = styled.div`
  color: #f3f4ed;
  font-size: 12px;
  margin-bottom: 12px;
  @media screen and (max-width: 820px) {
    font-size: 16px;
  }
`;

export const Copright = styled.small`
  color: #f3f4ed;
  margin-bottom: 8px;
  @media screen and (max-width: 820px) {
    margin-top: 16px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #f3f4ed;
  font-size: 24px;
  &:hover {
    color: #c06014;
    transition: 0.3s ease-out;
  }
`;
