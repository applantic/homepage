import styled, { css } from "styled-components";
import { media, space } from "../styles/helpers";
import { transparentize } from "polished";

const buttonStyles = css`
  color: ${({ theme }) => theme.colors.white};
  padding: ${space(1.5)} ${space(4)};
  border: none;
  border-radius: ${space()};
  font-weight: 500;
  margin: 0 auto;
  box-shadow: 0px 3px 5px
    ${({ theme }) => transparentize(0.75, theme.colors.black)};
  ${media.greaterThan('tablet')`
    margin-left: 0  
    margin-right: auto
  `}
`;

export const ButtonPrimary = styled.button`
  ${buttonStyles};
  background-color: ${({ theme }) => theme.primary};
`;

export const ButtonSecondary = styled.button`
  ${buttonStyles};
  background-color: ${({ theme }) => theme.secondary};
`;
