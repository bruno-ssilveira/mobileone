import { Stack } from "expo-router";

export default function RootLayout() {
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