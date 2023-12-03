import React, { useState } from "react";
import { ScrollView, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, View, Text, Dimensions } from "react-native";
import { Card, TextInput, ActivityIndicator, Button } from "react-native-paper";
import { db, fbauth } from "../../../components/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { interestStyle } from "./intereststyle";
import { doc, getDoc } from "firebase/firestore";


const windowHeight = Dimensions.get('window').height;

export const InterestSurvey = ({navigation}) => {
    /*
    const [docData, setDocData] = useState([]);
    getDoc(doc(db, "users", fbauth.currentUser.uid)).then(docSnap => {
        if (docSnap.exists()) {
            setDocData(docSnap.data())
        } else {
            console.log("No such document")
        }
    })
    */

    const dataSet1 = [
        { key: 'button1', title: 'Nightlife', onPress: () => console.log('Button 1 pressed') },
        { key: 'button2', title: 'Live Music', onPress: () => console.log('Button 2 pressed') },
        { key: 'button3', title: 'Sports', onPress: () => console.log('Button 3 pressed') },
        { key: 'button4', title: 'Fashion', onPress: () => console.log('Button 4 pressed') },
        { key: 'button5', title: 'Movies', onPress: () => console.log('Button 5 pressed') },
        { key: 'button6', title: 'Charity', onPress: () => console.log('Button 6 pressed') },
      ];

      const dataSet2 = [
        { key: 'button1', title: 'Nightlife', onPress: () => console.log('Button 1 pressed') },
        { key: 'button2', title: 'Live Music', onPress: () => console.log('Button 2 pressed') },
        { key: 'button3', title: 'Sports', onPress: () => console.log('Button 3 pressed') },
        { key: 'button4', title: 'Fashion', onPress: () => console.log('Button 4 pressed') },
        { key: 'button5', title: 'Movies', onPress: () => console.log('Button 5 pressed') },
        { key: 'button6', title: 'Charity', onPress: () => console.log('Button 6 pressed') },
      ];
    
      return (
        <SafeAreaView>
            <View style={styles.container}>
                {/*<Text>Welcome {docData.fName}!</Text>*/}
                <Text>Choose Your Interests</Text>
                <ScrollView
                horizontal
                contentContainerStyle={styles.buttonRowContainer}
                showsHorizontalScrollIndicator={false}
            >
                {dataSet1.map(item => (
                <Button mode="contained-tonal" key={item.key} onPress={item.onPress}> {item.title} </Button>
                ))}
                {dataSet2.map(item => (
                <Button mode="contained-tonal" key={item.key} onPress={item.onPress}> {item.title} </Button>
                ))}
            </ScrollView>
            </View>
            <View style={styles.container}>
                <Button style={styles.finishedButton} mode="contained" onPress={() => navigation.navigate('Home')}>Done</Button>
            </View>
        </SafeAreaView>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonRowContainer: {
        flexDirection: 'row',
        marginTop: windowHeight / 2.5,
      },
      finishedButton: {
        marginTop: windowHeight / 3,
        padding: 8,
        width: 360,
        justifyContent: 'center',
      },
    });
    
    
    