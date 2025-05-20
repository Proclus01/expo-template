import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface BadgeProps {
  label: string;
  backgroundColor?: string;
  textColor?: string;
}

const Badge: React.FC<BadgeProps> = ({ label, backgroundColor = '#007AFF', textColor = '#fff' }) => {
  return (
    <View style={[styles.badge, { backgroundColor }]}>
      <Text style={[styles.text, { color: textColor }]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'baseline',
  },
  text: {
    fontSize: 12,
  },
});

export default Badge;