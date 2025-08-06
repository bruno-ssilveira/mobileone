import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const DayDetailsScreen = () => {
  return (
    <ScrollView>
		<Stack.Screen name="day1" options={{title: 'Day One'}}/>
      	<Text style={styles.title}>First Day - Mobile Plan</Text>
        <View>
            <Text style={styles.text}>This is the first day of my 28 day mobile development journey. Each day, I'll dedicate 4 hours, 2 for video classes and 2 for hands-on practice, totaling 112 hours of focused learning. I've created an app with a calendar where each day represents a feature or concept I learn. As the days go by, the calendar will be filled with practical implementations that reflect my progress and growth in mobile development.</Text>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
	title: {
		color: '#9B4521',
		fontSize: 56,
		fontFamily: 'AmaticBold',
        textAlign: 'center',
	},
    text: {
        fontFamily: 'InterRegular',
        fontSize: 26,
        padding: 20,
    }
})

export default DayDetailsScreen;