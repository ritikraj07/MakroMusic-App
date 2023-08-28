import React, { useState } from 'react';
import { View, Text, PanResponder, Animated, StyleSheet } from 'react-native';

const Slider = ({ min, max }) => {
    const [leftValue, setLeftValue] = useState(min);
    const [rightValue, setRightValue] = useState(max);

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (e, gestureState) => {
            const totalWidth = width - 20;
            const leftBound = 10;
            const rightBound = totalWidth - 10;

            const newValue =
                min + ((max - min) * (gestureState.moveX - leftBound)) / (rightBound - leftBound);

            if (gestureState.numberActiveTouches === 1) {
                if (gestureState.moveX >= leftBound && gestureState.moveX <= rightBound) {
                    if (Math.abs(leftValue - newValue) < Math.abs(rightValue - newValue)) {
                        setLeftValue(newValue);
                    } else {
                        setRightValue(newValue);
                    }
                }
            }
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.slider}>
                <Animated.View
                    style={[
                        styles.leftMarker,
                        {
                            left: `${((leftValue - min) / (max - min)) * 100}%`,
                        },
                    ]}
                    {...panResponder.panHandlers}
                />
                <Animated.View
                    style={[
                        styles.rightMarker,
                        {
                            left: `${((rightValue - min) / (max - min)) * 100}%`,
                        },
                    ]}
                    {...panResponder.panHandlers}
                />
            </View>
            <Text>Left Value: {leftValue.toFixed(2)}</Text>
            <Text>Right Value: {rightValue.toFixed(2)}</Text>
        </View>
    );
};

const width = 300; // Customize as needed

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%'
    },
    slider: {
        width: '95%',
        height: 2,
        backgroundColor: 'lightgray',
        borderRadius: 10,
        flexDirection: 'row',
    },
    leftMarker: {
        width: 20,
        height: 20,
        backgroundColor: 'green',
        borderRadius: 10,
        position: 'absolute',
        zIndex: 1,
    },
    rightMarker: {
        width: 20,
        height: 20,
        backgroundColor: 'blue',
        borderRadius: 10,
        position: 'absolute',
        zIndex: 1,
    },
});

export default Slider;
