import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../components/firebaseConfig";
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

async function handleSearchQuery(onChangeSearch, allEvents){
    const searchedEventsList = []

    const searchedEvents = allEvents.filter(event => ((event.title).toLowerCase()).includes(onChangeSearch.toLowerCase()));
    const otherEvents = allEvents.filter(event => !((event.title).toLowerCase()).includes(onChangeSearch.toLowerCase()));

    searchedEventsList.unshift(...searchedEvents);
    searchedEventsList.push(...otherEvents);

    return searchedEventsList;
};

const SearchScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [eventsData, setEventsData] = useState([]);

    const onChangeSearch = query => setSearchQuery(query);

    useEffect(() => {
        const fetchData = async () => {
            const allEvents = await getAllEvents();
            const searchedEvents = await handleSearchQuery(searchQuery, allEvents);

            setEventsData(searchedEvents);
        };
        fetchData();
    }, [searchQuery]);

    return (
        <SafeAreaView style={styles.container}>
            <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery}/>
            <EventFeed data={eventsData} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default SearchScreen;