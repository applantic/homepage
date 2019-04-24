import React from "react";
import styled from "styled-components";
import { media, space } from "../styles/helpers";
import email from "../assets/email.svg"

const FooterSection = styled.footer`
  background: ${({ theme }) => theme.secondaryGradient};
  color: ${({ theme }) => theme.colors.white};
  padding: ${space(8)} ${space(2)} ${space(8)};
  position: relative;
`;

const FooterContainer = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center
`;

const Header = styled.div`
  font-weight: bold;
  font-size: 59px;
  line-height: 71px;
  ${media.lessThan('tablet')`
    font-size: 30px;
    line-height: 36px;
    text-align: center
  `}
`

const Image = styled.img`
  padding: 0 20px 0 0;
  ${media.lessThan('tablet')`
    padding: 0 10px 0 0;
  `}
`;

const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px
`;

export default () => (
  <FooterSection id='contact'>
    <FooterContainer>
      <Header>Contact</Header>
      <EmailContainer>
        <Image src={email} /> <a href='mailto:kontakt@applantic.pl'>kontakt@applantic.pl</a>
      </EmailContainer>
    </FooterContainer>
  </FooterSection>
);
