import { useEffect } from 'react';
import Animated, {
    Easing,
    cancelAnimation,
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withRepeat,
    withTiming,
} from 'react-native-reanimated';

export const MovingText= ({text, animationThreshold, style}) => {
    const translateX = useSharedValue(0);
    const shouldAnimate = text.length > animationThreshold;

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{translateX: translateX.value}],
        };
    });

    return (
        <Animated.Text 
            style={[style, animatedStyle, shouldAnimate && {
                width:250,
            }]}
            numberOfLines={1}
        >
            {text}
        </Animated.Text>
    )

}