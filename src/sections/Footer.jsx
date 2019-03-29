import React from "react";
import styled from "styled-components";
import { media, space } from "../styles/helpers";
import { breakpoints } from "../styles/variables";
// import matt from "../assets/matt.png"

const FooterSection = styled.footer`
  background: ${({ theme }) => theme.secondaryGradient};
  color: ${({ theme }) => theme.colors.white};
  padding: ${space(8)} ${space(2)} ${space(4)};
  position: relative;
`;

const FooterContainer = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-evenly;
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

const Header = styled.div`
  font-weight: bold;
  font-size: 59px;
  line-height: 71px;
`

// const Image = styled.img`
//   z-index: 100;
// `;

export default () => (
  <FooterSection id='contact'>
    <FooterContainer>
      <div>
        <Header>Ask a question</Header>
      </div>
      <div>
        <Header>Contact</Header>
      </div>
      {/* <Image src={matt} /> */}
    </FooterContainer>
  </FooterSection>
);
