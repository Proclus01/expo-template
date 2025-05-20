import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

interface FileUploadProps {
  onFileSelected?: (file: any) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelected }) => {
  const handleUpload = () => {
    // This is a stub for file upload functionality.
    if (onFileSelected) {
      // Simulate file selection
      onFileSelected({ name: 'dummy-file.txt', uri: 'file://dummy-path' });
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Upload File" onPress={handleUpload} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default FileUpload;