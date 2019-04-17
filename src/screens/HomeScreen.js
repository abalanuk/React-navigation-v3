import React, { PureComponent } from "react"
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333'
  }
});

export default class HomeScreen extends PureComponent {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.instructions}>Home Screen</Text>
        </View>
    );
  }
}