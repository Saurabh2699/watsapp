import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UploadButton from './components/UploadButton';

export default function App() {
  return (
    <View style={styles.container}>
      <UploadButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
