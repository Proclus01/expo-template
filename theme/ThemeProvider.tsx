import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "./theme";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <PaperProvider theme={theme}>{children}</PaperProvider>;
};