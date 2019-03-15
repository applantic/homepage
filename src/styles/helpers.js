import { css } from "styled-components";
import { unit, breakpoints } from "./variables";

export function space(multiplier = 1, baseUnit = unit) {
  return multiplier * baseUnit + "px";
}

function getBreakpointValue(breakpointValue, unit = "px") {
  if (breakpoints[breakpointValue]) {
    return breakpoints[breakpointValue] + unit;
  } else if (parseInt(breakpointValue)) {
    return breakpointValue + unit;
  } else {
    console.warn("Not a valid breakpoint");
    return "0";
  }
}

export const media = {
  lessThan: breakpoint => (...args) => css`
    @media (max-width: ${getBreakpointValue(breakpoint)}) {
      ${css(...args)};
    }
  `,
  greaterThan: breakpoint => (...args) => css`
    @media (min-width: ${getBreakpointValue(breakpoint)}) {
      ${css(...args)};
    }
  `,
  between: (firstBreakpoint, secondBreakpoint) => (...args) => css`
    @media (min-width: ${getBreakpointValue(
        firstBreakpoint
      )}) and (max-width: ${getBreakpointValue(secondBreakpoint)}) {
      ${css(...args)};
    }
  `
};

export default {
  space,
  media
};
