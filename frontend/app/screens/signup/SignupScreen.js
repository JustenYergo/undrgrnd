import React, { useState, useContext } from "react";
import { SafeAreaView, View } from "react-native";
import { Card, TextInput, Button, ActivityIndicator } from "react-native-paper";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { signupStyle } from "./signupstyle";
import { doc, setDoc } from "firebase/firestore";
import { db, fbauth } from "../../../components/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const SignupScreen = ({navigation}) => {
    
  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = fbauth;

  const handleSignUp = async () => {
    setLoading(true);

    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);

      if (response){
        // if no error then create new user in firestore database
        setDoc(doc(db, "users", fbauth.currentUser.uid), {
          fName: (fName.toString()),
          interests: null,
          lName: (lName.toString()),
        }).then(() => {
          // new user document created
          console.log('New user created in database');
        }).catch((error) => {
          console.log(error);
        });

        // finally navigate to next screen
        navigation.navigate('Survey');
      }
    } catch (error){
      console.log(error)
      alert('Login failed: ' + error.message)
    } finally {
      setLoading(false);
    }
  }

  return (
  <SafeAreaView style={signupStyle.content}>
    <View style={signupStyle.view}>
      <Card>
        <Card.Content>
          <TextInput value={fName} label="First Name" onChangeText={(fName) => (setfName(fName))}></TextInput>
          <TextInput value={lName} label="Last Name" onChangeText={(lName) => (setlName(lName))}></TextInput>
          <TextInput value={email} label="Email" keyboardType="email-address" autoCapitalize="none" onChangeText={(email) => (setEmail(email))}></TextInput>
          <TextInput value={password} label="Password" secureTextEntry={true} onChangeText={password => (setPassword(password))}></TextInput>
          <Button></Button>
          { loading ? (
          <ActivityIndicator/>
          ) : ( 
          <>
          <Button mode="contained" onPress={handleSignUp}>Sign Up</Button>
          </>
          )}
          <Button onPress={() => navigation.navigate('Login')}>Back to Login</Button>
        </Card.Content>
      </Card>
    </View>
  </SafeAreaView>
)
};