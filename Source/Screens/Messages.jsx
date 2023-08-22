import React from 'react';
import { View, Text } from 'react-native';
import GlobalStyle from '../Style/Global';
import { TobBarMes } from '../Components';

const Messages = () => {
    return (
        <View style={GlobalStyle.screenBG} >
            <TobBarMes />
        </View>
    );
};

export default Messages; 
