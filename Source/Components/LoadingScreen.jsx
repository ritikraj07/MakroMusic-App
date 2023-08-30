import React from 'react';
import { View, ActivityIndicator, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

const LoadingScreen = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: height/50,
            left: width/50,
            width: width,
            height:height
        }}>
            <ActivityIndicator size="large" color="#00A8B6" />
        </View>
    );
};

export default LoadingScreen;
