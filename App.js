import React, { useState } from "react";
import {
	Text,
	StyleSheet
  } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import validator from "validator";

// component imports
import H2Heading from './components/H2Heading';
import CCNumInput from './components/CCNumInput';
import CheckButton from './components/CheckButton';

const App = () => {
	
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState("");
  
	const checkCreditCardNumber = () => {
    
    if (validator.isCreditCard(`${creditCardNumber}`)) {
			setErrorMessage(
        "Credit card number is valid"
      );
    } 
		else {
			setErrorMessage(
        "Enter valid credit card number!"
      );
    }
  };

	return (
		<SafeAreaView style={styles.container}>
			<H2Heading
				textContent="Credit Card Number Checker"
			/>
			<CCNumInput
        placeholder="type credit card number..." 
        name="CCNumInp"
        value={creditCardNumber}
        onChangeText={text => setCreditCardNumber(text)}
      />
      <CheckButton
        color={"blue"}
        onPress={checkCreditCardNumber}
      />
			<Text style={{
        fontWeight: "bold",
      }}>
				{errorMessage}
			</Text>
		</SafeAreaView>
);};
const styles = StyleSheet.create({
	
  container: {
		flex: 1,
		marginLeft: 20,
	},
});

export default App;
