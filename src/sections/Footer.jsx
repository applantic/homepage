import React from "react";
import styled from "styled-components";
import { media, space } from "../styles/helpers";

const FooterSection = styled.footer`
  background: ${({ theme }) => theme.secondaryGradient};
  color: ${({ theme }) => theme.colors.white};
  padding: ${space(8)} ${space(2)} ${space(4)};
  position: relative;
`;

const FooterContainer = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: space-evenly;
  ${media.greaterThan('tablet')`
    flex-direction: row;
  `}
`;

const Header = styled.div`
  font-weight: bold;
  font-size: 59px;
  line-height: 71px;
`

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
