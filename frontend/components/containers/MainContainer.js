import React, { useState } from "react";
import { SafeAreaView, View, Text, ScrollView, StyleSheet } from "react-native";
import { Card, TextInput, Button, ActivityIndicator, Searchbar } from "react-native-paper";


const MainContainer = ({children, ...props}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
            showsVerticalScrollIndicator={false} 
            {...props} 
            >
                {children}           
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default MainContainer;