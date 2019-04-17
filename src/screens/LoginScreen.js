import React, { PureComponent } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import sharedStyles from "../sharedStyles";

// const styles = StyleSheet.create({
// });

const TOUCHABLE_UNDERLAY_COLOR = "lightgrey";

export default class LoginScreen extends PureComponent {
  render() {
    const { navigation: { navigate }} = this.props;
    return (
        <View style={sharedStyles.container}>
          <Text style={sharedStyles.screenTitle}>Login Screen</Text>
          <TouchableHighlight
              style={sharedStyles.button}
              underlayColor={TOUCHABLE_UNDERLAY_COLOR}
              onPress={() => navigate("Home")}
          >
            <Text> Navigate to Home Screen </Text>
          </TouchableHighlight>
        </View>
    );
  }
}