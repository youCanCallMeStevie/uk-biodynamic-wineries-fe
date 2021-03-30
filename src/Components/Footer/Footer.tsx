import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import MoonIcon from "../MoonIcon/MoonIcon";
import {
  FooterContainer,
  FooterLinksWrapper,
  FooterItems,
  FooterLinkTitle,
  FooterLink,
  FooterLinksContainer,
  SocialIconLink,
  SocialIcons,
  Copright,
  SiteLogo,
  SocialWrapper,
  SocialContainer,
  MoonWrapper,
  MoonText,
} from "./Footer.elements";

function Footer({ moonPhase }: any) {
  return (
    <>
      <FooterContainer />
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to="/">Link</FooterLink>
            <FooterLink to="/">Link</FooterLink>
            <FooterLink to="/">Link</FooterLink>
          </FooterItems>
          <FooterItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to="/">Link</FooterLink>
            <FooterLink to="/">Link</FooterLink>
            <FooterLink to="/">Link</FooterLink>
          </FooterItems>
        </FooterLinksWrapper>

        <FooterLinksWrapper>
          <FooterItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to="/">Link</FooterLink>
            <FooterLink to="/">Link</FooterLink>
            <FooterLink to="/">Link</FooterLink>
          </FooterItems>
          <FooterItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to="/">Link</FooterLink>
            <FooterLink to="/">Link</FooterLink>
            <FooterLink to="/">Link</FooterLink>
          </FooterItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialContainer>
        <SocialWrapper>
          <MoonWrapper>
            <SiteLogo to="/">
              <MoonIcon />
            </SiteLogo>
            <MoonText>Today's Moon: {moonPhase}</MoonText>
          </MoonWrapper>
          <SocialIcons>
            <SocialIconLink
              href={"https://github.com/youCanCallMeStevie"}
              target="_blank"
              aria-lable="Github"
            >
              <FaGithub />
            </SocialIconLink>
            <SocialIconLink
              href={"https://www.instagram.com/steviecodes"}
              target="_blank"
              aria-lable="Instagram"
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={"https://www.linkedin.com/in/youcancallmestevie/"}
              target="_blank"
              aria-lable="Linked"
            >
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
          <Copright>S R Flanagan ©2021</Copright>
        </SocialWrapper>
      </SocialContainer>
      <FooterContainer />
    </>
  );
}

export default Footer;
