import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';

const FlowingColorText = ({text}) => {
    const [animatedValue] = useState(new Animated.Value(0));

    useEffect(() => {
        startAnimation();
    }, []);

    const startAnimation = () => {
        Animated.loop(
            Animated.timing(animatedValue, {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear,
                useNativeDriver: false,
            })
        ).start();
    };

    const interpolateColor = animatedValue.interpolate({
        inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
        outputRange: ['white', 'rgb(31, 71, 229)', '#00A8B6', '#00A8B6', 'rgb(31, 71, 229)', '#00A8B6'], // Change these colors as desired
    });

    const animatedStyle = {
        color: interpolateColor,
    };

    return (
        <View style={styles.container}>
            <Animated.Text style={[styles.text, animatedStyle]}>{text}</Animated.Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        letterSpacing:2
    },
});

export default FlowingColorText;
