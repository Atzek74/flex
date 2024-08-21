import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {

  return( 
    <View>
      <Button
        title="Go to Flex direction"
        onPress={() => navigation.navigate('Dir')}
        
      />
      <Button
        title="Go to Flex alignItemn"
        onPress={() => navigation.navigate('Ali')}
        
      />
      <Button
        title="Go to Flex justifyContent"
        onPress={() => navigation.navigate('Jus')}
        
      /><Button
      title="Go to Flex alignSelf"
      onPress={() => navigation.navigate('Self')}
      
    />
    </View>
  )
}

const styles = StyleSheet.create({
});

export default HomeScreen;