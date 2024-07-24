// allow long constants file
/* eslint-disable max-lines */
// Based mostly on https://github.com/Uniswap/interface/blob/main/theme/index.tsx

export interface GlobalPalette {
  primary: string;
  primary100: string;
  primary200: string;
  primary300: string;
  primary400: string;
  secondary: string;
  secondary100: string;
  secondary200: string;
  secondary300: string;
  secondary400: string;
  success: string;
  info: string;
  warning: string;
  error: string;
  disabled: string;
  disabledButton: string;
  greyscale50: string;
  greyscale100: string;
  greyscale200: string;
  greyscale300: string;
  greyscale400: string;
  greyscale500: string;
  greyscale600: string;
  greyscale700: string;
  greyscale800: string;
  greyscale900: string;
  dark1: string;
  dark2: string;
  dark3: string;
  white: string;
  black: string;
  red: string;
  pink: string;
  purple: string;
  deepPurple: string;
  indigo: string;
  blue: string;
  lightBlue: string;
  cyan: string;
  teal: string;
  green: string;
  lightGreen: string;
  lime: string;
  yellow: string;
  amber: string;
  orange: string;
  deepOrange: string;
  brown: string;
  blueGrey: string;
  backgroundGreen: string;
  backgroundBlue: string;
  backgroundOrange: string;
  backgroundPink: string;
  backgroundYellow: string;
  backgroundPurple: string;
  transparentGreen: string;
  transparentBlue: string;
  transparentYellow: string;
  transparentOrange: string;
  transparentPurple: string;
  transparentRed: string;
  transparentCyan: string;
}

export const colors: GlobalPalette = {
  primary: "#0FD856",
  primary100: "#D8FFE5",
  primary200: "#B4FECD",
  primary300: "#7AFBA7",
  primary400: "#47F082",
  secondary: "#FFD300",
  secondary100: "#FFFBE6",
  secondary200: "#FFED99",
  secondary300: "#FFE566",
  secondary400: "#FFDC33",
  success: "#07BD74",
  info: "#4353FF",
  warning: "#FF981F",
  error: "#F75555",
  disabled: "#D8D8D8",
  disabledButton: "#29974D",
  greyscale50: "#FAFAFA",
  greyscale100: "#F5F5F5",
  greyscale200: "#EEEEEE",
  greyscale300: "#E0E0E0",
  greyscale400: "#BDBDBD",
  greyscale500: "#9E9E9E",
  greyscale600: "#757575",
  greyscale700: "#616161",
  greyscale800: "#424242",
  greyscale900: "#212121",
  dark1: "#181A20",
  dark2: "#1F222A",
  dark3: "#35383F",
  white: "#FFFFFF",
  black: "#000000",
  red: "#F54336",
  pink: "#EA1E61",
  purple: "#9D28AC",
  deepPurple: "#673AB3",
  indigo: "#3F51B2",
  blue: "#1A96F0",
  lightBlue: "#00A9F1",
  cyan: "#00BCD3",
  teal: "#009689",
  green: "#4AAF57",
  lightGreen: "#8BC255",
  lime: "#CDDC4C",
  yellow: "#FFEB4F",
  amber: "#FFC02D",
  orange: "#FF981F",
  deepOrange: "#FF5726",
  brown: "#7A5548",
  blueGrey: "#607D8A",
  backgroundGreen: "#F1FEF5",
  backgroundBlue: "#F5F7FF",
  backgroundOrange: "#FFF8ED",
  backgroundPink: "#FFF5F5",
  backgroundYellow: "#FFFEE0",
  backgroundPurple: "#FCF4FF",
  transparentGreen: "#1BAC4B14",
  transparentBlue: "#4353FF14",
  transparentYellow: "#FACC1514",
  transparentOrange: "#FF980014",
  transparentPurple: "#9C27B014",
  transparentRed: "#F7555514 ",
  transparentCyan: "#00BCD414",
};

export interface Palette {
  background: string;
  background2: string;
  background3: string;
  secondary: string;
  textPrimary: string;
  textSecondary: string;
  primary: string;
  success: string;
  info: string;
  warning: string;
  error: string;
  disabled: string;
  disabledButton: string;
  none: string;
  black: string;
  white: string;
}

export const colorsLight: Palette = {
  background: colors.white,
  background2: colors.white,
  background3: colors.white,
  secondary: colors.secondary,
  textPrimary: colors.greyscale900,
  textSecondary: colors.greyscale800,
  primary: colors.primary,
  success: colors.success,
  info: colors.info,
  warning: colors.warning,
  error: colors.error,
  disabled: colors.disabled,
  disabledButton: colors.disabledButton,
  none: "transparent",
  black: colors.black,
  white: colors.white,
};

export const colorsDark: Palette = {
  background: colors.dark1,
  background2: colors.dark2,
  background3: colors.dark3,
  secondary: colors.secondary,
  textPrimary: colors.white,
  textSecondary: colors.white,
  primary: colors.primary,
  success: colors.success,
  info: colors.info,
  warning: colors.warning,
  error: colors.error,
  disabled: colors.disabled,
  disabledButton: colors.disabledButton,
  none: "transparent",
  black: colors.black,
  white: colors.white,
};
