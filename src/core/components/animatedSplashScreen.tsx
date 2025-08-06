import { View } from 'react-native'
import React, { useRef } from 'react'
import LottieView from 'lottie-react-native';
import Animated, { FadeOut, ZoomOut } from 'react-native-reanimated';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const AnimatedSplashScreen = ({
    onAnimationFinish = (isCancelled) => {},
    appReadyLoop = false,
}: {
    onAnimationFinish?: (isCancelled: boolean) => void;
    appReadyLoop?: boolean
}) => {
    const animation = useRef<LottieView>(null);

    return (
        <View
            //exiting={FadeOut.duration(300)}
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FDFDFD'
            }}
        >
            <AnimatedLottieView
                autoPlay
                exiting={ZoomOut}
                onAnimationFinish={onAnimationFinish}
                loop={appReadyLoop}
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

export default AnimatedSplashScreen;