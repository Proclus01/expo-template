import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

interface RadioButtonProps {
  selected?: boolean;
  onPress?: () => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ selected = false, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.outerCircle}>
      {selected && <View style={styles.innerCircle} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  outerCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#007AFF',
  },
});

export default RadioButton;