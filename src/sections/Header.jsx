import React from "react";
import styled from "styled-components";
import logoPath from "../assets/logo.svg";
import Navigation from "../components/Navigation";
import { space } from "../styles/helpers";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  padding: ${space(2)};
  color: ${({ theme }) => theme.colors.white};
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
`;

const Logo = styled.img`
  margin-right: .6rem
`;

export default () => (
  <HeaderContainer>
    <LogoContainer>
      <Logo src={logoPath} alt="Logo" /> Applantic
    </LogoContainer>
    <Navigation />
  </HeaderContainer>
);
