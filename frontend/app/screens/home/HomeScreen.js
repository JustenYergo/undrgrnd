import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Card, Title, Paragraph, TextInput, ActivityIndicator, Searchbar, BottomNavigation } from "react-native-paper";

import { db, fbauth } from "../../../components/firebaseConfig";
import { doc, getDocs, collection, getDoc } from "firebase/firestore";
import MainContainer from "../../../components/containers/MainContainer";
import EventFeed from "../../../components/EventFeed/EventFeed";
import Event from "../../../objects/Event"; 


async function getAllEvents(){
    const eventSnap = await getDocs(collection(db, "events"));
    const eventsData = eventSnap.docs.map((doc) => {
        return new Event(
            doc.id, 
            doc.data().date_time, 
            doc.data().description,
            doc.data().event_type,
            doc.data().location,
            doc.data().ticket_price,
            doc.data().title
        );
    });

    return eventsData;
};

async function compareInterest_EventType(eventsData){
    const userSnap = await getDoc(doc(db, "users", "6EuEaUcsyESMDUUfJoIxtfcTXu33"));
    const userInterest = userSnap.data().interests;

    const interestingEventsFirst = []

    const interestingEvents = eventsData.filter(event => userInterest.some(item => (event.event_type).includes(item)));
    const otherEvents = eventsData.filter(event => !userInterest.some(item => (event.event_type).includes(item)));

    interestingEventsFirst.unshift(...interestingEvents);
    interestingEvents.push(...otherEvents);

    return interestingEvents;
};


const HomeScreen = ({navigation}) => {
    const [iEvents, setIEvents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const eventsData = await getAllEvents();
            const interestingEventsFirst = await compareInterest_EventType(eventsData);

            setIEvents(interestingEventsFirst);
        };
        fetchData();
    });

    const handlePressFilter = () => {
        navigation.navigate("Filter");
    }

    return (
        <SafeAreaView>
            <TouchableOpacity style={styles.buttonContainer} onPress={handlePressFilter}>
                <Text style={styles.button}>Filter</Text>
            </TouchableOpacity>
            <EventFeed data={iEvents}/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        margin: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 2,
        marginTop: 5,
    },
    button: {
        fontSize: 20,
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 5,
    }
});

export default HomeScreen;