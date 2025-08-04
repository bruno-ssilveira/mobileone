import { Stack } from "expo-router";
import { useEffect } from 'react';
import { AmaticSC_400Regular, AmaticSC_700Bold, useFonts } from '@expo-google-fonts/amatic-sc';
import { Inter_900Black, Inter_600SemiBold, Inter_400Regular } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        Amatic: AmaticSC_400Regular,
        AmaticBold: AmaticSC_700Bold,
        InterSemiBold: Inter_600SemiBold,
        InterBold: Inter_900Black,
        InterRegular: Inter_400Regular,
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <GestureHandlerRootView>
            <Stack
                screenOptions={{
                    headerStyle: { backgroundColor: '#12885dff' },
                    headerTitleAlign: 'center',
                }}
            >
                <Stack.Screen name="index" options={{ title: "28 Days Mobile Plan" }} />
            </Stack>
        </GestureHandlerRootView>
    );
}