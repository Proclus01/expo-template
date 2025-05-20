import { MD3LightTheme as DefaultTheme, MD3Theme } from "react-native-paper";

// Include your Roboto font imports
import { useFonts, Roboto_300Light, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

export const theme: MD3Theme = {
  ...DefaultTheme,
  // Global border radius override
  roundness: 5,
  colors: {
    ...DefaultTheme.colors,
    primary: "#000", // Using black for primary makes our button background black
    onPrimary: "#ffffff", // Ensures text on primary surfaces stays white
    secondary: "#4c5a9a",
    onSecondary: "#ffffff", 
    tertiary: "#8b309b",
    onTertiary: "#ffffff",

    // Surface Colors
    surface: "#fefefe", 
    onSurface: "#d9d9e5",
    surfaceDisabled: "#f0effc",
    onSurfaceDisabled: "#e8e7f3",

    outline: "#747687",

    primaryContainer: "#000",
    onPrimaryContainer: "#f8f7ff",
    secondaryContainer: "#eeedf9",
    onSecondaryContainer: "#d7dcff",

    background: "#fbfbfb",
    onBackground: "#000000",
    error: "#ba1a1a",
    outlineVariant: "#f2f1f1",
    onError: "#ffffff", 
    scrim: "rgba(0, 0, 0, 0.5)", // Scrim color for overlays
  },
  fonts: {
    ...DefaultTheme.fonts,
    bodyLarge: {
      ...DefaultTheme.fonts.bodyLarge,
      fontFamily: "Roboto_400Regular",
      fontWeight: "400",
      fontSize: 16,
      lineHeight: 24,
    },
    bodyMedium: {
      ...DefaultTheme.fonts.bodyMedium,
      fontFamily: "Roboto_400Regular",
      fontWeight: "400",
      fontSize: 14,
      lineHeight: 20,
    },
    bodySmall: {
      ...DefaultTheme.fonts.bodySmall,
      fontFamily: "Roboto_300Light",
      fontWeight: "300",
      fontSize: 12,
      lineHeight: 18,
    },
    headlineLarge: {
      ...DefaultTheme.fonts.headlineLarge,
      fontFamily: "Roboto_700Bold",
      fontWeight: "700",
      fontSize: 34,
      lineHeight: 40,
    },
    headlineMedium: {
      ...DefaultTheme.fonts.headlineMedium,
      fontFamily: "Roboto_700Bold",
      fontWeight: "700",
      fontSize: 24,
      lineHeight: 32,
    },
    headlineSmall: {
      ...DefaultTheme.fonts.headlineSmall,
      fontFamily: "Roboto_700Bold",
      fontWeight: "700",
      fontSize: 20,
      lineHeight: 28,
    },
    labelLarge: {
      ...DefaultTheme.fonts.labelLarge,
      fontFamily: "Roboto_700Bold",
      fontWeight: "700",
      fontSize: 16,
      lineHeight: 22,
    },
    labelMedium: {
      ...DefaultTheme.fonts.labelMedium,
      fontFamily: "Roboto_700Bold", // Bold label style for our buttons
      fontWeight: "700",
      fontSize: 16,
      lineHeight: 20,
    },
    labelSmall: {
      ...DefaultTheme.fonts.labelMedium,
      fontFamily: "Roboto_400Regular",
      fontWeight: "400",
      fontSize: 14,
      lineHeight: 18,
    },
  },
};