import React from "react";
import { StyleSheet, TextInput } from 'react-native';

function CCNumInput(props) {

  const styles = StyleSheet.create({
    textInputStyles: {
      borderWidth: 1,
      borderColor: "gray",
      overflow:"hidden",
      borderRadius: 10,
      padding: 10,
      margin: 10,
  },
  });

  return (

    <TextInput
      style={styles.textInputStyles}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
    />
    
  );
}

export default CCNumInput;