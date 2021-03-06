import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button title="Click Here" onPress={() => alert("Button Clicked")} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
