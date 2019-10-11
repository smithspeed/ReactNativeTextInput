import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

export default class App extends React.Component {
  render() {
   return (
     <ScrollView>
         <Text style={{fontSize:50}}> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse vel tellus id dui iaculis porta. Curabitur enim felis, 
            Feuiat suscipit quam eget, condimentum dapibus eros. 
            Sed vel neque in felis rutrum pulvinar vel at nibh. Vivamus facilisis, 
            libero ut scelerisque bibendum, turpis velit rhoncus libero, nec lobortis 
            est ante sit amet risus. Sed bibendum viverra libero, ac ullamcorper ligula 
            rhoncus a. Suspendisse ultrices interdum ex sed gravida. Aliquam quis aliquet,
            tempus nisi et, eleifend diam. Praesent pretium quam diam, id molestie rutrum eu.
            Sed ut nibh vitae nibh volutpat ornare. Suspendisse utnuncpretium, faucibus lectus 
            vel, congue tellus. Vestibulum eu lacinia dolor. Fusce non purus nec nunc faucibus 
            vestibulum.
         </Text>
     </ScrollView>
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
