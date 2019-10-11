import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default class App extends React.Component {
  onPressLearnMore(){
    //For generating alert on buttton click
    alert('Hello');
  }
  render() {
    return (
      // enclose all components in this View tag
      <View style={styles.container}>
        {/* View is used here to wrap all component in one */}
        <Text>Button Example</Text> 
        {/* Button whith handler function named onPressLearnMore*/}
        <Button
         onPress={this.onPressLearnMore}
         title="Click Me"
         color="#841584"
        />
      </View>
    );  
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
