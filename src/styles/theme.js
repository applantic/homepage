import colors from "./colors";

export const createTheme = ({ primary, secondary }) => ({
  primary,
  secondary,
  colors,
  primaryGradient: `linear-gradient(90deg, ${colors.darkPeach} 0%, ${
    colors.peach
  } 100%)`,
  secondaryGradient: `linear-gradient(90deg, ${colors.oceanBlue} 0%, ${
    colors.scampi
  } 100%)`,
});

export default createTheme({
  primary: colors.oceanBlue,
  secondary: colors.powder
});
