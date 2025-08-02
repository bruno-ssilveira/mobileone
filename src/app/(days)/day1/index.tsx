import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const DayDetailsScreen = () => {
  return (
    <View>
		<Stack.Screen name="day1" options={{title: 'Day One'}}/>
      	<Text>Day Details Screen</Text>
    </View>
  )
}

export default DayDetailsScreen;