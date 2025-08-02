import { Stack } from "expo-router";
import { useEffect } from 'react';
import { AmaticSC_400Regular, AmaticSC_700Bold, useFonts } from '@expo-google-fonts/amatic-sc';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        Amatic: AmaticSC_400Regular,
        AmaticBold: AmaticSC_700Bold,
    });

    useEffect(() => {
        if(loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if(!loaded && !error) {
        return null;
    }

    return (
        <Stack
            screenOptions={{
                headerStyle: {backgroundColor: '#12885dff'},
            }}
        >
            <Stack.Screen name="index" options={{title: 'FitGuide'}}/>
        </Stack>
    );
}