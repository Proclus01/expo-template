import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface PaginatorProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Paginator: React.FC<PaginatorProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePrev} style={styles.button} disabled={currentPage <= 1}>
        <Text style={[styles.text, currentPage <= 1 && styles.disabledText]}>Prev</Text>
      </TouchableOpacity>
      <Text style={styles.pageInfo}>
        {currentPage} / {totalPages}
      </Text>
      <TouchableOpacity onPress={handleNext} style={styles.button} disabled={currentPage >= totalPages}>
        <Text style={[styles.text, currentPage >= totalPages && styles.disabledText]}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  button: {
    marginHorizontal: 10,
  },
  text: {
    fontSize: 16,
    color: '#007AFF',
  },
  disabledText: {
    color: '#ccc'
  },
  pageInfo: {
    fontSize: 16,
  },
});

export default Paginator;