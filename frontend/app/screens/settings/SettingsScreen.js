import React, { useState } from "react";
import { SafeAreaView, View, Text, ScrollView, StyleSheet } from "react-native";
import { Divider } from "react-native-paper";

const SettingsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.row}>
                <View style={styles.profilePicture}/>
                <Text style={styles.profileName}>Test Name</Text>
            </View>
            <Divider />
            <Text style={styles.title}>Account Settings</Text>
            <Divider />
            <Text style={styles.title}>More</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fffafa",
        height: 700,
        width: 380,
        borderRadius: 25,
        marginTop: 172,
        marginLeft: 16,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profilePicture: {
        borderRadius: 32,
        height: 56,
        width: 56,
        marginLeft: 32,
        marginTop: 32,
        marginBottom: 16,
        marginRight: 16,
        backgroundColor: "#808080"
    },
    profileName: {
        fontSize: 16,
        marginTop: 16,
    },
    title: {
        margin: 16,
        color: '#D3D3D3',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default SettingsScreen;