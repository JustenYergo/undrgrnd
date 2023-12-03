import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, FlatList, ScrollView, Button, TouchableOpacity } from "react-native";
import { db, fbauth } from "../../../components/firebaseConfig";
import { doc, getDocs, collection, getDoc } from "firebase/firestore";
import Event from "../../../objects/Event"; 
import { useRoute } from '@react-navigation/native';

export const DetailsScreen = ({navigation}) => {
    const route = useRoute();
    const { id } = route.params;
    const [eventDetails, setEventDetails] = useState([]);

    useEffect(() =>{
        const fetchData = async () => {
            const eventDetailsRef = doc(db, "events", id);
            const eventDetailsSnap = await getDoc(eventDetailsRef);
            setEventDetails(new Event(id, eventDetailsSnap.data().date_time, eventDetailsSnap.data().description, eventDetailsSnap.data().event_type, eventDetailsSnap.data().location, eventDetailsSnap.data().ticket_price, eventDetailsSnap.data().title));
        };
        fetchData();
    }, []);

    
    const renderButtons = () => {
        if (eventDetails.event_type){
            return eventDetails.event_type.map((item, index) => (
                <TouchableOpacity key={index} style={styles.button}>
                    <Text style={styles.event_type}>{item}</Text>
                </TouchableOpacity>
            ));
        } else {
            return null;
        }
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Text numberOfLines={1} style={styles.title}>{eventDetails.title}</Text>
                    <Text numberOfLines={1} style={styles.date_time}>{eventDetails.date_time}</Text>
                    <Text numberOfLines={1} style={styles.location}>{eventDetails.location}</Text>
                    <Text numberOfLines={1} style={styles.title}>Details:</Text>
                    <Text numberOfLines={1} style={styles.date_time}>Tickets: {eventDetails.ticket_price}</Text>
                    <View style={styles.buttonContainer}>
                        {renderButtons()}
                    </View>
                    <Text numberOfLines={1} style={styles.descriptionTitle}>About:</Text>
                    <Text style={styles.description}>{eventDetails.description}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fffafa",
        height: 600,
        width: 414,
        borderRadius: 25,
        marginTop: 300,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        paddingTop: 25,
        paddingLeft: 25,
    },
    date_time: {
        fontSize: 16,
        color: '#000',
        paddingTop: 5,
        paddingLeft: 25,
    },
    location: {
        fontSize: 14,
        color: '#000',
        paddingTop: 5,
        paddingLeft: 25,
    },
    descriptionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        paddingTop: 20,
        paddingLeft: 25,
    },
    description: {
        fontSize: 18,
        color: '#000',
        paddingTop: 5,
        paddingLeft: 35,
    },
    event_type: {
        fontSize: 16,
        color: '#000',
    },
    buttonContainer: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingLeft: 25,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 2,
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 5,
    }
});