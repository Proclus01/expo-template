import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

interface CheckboxProps {
  checked?: boolean;
  onToggle?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked = false, onToggle }) => {
  const handlePress = () => {
    if (onToggle) {
      onToggle(!checked);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={[styles.checkbox, checked && styles.checked]}>
      {checked && <View style={styles.inner} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    borderColor: '#007AFF',
  },
  inner: {
    width: 16,
    height: 16,
    backgroundColor: '#007AFF',
  },
});

export default Checkbox;