import styled, { css } from "styled-components";
import { space } from "../styles/helpers";
import { transparentize } from "polished";

const buttonStyles = css`
  color: ${({ theme }) => theme.colors.white};
  padding: ${space(1.5)} ${space(4)};
  border: none;
  border-radius: ${space()};
  font-weight: 500;
  box-shadow: 0px 3px 5px
    ${({ theme }) => transparentize(0.75, theme.colors.black)};
`;

export const ButtonPrimary = styled.button`
  ${buttonStyles};
  background-color: ${({ theme }) => theme.primary};
`;

export const ButtonSecondary = styled.button`
  ${buttonStyles};
  background-color: ${({ theme }) => theme.secondary};
`;
