import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { Link, Stack } from 'expo-router'

const DayDetailsScreen = () => {
	return (
        <SafeAreaView style={styles.page}>
            <View style={styles.pageContent}>
                <Stack.Screen name="day3" options={{ title: 'Day Three',  headerTitleAlign: 'center' }} />
                <Text style={styles.title}>Day Details - Screen 3</Text>

                <View style={styles.buttons}>
                    <Link href={'/day3/animation'} asChild>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.textButton}>Go to the animation</Text>
                        </TouchableOpacity>
                    </Link>
                    <Link href={'/day3/splashscreen'} asChild>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.textButton}>Splash Screen Animation</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </SafeAreaView>
	)
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },

    pageContent: {
        flex: 1,
    },

    title: {
        fontFamily: 'InterBold',
        fontSize: 24,
        alignSelf: 'center',
    },

	buttons: {
		marginTop: 'auto',
        width: 300,
        gap: 5,
        alignSelf: 'center',
        marginBottom: 20,
	},
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 40,
        backgroundColor: '#185100ff',
        borderRadius: 20,
    },
    textButton: {
        color: '#FDFDFD',
        fontSize: 16,
        fontFamily: 'InterSemiBold',
    },

    stackpanel: {
        alignItems: 'center',
    }
});

export default DayDetailsScreen;