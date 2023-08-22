
import React, { useRef } from 'react';
import { View, Text, FlatList, Image, ImageBackground, StyleSheet } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import GlobalStyle from '../Style/Global'

const IgnoredMatches = () => {
    const data = [
        {
            name: 'Ritik Raj',
            image: 'https://cdn2.makromusic.com/user_image/n1-e8eca371-c012-4318-9b9b-b9bfdef2c864',
            ratio:'20% Match Ratio'
        },
        {
            name: 'Ruchi',
            image: 'https://i.pinimg.com/564x/49/10/b0/4910b092fe9a309b6036442cf05811d4.jpg',
            ratio: '40% Match Ratio'
        },
        {
            name: 'Krishna',
            image: 'https://cdn2.momjunction.com/wp-content/uploads/2015/05/The-Story-Of-The-Birth-Of-Lord-Krishna-For-Your-Kid-624x702.jpg',
            ratio: '100% Match Ratio'
        },
        {
            name: 'Ram',
            image: 'https://hinduismwayoflife.com/wp-content/uploads/2018/02/Lord-Rama1.jpg',
            ratio: '99% Match Ratio'
        },
        {
            name: 'Kapil Sharma',
            image: 'https://yt3.googleusercontent.com/XVVi44_WFTkdPXYorOffTEJ51xPacaBdx_-peDEao52ZHF8DdfuJz76IZLQI3hNwulwnHrBHIQ=s900-c-k-c0x00ffffff-no-rj',
            ratio: '20% Match Ratio'
        },
        {
            name: 'Nikita',
            image: 'https://nikita-saini-portfolio.vercel.app/assets/dp-3386394a.jpg',
            ratio: '70% Match Ratio'
        },
        {
            name: 'Aman',
            image: 'https://pbs.twimg.com/media/FQaC7hxaIAAffE2?format=jpg&name=large',
            ratio: '50% Match Ratio'
        },
    ]

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
