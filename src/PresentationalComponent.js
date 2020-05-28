import React from "react";
import { Text, View, StyleSheet } from "react-native";

const PresentationalComponent = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.myState} onPress={props.updateState}>
        {props.myState}
      </Text>
      <View style={styles.redbox} />
      <View style={styles.bluebox} />
      <View style={styles.blackbox} />
    </View>
  );
};
export default PresentationalComponent;
const styles = StyleSheet.create({
  myState: {
    marginTop: 20,
    color: "blue",
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 10
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretched",
    backgroundColor: "white",
    height: 50
  },
  redbox: {
    width: 20,
    height: 20,
    backgroundColor: "red"
  },
  bluebox: {
    width: 20,
    height: 20,
    backgroundColor: "blue"
  },
  blackbox: {
    width: 20,
    height: 20,
    backgroundColor: "black"
  }
});
