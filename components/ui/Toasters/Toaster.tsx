import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

interface ToasterProps {
  message: string;
  duration?: number;
  onClose?: () => void;
}

const Toaster: React.FC<ToasterProps> = ({ message, duration = 3000, onClose }) => {
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        if (onClose) onClose();
      });
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  message: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Toaster;