import React from 'react';
import { ScrollView, View, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface CarouselProps {
  data: string[]; // array of image uri strings
  renderItem?: (item: string) => React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ data, renderItem }) => {
  return (
    <ScrollView horizontal pagingEnabled style={styles.container}>
      {data.map((item, index) => (
        <View style={styles.slide} key={index}>
          {renderItem ? renderItem(item) : <Image source={{ uri: item }} style={styles.image} />}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
  },
  slide: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.9,
    height: 200,
    resizeMode: 'cover',
  },
});

export default Carousel;