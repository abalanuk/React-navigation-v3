import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  screenTitle: {
    marginVertical: 50,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'lightgreen',
    padding: 10,
  },
});

export default class LoginScreen extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.screenTitle}>Login Screen</Text>
          <TouchableHighlight
              style={styles.button}
              underlayColor={"green"}
              onPress={() => this.props.navigation.navigate("Home")}
          >
            <Text> Navigate to Home Screen </Text>
          </TouchableHighlight>
        </View>
    );
  }
}