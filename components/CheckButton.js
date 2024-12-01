import React from "react";
import { StyleSheet, View, Button } from 'react-native';

function CheckButton(props) {

  const styles = StyleSheet.create({
    searchButtonStyle: {
      marginTop: 10,
      borderWidth: 1,
      borderColor: "blue",
      borderRadius: 10,
      padding: 2
    }
  });

  return (
    <View style={styles.searchButtonStyle}>
      <Button
        title="check"
        color={props.color}
        onPress={props.onPress}
      />
    </View>
  )
}

export default CheckButton;