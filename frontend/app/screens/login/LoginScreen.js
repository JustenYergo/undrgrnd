import React, { useContext, useState } from "react";
import { SafeAreaView, View } from "react-native";
import { Card, TextInput, Button, ActivityIndicator } from "react-native-paper";
import { loginStyle } from "./loginstyle";
import { db, fbauth } from "../../../components/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";


export const LoginScreen = ({navigation}) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = fbauth;

    const handleLogin = async () => {
      setLoading(true);
      try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log(response);
        if (response) {
          navigation.navigate('Home');
        }
      } catch (error){
        console.log(error)
        alert('Login failed: ' + error.message)
      } finally {
        setLoading(false);
      }
    }

    return (
    <SafeAreaView style={loginStyle.content}>
        <View style={loginStyle.view}>
            <Card>
                <Card.Content>
                    <TextInput value={email} label="Email" keyboardType="email-address" autoCapitalize="none" onChangeText={(email) => (setEmail(email))}></TextInput>
                    <TextInput value={password} label="Password" secureTextEntry={true} onChangeText={password => (setPassword(password))}></TextInput>
                    <Button>Forgot email/password</Button>
                    { loading ? (
                    <ActivityIndicator/>
                    ) : ( 
                    <>
                    <Button mode="contained" onPress={handleLogin}>Login</Button>
                    </>
                    )}
                    <Button onPress={() => navigation.navigate('SignUp')}>Register</Button>
                </Card.Content>
            </Card>
        </View>
    </SafeAreaView>
)};

