import ccNumValidator from 'cc-validation';
import React, { useState } from 'react';
import {View, TextInput, Button, Text, StyleSheet} from 'react-native';

const CreditCardValidationScreen = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [isValid, setIsValid] = useState(null);

  const validateCard = () => {
    const isValidCard = ccNumValidator(cardNumber);
    setIsValid(isValidCard);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        inputMode={"numeric"}
        placeholder="Kredi Kartı Numarası"
        onChangeText={(cardNum) => setCardNumber(cardNum)}
        value={cardNumber}
      />
      <Button title="Doğrula" onPress={validateCard} />
      {(isValid !== null) && (
        <Text style={styles.resultText}>
          Kredi kartı numarası {isValid ? 'geçerli' : 'geçersiz'}.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      width: 300,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      marginBottom: 10,
    },
    resultText: {
      marginTop: 20,
      fontSize: 18,
    }
  });
  
  export default CreditCardValidationScreen;