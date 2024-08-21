import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function FlexDirections() {
  return (
    <View style={styles.container}>

      
      <View style={styles.box1}>
        <Text style={styles.child}>Child 1</Text>
        <Text style={styles.child}>Child 1</Text>
        <Text style={styles.child}>Child 1</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.child}>Child 1</Text>
        <Text style={styles.child}>Child 1</Text>
        <Text style={styles.child}>Child 1</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    borderColor: 'red',
    borderWidth: 5
  },


  box1: {
    flex: 1,
    borderColor: 'green',
    borderWidth: 5,
    flexDirection: 'row'
  },
  box2: {
    flex: 1,
    borderColor: 'orange',
    borderWidth: 5

  },
  child: {
    borderColor: 'black',
    borderWidth: 2

  }

});