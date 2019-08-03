import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight
} from "react-native";

const Touchables = props => {
  onPress = () => {
    // alert('hello')
  };
  return (
    <View style={styles.container}>
      {/* TouchableOpacity */}
      <TouchableOpacity
        // onPress={() => {
        //   props.navigation.navigate("Flex");
        // }}
        onPress={() => {
          console.warn("hello");
        }}
        style={styles.touches}
      >
        <Text style={styles.text}>TouchableOpacity</Text>
      </TouchableOpacity>

      {/* TouchableNativeFeedback*/}
      <TouchableNativeFeedback
        // onPress={() => {
        //   props.navigation.navigate("Todo");
        // }}
        onPress={() => {
          console.warn("hello");
        }}
      >
        <View style={styles.touches}>
          <Text style={styles.text}>TouchableNativeFeedback</Text>
        </View>
      </TouchableNativeFeedback>

      <TouchableHighlight
        style={styles.touches}
        // onPress={() => {
        //   props.navigation.navigate("Likes");
        // }}
        onPress={() => {
          console.warn("hello");
        }}
      >
        <Text style={styles.text}> TouchableHighlight</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Touchables;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#17859b"
  },
  text: {
    color: "white",
    fontSize: 18
  },
  touches: {
    padding: 10,
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 30
  }
});
