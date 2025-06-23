/**
 * Below are the colors that are used in the app.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#00bc7d";
const tintColorDark = "#fff";
const darkBackground = "#151718"
const lightBackground = "#fff"

export const Colors = {
  white: "#fff",
  black: "#000",
  transparent: "transparent",
  primary: {
    p50: "#ecfdf5",
    p100: "#d0fae5",
    p200: "#a4f4cf",
    p300: "#5ee9b5",
    p400: "#00d492",
    p500: "#00bc7d",
    p600: "#009966",
    p700: "#007a55",
    p800: "#006045",
    p900: "#004f3b",
    p950: "#002c22",
  },
  light: {
    text: "#11181C",
    background: lightBackground,
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,

    labelTextColor: "#444",

    practCardBacgroundColor: "#f7f7f7",
    practCardBorderColor: "#e0e0e0",

    inputBacgroundColor: "#f7f7f7",
    inputBorderColor: "#00bc7d",

    pickerArrowColor: "#000"


  },
  dark: {
    text: "#ECEDEE",
    background: darkBackground,
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,


    labelTextColor: "#ECEDEE",

    practCardBacgroundColor: "#212329",
    practCardBorderColor: "#002c22",

    inputBacgroundColor: "#282a30",
    inputBorderColor: "#002c22",

    pickerArrowColor: "#ECEDEE"
  },
};
