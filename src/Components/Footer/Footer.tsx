import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import {
  FooterContainer,
  FooterLinksWrapper,
  FooterItems,
  FooterLinkTitle,
  FooterLink,
  FooterLinksContainer,
  SocialIconLink,
  SocialIcons,
  WebsiteRights,
  SiteIcon,
  SiteLogo,
  SocialWrapper,
  SocialContainer,
} from "./Footer.elements";
function Footer() {
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
          <SiteLogo to="/">
            <SiteIcon>Steview</SiteIcon>
          </SiteLogo>
          <WebsiteRights>S R Flanagan ©2021</WebsiteRights>
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
        </SocialWrapper>
      </SocialContainer>
      <FooterContainer />
    </>
  );
}

export default Footer;
