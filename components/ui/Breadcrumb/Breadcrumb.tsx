import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface BreadcrumbProps {
  items: string[];
  onItemPress?: (index: number) => void;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, onItemPress }) => {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <TouchableOpacity onPress={() => onItemPress && onItemPress(index)}>
            <Text style={styles.item}>{item}</Text>
          </TouchableOpacity>
          {index < items.length - 1 && <Text style={styles.separator}>/</Text>}
        </React.Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    color: '#007AFF',
  },
  separator: {
    marginHorizontal: 5,
    color: '#666',
  },
});

export default Breadcrumb;