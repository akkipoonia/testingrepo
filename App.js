import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button ,Image,SafeAreaView, Alert} from 'react-native';

export default function App() {
console.log("yes");
  return (
    <SafeAreaView style={styles.container}>
     
      <View style={{
        backgroundColor:"dodgerblue",
        width: '100%',
        height:'30%',
      }}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center"
  },
});
