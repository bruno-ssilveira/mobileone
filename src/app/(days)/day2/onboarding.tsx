import { Text, View, StyleSheet, Pressable } from "react-native"
import { Stack, router } from "expo-router"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { GestureDetector, Gesture, Directions } from "react-native-gesture-handler";
import Animated, { runOnJS, SlideInLeft, BounceInLeft } from 'react-native-reanimated';

const onboardingSteps = [
    {
        icon: 'money-bill-transfer',
        title: 'Track every transaction',
        description: "Monitor your spending and contribution, ensuring every penny aligns with your family's aspirations."
    },
    {
        icon: 'face-smile-beam',
        title: 'Smile with healthy financial',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        icon: 'paw',
        title: 'Give a better life to your pet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
]

export default function OnboardingScreen() {
    const [screenIndex, setScreenIndex] = useState(0);

    const data = onboardingSteps[screenIndex];

    const onContinue = () => {
        if(screenIndex === onboardingSteps.length -1) {
            router.back();
            setScreenIndex(0);
        } else {
            setScreenIndex(screenIndex + 1);
        }
    };
    const onBack = () => {
        if(screenIndex === 0) {
            return;
        } else {
            setScreenIndex(screenIndex - 1);
        }
    };

    const endOnboarding = () => {
        setScreenIndex(0);
        router.back();
    };
    
    const flingLeft = Gesture.Fling().direction(Directions.LEFT).onEnd(() => {runOnJS(onContinue)();});
    const flingRight = Gesture.Fling().direction(Directions.RIGHT).onEnd((e) => {runOnJS(onBack)();});
    const composedGesture = Gesture.Simultaneous(flingLeft, flingRight);

    return (
        <SafeAreaView style={styles.page}>
            <Stack.Screen options={{ headerShown: false }}/>
            <StatusBar style="light" />

            <View style={styles.stepIndicatorContainer}>
                {onboardingSteps.map((step, index) => (
                    <View style={[styles.stepIndicator, {backgroundColor: index === screenIndex ? '#158000ff' : 'gray'}]} key={index}/>
                ))}
            </View>

            <GestureDetector gesture={composedGesture}>
                <View style={styles.pageContent} key={screenIndex}>

                    <FontAwesome6 name={data.icon} size={150} color="#158000ff" style={styles.image} />
    
                    <View style={{ flex: 1 }}>
                    <Animated.View entering={BounceInLeft} style={styles.footer}>
                        <Text style={styles.title}>{data.title}</Text>
                        <Text style={styles.description}>{data.description}</Text>
                    </Animated.View>
                    </View>
                    
                    <View style={styles.buttonsRow}>
                        <Text style={styles.buttonText} onPress={endOnboarding}>Skip</Text>

                        <Pressable style={styles.button} onPress={onContinue}>
                            <Text style={styles.buttonText}>Continue</Text>
                        </Pressable>
                    </View>
                </View>
            </GestureDetector>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    page: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#15141A',
    },

    pageContent: {
        padding: 20,
        flex: 1,
    },

    image: {
        alignSelf: 'center',
        margin: 20,
        marginTop: 50,
    },

    title: {
        color: '#FDFDFD',
        fontSize: 50,
        fontFamily: 'InterBold',
        letterSpacing: 1.3,
        marginVertical: 10,
    },

    description: {
        color: '#c8c8c8',
        fontSize: 20,
        fontFamily: 'InterRegular',
        lineHeight: 28,
    },

    footer: {
        marginTop: 'auto',
    },

    buttonsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        gap: 20,
    },
    button: {
        backgroundColor: '#302E38',
        borderRadius: 50,
        alignItems: 'center',
        flex: 1,
    },
    buttonText: {
        color: '#FDFDFD',
        fontFamily: 'InterSemiBold',
        fontSize: 16,
        padding: 15,
        paddingHorizontal: 25,
    },

    stepIndicatorContainer: {
        flexDirection: 'row',
        gap: 8,
        marginHorizontal: 15,
        marginVertical: 15,
    },
    stepIndicator: {
        flex: 1,
        backgroundColor: 'gray',
        height: 3,
        borderRadius: 10,
    },
});