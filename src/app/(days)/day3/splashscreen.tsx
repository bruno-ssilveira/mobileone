import { View, Button } from 'react-native'
import React, { useRef } from 'react'
import LottieView from 'lottie-react-native';
import { Stack } from 'expo-router';

const Animation = () => {
    const animation = useRef<LottieView>(null);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FDFDFD'}}>
            <Stack.Screen options={{ headerShown: false }} />
            <LottieView
                autoPlay
                ref={animation}
                style={{
                    width: '85%',
                    maxWidth: 400,
                    height: '85%',
                    maxHeight: 400,
                    //backgroundColor: '#eee',
                }}
                source={require('@/assets/animation/healthy.json')}
            />
        </View>
    );
};

export default Animation;