import React from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native"; // ← added
import { Button as PaperButton } from "react-native-paper";

type ButtonProps = {
  title: string;
  onPress: () => void;
  loading?: boolean;
  mode?: "text" | "contained" | "outlined" | "elevated";
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;                                   // ← NEW
};

export default function Button({
  title,
  onPress,
  loading = false,
  mode = "contained",
  disabled = false,
  style,                                                          // ← NEW
}: ButtonProps) {
  return (
    <PaperButton
      mode={mode}
      onPress={onPress}
      loading={loading}
      disabled={disabled}
      style={[styles.button, style]}                              // ← MODIFIED
      contentStyle={styles.content}
      buttonColor="#000"
      labelStyle={styles.label}
    >
      {title}
    </PaperButton>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5, // matching the classic button border radius
    marginVertical: 5,
  },
  content: {
    padding: 10, // mimicking the custom button's padding
    alignItems: "center", // centers the content as in the classic button
  },
  label: {
    color: "#fff", // white text
    fontWeight: "bold", // bold text styling
  },
});