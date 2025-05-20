import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setVisible(!visible)}>
        {children}
      </TouchableOpacity>
      {visible && (
        <View style={styles.tooltip}>
          <Text style={styles.tooltipText}>{content}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  tooltip: {
    position: 'absolute',
    bottom: '100%',
    backgroundColor: '#333',
    padding: 8,
    borderRadius: 4,
  },
  tooltipText: {
    color: '#fff',
  },
});

export default Tooltip;