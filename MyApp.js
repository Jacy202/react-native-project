import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import Likes from "./components/Likes";
import Todo from "./src/components/Todo";
import { whileStatement } from "@babel/types";
// import Flex from "./components/Flex";

export default function MyApp() {
  return (
    <View style={styles.container}>
      <Todo />
      {/* <Flex/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222222"
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});
