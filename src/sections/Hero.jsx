import React from "react";
import styled from "styled-components";
import { space } from "../styles/helpers";
import { ButtonPrimary, ButtonSecondary } from "../components/Button";

const HeroContainer = styled.section`
  background: ${({ theme }) => theme.primaryGradient};
  padding: ${space(8)} ${space(2)} ${space(4)};
`;

export default () => (
  <HeroContainer>
    <ButtonPrimary>Read more</ButtonPrimary>
    <ButtonSecondary>Read more</ButtonSecondary>
  </HeroContainer>
);
