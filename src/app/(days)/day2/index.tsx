import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

const DayDetailsScreen = () => {
	return (
		<View>
			<Stack.Screen name="day2" options={{ title: 'Day Two',  headerTitleAlign: 'center' }} />
			<Text>Day Details Screen 2</Text>

            <Link href={'/day2/onboarding'} asChild>
			    <Button title={'Go to onboarding'} color={'#185100ff'} />
            </Link>
		</View>
	)
}

const styles = StyleSheet.create({
	button: {
		width: 100,
		backgroundColor: '#185100ff',
	},

    stackpanel: {
        alignItems: 'center',
    }
});

export default DayDetailsScreen;