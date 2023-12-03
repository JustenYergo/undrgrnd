import React, { useState } from "react";
import { SafeAreaView, View, Text, ScrollView, StyleSheet, FlatList } from "react-native";
import { Card, TextInput, Button, ActivityIndicator, Searchbar } from "react-native-paper";
import EventItem from "./EventItem";


const EventFeed = ({ data }) => {
    return (
        <FlatList 
        data={data}
        renderItem={({item}) => <EventItem {...item}/>}
        keyExtractor={({_id}) => _id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingLeft: 25,
            paddingTop: 25,
            marginBottom: 25,
        }}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        marginBottom: 10,
        borderRadius: 8,
        shadowColor: "#E26A6A",
    }
});

export default EventFeed;