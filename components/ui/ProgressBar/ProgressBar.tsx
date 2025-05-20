import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ProgressBarProps {
  progress: number; // value between 0 and 1
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.filler, { width: `${Math.min(100, Math.max(0, progress * 100))}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 10,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  filler: {
    height: '100%',
    backgroundColor: '#007AFF',
  },
});

export default ProgressBar;