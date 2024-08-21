import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function FlexAlignSelf() {
  return (
    <View style={styles.container}>

      <View style={styles.box1}>
        <Text style={styles.child}>Child 1</Text>
        <Text style={styles.ch2bis}>Child 2</Text>
        <Text style={styles.child}>Child 3</Text>
        <Text style={styles.child}>Child 3</Text>

      </View>
      <View style={styles.box2}>
        <Text style={styles.child}>Child 1</Text>
        <Text style={styles.ch2}>Child 2</Text>
        <Text style={styles.child}>Child 2</Text>
        <Text style={styles.child}>Child 3</Text>
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
    borderColor: 'green',
    borderWidth: 5,
    flexDirection: 'row',

    flex: 1,
    alignItems: 'center'

  },
  box2: {
    
    borderColor: 'orange',
    borderWidth: 5,

    flex: 1,
    alignItems: 'center'

  },
  child: {
    borderColor: 'black',
    borderWidth: 2

  },
  ch2:{
    borderColor: 'black',
    borderWidth: 2,

    alignSelf: 'stretch',
    textAlign:'center'
  },
  ch2bis:{
    borderColor: 'black',
    borderWidth: 2,

    alignSelf: 'stretch',
    textAlignVertical:'center',
    

    alignSelf: 'stretch',
    textAlign:'center'
  }
  

  

  

});