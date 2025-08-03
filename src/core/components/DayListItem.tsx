import { View, Text, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

type DayListItem = {
    day: number;
}

export default function DayListItem({ day }: DayListItem) {
    return (
        <Link href={`/day${day}`} asChild>
            <Pressable style={styles.box}>
                <Text style={styles.text}>{day}</Text>
            </Pressable>
        </Link>
    );
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#009d2aff',
        flex: 1,
        aspectRatio: 1,

        borderWidth: 6,
        borderColor: '#000000ff',
        borderRadius: 20,

        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        color: '#ffffffff',
        fontSize: 70,
        fontFamily: 'AmaticBold',
    },
});