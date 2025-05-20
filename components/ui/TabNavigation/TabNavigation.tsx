import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface TabNavigationProps {
  tabs: { title: string; content: React.ReactNode }[];
}

const TabNavigation: React.FC<TabNavigationProps> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {tabs.map((tab, index) => (
          <TouchableOpacity key={index} style={[styles.tab, activeIndex === index && styles.activeTab]} onPress={() => setActiveIndex(index)}>
            <Text style={[styles.tabText, activeIndex === index && styles.activeTabText]}>{tab.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.content}>
        {tabs[activeIndex].content}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderColor: '#007AFF',
  },
  tabText: {
    color: '#555',
  },
  activeTabText: {
    color: '#007AFF',
  },
  content: {
    padding: 10,
  },
});

export default TabNavigation;