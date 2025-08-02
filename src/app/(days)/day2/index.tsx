import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen name="day2" options={{title: 'Day Two'}}/>
      <Text>Day Details Screen 2</Text>
    </View>
  )
}

export default DayDetailsScreen;