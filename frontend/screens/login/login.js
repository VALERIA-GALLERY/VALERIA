import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [isSelected, setSelection] = React.useState(true);

  const toggleCheckbox = () => {
    setSelection(!isSelected);
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={setEmail} placeholder="email-address" keyboardType="email-address" />
      <TextInput style={styles.input} onChangeText={setPass} placeholder="password" keyboardType="visible-password" />
      <CheckBox
        value={false}
        onPress={toggleCheckbox}
        style={styles.checkbox}
      />
      <Text>Is CheckBoxssss selected: {isSelected ? '👍' : '👎'}</Text>
      <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Login pressed')}>
        <Text style={styles.buttonText}>SIGN IN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EDE4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#B4966A',
    padding: 10,
    borderRadius: 55,
    marginTop: 10,
    width: 327,
    height: 55,
    top: 50,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
    left: 130,
    top: 9,
  },
  input: {
    width: 370,
    height: 50,
    left: 15,
    top: -25,
    paddingBottom: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#A47E53',
  },
  checkbox: {
    alignSelf: 'center',
  },
});
