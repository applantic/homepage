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
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
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

const HeroText = styled.div`
  z-index: 20;
  margin-bottom: 6rem;
  padding-right: 0rem;
  ${media.greaterThan('mobile')`
    padding-right: 1rem;
  `}
  ${media.greaterThan('tablet')`
    margin-bottom: 0;
    padding-right: 0;
  `}
`;

const Header = styled.h1`
  font-weight: bold;
  font-size: 59px;
  line-height: 71px;
  margin-top: 6rem
  ${media.lessThan('tablet')`
    font-size: 30px;
    line-height: 36px;
    margin-top: 4rem
  `}
`

const Paragraph = styled.p`
  font-size: 25px;
  line-height: 35px;
`

const ImageMatt = styled.img`
  z-index: 100;
  margin-top: 2rem;
  margin-right: 2rem;
  width: 50%
  ${media.lessThan('desktop')`
    margin-right: 0
  `}
  ${media.lessThan('tablet')`
    display: none
  `}
`;

export default () => (
  <HeroSection>
    <HeroContainer>
      <HeroText>
        <Header>Building software for the modern world</Header>
        <Paragraph>Our professional team works hard to fit your needs by integrating.</Paragraph>
        <ButtonPrimary href='#team' target='_blank'>
          Read more
        </ButtonPrimary>
      </HeroText>
      <ImageMatt src={matt} />
    </HeroContainer>
    <WhiteOverlay src={whiteBg} />
  </HeroSection>
);
