import React from 'react';
import { StyleSheet, Text, View,Picker } from 'react-native';

export default class App extends React.Component {
  state = {choosenLabel: '', choosenindex: ''}
  render() {
    return (
      // enclose all components in this View tag
      <View style={styles.container}>
        {/*Text to show selected picker value*/}
        <Text style = {styles.text}>{this.state.choosenLabel}</Text>
        {/*Text to show selected index */}
        <Text style = {styles.text}>{this.state.choosenindex}</Text>
        {/*Picker with multiple chose to choose*/}
        {/*selectedValue to set the preselected value if any*/}
        {/*onValueChange will help to handle the changes*/}
        <Picker selectedValue={this.state.choosenLabel}
          onValueChange={
          (itemValue, itemIndex) => this.setState({
               choosenLabel: itemValue, 
               choosenindex:itemIndex})
        }>
            <Picker.Item label = "Hello" value = "word1" />
            <Picker.Item label = "React" value = "word2" />
            <Picker.Item label = "Native" value = "word3" />
            <Picker.Item label = "How" value = "word4" />
            <Picker.Item label = "are" value = "word5" />
            <Picker.Item label = "you" value = "word6" />
        </Picker>
      </View>
    );  
  } 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column'
  },
  text: {
      fontSize: 20,
      alignSelf: 'center',
   }
});
