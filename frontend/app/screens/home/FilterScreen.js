import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { db, fbauth } from "../../../components/firebaseConfig";
import { doc, getDocs, collection, getDoc } from "firebase/firestore";
import Event from "../../../objects/Event"; 
import { useRoute } from '@react-navigation/native';
import { Divider, Button } from "react-native-paper";


const OTHERDATA = [
    {
        title: 'Event Type',
        data: ['Live Music', '21+', 'Comedy', 'Sports', 'Pop Ups', 'Fashion', 'Video Games', 'Charity', 'Outdoor Events', 'Indoor Events', 'Art', 'Concerts', 'Music-And-Dance', 'Health-And-Wellness', 'Food-And-Beverage', 'Nature-And-Outdoors']
    },
    {
        title: 'Location',
        data: ['Within 1 Mile', 'Within 5 Miles', 'Within 10 Miles', 'Within 25 Miles', 'Within 50 Miles', 'Within 75 Miles', 'Within 100 Miles']
    },
    {
        title: 'Ticket Price',
        data: ['Free', 'Under $5', 'Under $10', 'Under $15', 'Under $20', 'Under $25', '$25 Or More']
    }
];

const otherRenderItem = ({ item }) => (
    <View>
        <Text style={styles.title}>{item.title}</Text>
        <FlatList
            data={item.data}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => console.log('Item selected:', item)}>
                    <Button mode="contained" style={styles.button}>
                        {item}
                    </Button>
                </TouchableOpacity>
            )}
            keyExtractor={(item, index) => item + index}
        />
    </View>
);

export const FilterScreen = ({navigation}) => {

    return (
        <FlatList
            data={OTHERDATA}
            renderItem={otherRenderItem}
            keyExtractor={(item, index) => item + index}
            ListHeaderComponent={<Divider />}
            ListFooterComponent={<Divider />}
            ItemSeparatorComponent={Divider}
            renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.sectionHeader}>{title}</Text>
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fffafa",
    },
    contentContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        paddingTop: 25,
        paddingLeft: 25,
        paddingBottom: 15,
    },
    button: {
        marginBottom: 5,
        marginRight: 5,
    }
});