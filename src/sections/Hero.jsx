import React from "react";
import styled from "styled-components";
import { space } from "../styles/helpers";
import { ButtonPrimary } from "../components/Button";

const HeroContainer = styled.section`
  background: ${({ theme }) => theme.primaryGradient};
  color: ${({ theme }) => theme.colors.white};
  padding: ${space(8)} ${space(2)} ${space(4)};
`;

export default () => (
  <HeroContainer>
    <h1>Building software for the modern world</h1>
    <p>Our professional team works hard to fit your needs by integrating.</p>
    <ButtonPrimary>Read more</ButtonPrimary>
  </HeroContainer>
);
