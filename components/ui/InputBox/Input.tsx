import React, { useState, useEffect, useRef } from "react";
import { TextInput, StyleSheet, TextInputProps, Animated, View, Text, TextStyle } from "react-native";
import { useTheme } from "react-native-paper";

type CustomInputProps = TextInputProps & {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: string;
  secureTextEntry?: boolean;
  width?: string | number;
};

export default function Input({
  label,
  value,
  onChangeText,
  keyboardType = "default",
  secureTextEntry = false,
  width = "80%",
  placeholder,
  ...rest
}: CustomInputProps) {
  const { colors } = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isFocused ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused]);

  const borderColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.onBackground, colors.primary],
  });

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.surface, colors.background],
  });

  const placeholderColor = colors.outline;
  const textColor = isFocused ? colors.onBackground : colors.onSurface;

  return (
    <View style={{ width: width as TextStyle["width"] }}>
      <Animated.View style={[styles.inputContainer, { borderColor, backgroundColor, borderWidth: 0.75 }]}>
        <TextInput
          style={[styles.input, { color: textColor }]} 
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...rest}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 2,
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 24,
  },
  input: {
    padding: 12,
    fontSize: 16,
  },
});