import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const DayDetailsScreen = () => {
  return (
    <View>
		<Stack.Screen name="day1" options={{title: 'Day One'}}/>
      	<Text style={styles.text}>Day Details Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
	text: {
		color: '#9B4521',
		fontSize: 70,
		fontFamily: 'AmaticBold',
	},
})

export default DayDetailsScreen;