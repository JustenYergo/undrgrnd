import React, { memo, useState } from "react";
import { SafeAreaView, View, Text, ScrollView, StyleSheet, FlatList } from "react-native";
import { Card, TextInput, Button, ActivityIndicator, Searchbar } from "react-native-paper";

const InterestItem = ({ _id, interest, ...props }) => {

    return (
        <Button mode="contained" style={styles.button}>
            {interest}
        </Button>
    );
};

const styles = StyleSheet.create({
    button: {
        marginBottom: 5,
        marginRight: 5,
    }
});

export default InterestItem;