import React from "react";
import styled from "styled-components";
import { media, space } from "../styles/helpers";
import { breakpoints } from "../styles/variables";
import logoPath from "../assets/logo.svg";
import Navigation from "../components/Navigation";

const HeaderSection = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  padding: ${space(2)};
  color: ${({ theme }) => theme.colors.white};
`;

const HeaderContainer = styled.div`
  display: flex;
  margin: auto;
  flex-grow: 1;
  z-index: 100;
  ${media.greaterThan('desktop')`
    max-width: ${breakpoints.desktop}px;
  `}
  ${media.between('tablet', 'desktop')`
    max-width: ${breakpoints.desktop}px;
  `}
  ${media.between('mobile', 'tablet')`
    max-width: ${breakpoints.tablet}px;
  `}
  ${media.lessThan('mobile')`
    max-width: ${breakpoints.mobile}px;
  `}
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  color: ${({ theme }) => theme.colors.white};
`;

const Logo = styled.img`
  margin-right: .6rem
`;

export default () => (
  <HeaderSection>
    <HeaderContainer>
      <LogoContainer>
        <Logo src={logoPath} alt="Logo" /> Applantic
      </LogoContainer>
      <Navigation />
    </HeaderContainer>
  </HeaderSection>
);
