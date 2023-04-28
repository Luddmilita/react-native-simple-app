
import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

function App(): JSX.Element {
 
  return (
   <View style={styles.container}>
    <Text style={styles.text}>CI CD with Bitrise</Text>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor:"pink"
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "900"
  }
});

export default App;
