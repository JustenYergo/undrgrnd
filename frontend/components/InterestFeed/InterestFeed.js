import React, { useEffect, useMemo, useState } from "react";
import { SafeAreaView, View, Text, ScrollView, StyleSheet, FlatList } from "react-native";
import { Card, TextInput, Button, ActivityIndicator, Searchbar } from "react-native-paper";
import InterestItem from "./InterestItem";
import { shuffle } from "lodash";

const InterestFeed = ( data ) => {
    const [randomizedData, setRandomizedData] =  useState([]);

    useMemo(() => {
        const shuffledData = shuffle(data);
        setRandomizedData(shuffledData);
    }, []);

    return (
        <FlatList 
        data={randomizedData}
        renderItem={({item}) => <InterestItem {...item}/>}
        keyExtractor={({_id}) => _id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingLeft: 25,
            paddingTop: 25,
            paddingBottom: 25,
            paddingRight: 25,
            alignItems: 'center',
        }}
        numColumns={2}
        />
    )
}

const styles = StyleSheet.create({
    
});

export default InterestFeed;