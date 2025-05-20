import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CTAProps {
  label: string;
  onPress: () => void;
  style?: object;
  labelStyle?: object;
}

const CTA: React.FC<CTAProps> = ({ label, onPress, style, labelStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    margin: 10,
  },
  label: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default CTA;