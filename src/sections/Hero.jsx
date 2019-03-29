import React from "react";
import styled from "styled-components";
import { media, space } from "../styles/helpers";
import { breakpoints } from "../styles/variables";
import { ButtonPrimary } from "../components/Button";
import matt from "../assets/matt.png"
import whiteBg from "../assets/bg-white.svg"

const HeroSection = styled.section`
  background: ${({ theme }) => theme.primaryGradient};
  color: ${({ theme }) => theme.colors.white};
  padding: ${space(8)} ${space(2)} ${space(4)};
  position: relative;
`;

const WhiteOverlay = styled.img`
  position: absolute;
  bottom 0;
  width: 100vw;
`;

const HeroContainer = styled.div`
  display: flex;
  margin: auto;
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

const Header = styled.h1`
  font-weight: bold;
  font-size: 59px;
  line-height: 71px;
`

const Paragraph = styled.p`
  font-size: 25px;
  line-height: 35px;
`

const Image = styled.img`
  z-index: 100;
`;

export default () => (
  <HeroSection>
    <HeroContainer>
      <div>
        <Header>Building software for the modern world</Header>
        <Paragraph>Our professional team works hard to fit your needs by integrating.</Paragraph>
        <ButtonPrimary>Read more</ButtonPrimary>
      </div>
      <Image src={matt} />
    </HeroContainer>
    <WhiteOverlay src={whiteBg} />
  </HeroSection>
);
