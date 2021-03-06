import React, { Component } from "react";
import { Text, View } from "react-native";
import PresentationalComponent from "./PresentationalComponent";
import List from "./list.js";
import Inputs from "./inputs.js";
import ScrollViewExample from "./scrollview.js";
import ImagesExample from "./image.js";
import HttpExample from "./httpexample.js";

export default class App extends React.Component {
  state = {
    myState: "This is defaut state"
  };
  updateState = () => {
    this.setState({ myState: "The state is updated" });
  };
  render() {
    return (
      <View>
        <HttpExample />
        <ImagesExample />
        <PresentationalComponent
          myState={this.state.myState}
          updateState={this.updateState}
        />
        <List />
        <Inputs />
        <ScrollViewExample />
      </View>
    );
  }
}
