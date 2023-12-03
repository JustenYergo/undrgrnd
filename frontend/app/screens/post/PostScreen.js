import React, { useState } from "react";
import { SafeAreaView, View, Text, ScrollView, StyleSheet } from "react-native";
import { db } from "../../../components/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";


const PostScreen = () => {
    const [ date_time, setDateTime ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ event_type, setEventType ] = useState('');
    const [ location, setLocation ] = useState('');
    const [ticket_price, setTicketPrice ] = useState('');
    const [ title, setTitle ] = useState('');

    const handleNewEvent = async () => {
        setDoc(doc(db, "events")), {
            date_time: date_time,
            description: description,
            event_type: event_type,
            location: location,
            ticket_price: ticket_price,
            title: title
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text>hi</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default PostScreen;