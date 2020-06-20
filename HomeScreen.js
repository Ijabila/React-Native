import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button 
      onPress={() => props.navigation.navigate('Component')}
      title='Components Demo'
      />
      <Button
      title='List Demo'
      onPress={() => props.navigation.navigate('List')}
      />
      <Button
      title='Image Screen'
      onPress={() => props.navigation.navigate('Image')}
      />
      <Button
      title='Counter Screen'
      onPress={() => props.navigation.navigate('Counter')}
      />
      <Button
      title='Color Screen'
      onPress={() => props.navigation.navigate('Color')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
