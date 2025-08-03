import { Text, View, StyleSheet, Pressable } from "react-native"
import { Stack, router } from "expo-router"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from "react";

const onboardingSteps = [
    {
        icon: 'money-bill-transfer',
        title: 'Track every transaction',
        text: "Monitor your spending and contribution, ensuring every penny aligns with your family's aspirations."
    },
    {
        icon: 'face-smile-beam',
        title: 'Smile with healthy financial',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        icon: 'paw',
        title: 'Give a better life to your pet',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
]

export default function OnboardingScreen() {
    const [screenIndex, setScreenIndex] = useState(0);

    const data = onboardingSteps[screenIndex];

    const onContinue = () => {
        if(screenIndex === onboardingSteps.length -1) {
            setScreenIndex(0);
            router.back();
        } else {
            setScreenIndex(screenIndex + 1);
        }
    }

    const endOnboarding = () => {
        setScreenIndex(0);
        router.back();
    };

    return (
        <SafeAreaView style={styles.page}>
            <Stack.Screen options={{ headerShown: false }}/>

            <View style={styles.pageContent}>
                <View style={styles.stepIndicatorContainer}>
                    {onboardingSteps.map((step, index) => (
                        <View style={[styles.stepIndicator, {backgroundColor: index === screenIndex ? 'white' : 'gray'}]}/>
                    ))};
                </View>

                <FontAwesome6 name={data.icon} size={100} color="#158000ff" style={styles.image} />

                <View style={styles.footer}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.description}>{data.text}</Text>
                </View>

                <View style={styles.buttonsRow}>
                    <Text style={styles.buttonText} onPress={endOnboarding}>Skip</Text>

                    <Pressable style={styles.button} onPress={onContinue}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </Pressable>
                </View>
            </View>
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
        flex: 1,
        padding: 20,
    },

    image: {
        alignSelf: 'center',
        margin: 20,
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
        lineHeight: 34,
    },

    footer: {
        marginTop: 'auto',
    },

    buttonsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 52,
        gap: 60,
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
        paddingHorizontal: 32,
    },

    stepIndicatorContainer: {
        flexDirection: 'row',
    },
    stepIndicator: {
        flex: 1,
        backgroundColor: 'gray',
        height: 5,
        borderRadius: 10,
        margin: 5,
    },
});