import { Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

const EventItem = ({ image, title, date_time, location, _id, ...props }) => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('Details', { id: _id });
    };

    return (
        <TouchableOpacity style={styles.container} {...props} onPress={handlePress}>
            <Image style={styles.image}/>
            <Text numberOfLines={1} style={styles.title}>{title}</Text>
            <Text numberOfLines={1} style={styles.date_time}>{date_time}</Text>
            <Text numberOfLines={1} style={styles.location}>{location}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fffafa",
        height: 380,
        width: 360,
        borderRadius: 25,
        marginBottom: 20,
    },
    image: {
        backgroundColor: "#708090",
        height: 250,
        width: 360,
        borderRadius: 25,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
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
    }
});

export default EventItem;