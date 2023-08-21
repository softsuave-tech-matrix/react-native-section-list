import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import SectionList from 'react-native-section-list';
import { MOCK_DATA } from './DATA';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Section List Example</Text>
      <SectionList
        jsonKey={'category'}
        isDate={false}
        containerStyle={styles.container}
        childContainerStyle={styles.sectionList}
        showsVerticalScrollIndicator={false}
        data={MOCK_DATA}
        renderHeading={(title) => (
          <Text style={styles.sectionHeading}>{title}</Text>
        )}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            <Text key={`colorText+${index}`} style={styles.colorText}>
              {item.value}
            </Text>
            <Text key={`dateText+${index}`} style={styles.dateText}>
              {item.date}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#D3D3D3',
  },
  header: {
    fontSize: 30,
    paddingVertical: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'grey',
  },
  sectionList: {
    backgroundColor: 'orange',
  },
  sectionHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    backgroundColor: 'white',
  },
  colorText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 14,
    color: 'grey',
  },
});

export default App;
