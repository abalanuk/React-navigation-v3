import React, { PureComponent } from "react"
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';

import sharedStyles from "../sharedStyles";

// const styles = StyleSheet.create({
// });

const TOUCHABLE_UNDERLAY_COLOR = "lightgrey";

export default class HomeScreen extends PureComponent {
  render() {
    return (
        <View style={sharedStyles.container}>
          <Text style={sharedStyles.screenTitle}>Home Screen</Text>
          <TouchableHighlight
              style={sharedStyles.button}
              underlayColor={TOUCHABLE_UNDERLAY_COLOR}
              onPress={() => {}}
          >
            <Text>Navigate to ...</Text>
          </TouchableHighlight>
        </View>
    );
  }
}