
import React, { useRef } from 'react';
import { View, Text, FlatList, Image, ImageBackground, StyleSheet } from 'react-native';
import { UseSelector, useSelector } from 'react-redux';

import GlobalStyle from '../Style/Global'

const IgnoredMatches = () => {

    const data = useSelector((state)=>state.user.ignoredMatch)

    const IProfile = ({ item }) => {
        
        return <View
            style={{
                width: '47%',
                margin:'1.5%'
                
            }}
        >
            <ImageBackground
                source={{ uri: item.image }}
                style={{
                    width: '100%',
                    height: 250,
                    position:'relative'
                }}
                borderRadius={10}
            >
                <View>

                </View>
                
                <View
                    style={{
                        position: 'absolute',
                        bottom: 10,
                        left:10
                    }}
                >
                    <Text style={Style.cardText}>{item.name}</Text>
                    <Text style={Style.cardText}>{item.ratio}</Text>
                </View>

            </ImageBackground>
            
        </View>
    }

    return <View style={[GlobalStyle.screenBG, {
        padding:10
    }]} >
        <FlatList 
            data={data}
            renderItem={IProfile}
            keyExtractor={(item) => item.name}
            numColumns={2}
            contentContainerStyle ={{
                // justifyContent: 'center',
                // alignItems: 'center',
                
            }}
        />
    </View>
}

export default IgnoredMatches

const Style = StyleSheet.create({
    cardText: {
        color: 'white',
        fontSize: 18,
    }
})
