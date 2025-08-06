import { Stack } from "expo-router";
import { useEffect, useState} from 'react';
import { AmaticSC_400Regular, AmaticSC_700Bold, useFonts } from '@expo-google-fonts/amatic-sc';
import { Inter_900Black, Inter_600SemiBold, Inter_400Regular } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AnimatedSplashScreen from "@/core/components/animatedSplashScreen";
import Animated, { FadeIn } from "react-native-reanimated";

//SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [appReady, setAppReady] = useState(false);
    const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);

    const [loaded, error] = useFonts({
        Amatic: AmaticSC_400Regular,
        AmaticBold: AmaticSC_700Bold,
        InterSemiBold: Inter_600SemiBold,
        InterBold: Inter_900Black,
        InterRegular: Inter_400Regular,
    });

    useEffect(() => {
        if (loaded || error) {
            //SplashScreen.hideAsync();
            setAppReady(true);
        }
    }, [loaded, error]);

    const showAnimatedSplash = !appReady || !splashAnimationFinished;

    if (showAnimatedSplash) {
        return <AnimatedSplashScreen appReadyLoop={!appReady} onAnimationFinish={(isCancelled) => {
            if(!isCancelled) {
                setSplashAnimationFinished(true)}}
            }
        />;
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Animated.View style={{ flex: 1 }} entering={FadeIn}>
                <Stack screenOptions={{}}>
                    <Stack.Screen name="index" options={{ title: "28 Days Mobile Plan" }} />
                </Stack>
            </Animated.View>
        </GestureHandlerRootView>
    );
}