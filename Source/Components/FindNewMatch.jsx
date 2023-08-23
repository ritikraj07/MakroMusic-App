import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, RefreshControl, ScrollView } from 'react-native'
import GlobalStyle from '../Style/Global'
const { height, width } = Dimensions
const FindNewMatch = () => {
    const [data, setData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        // Perform your refresh logic here (e.g., fetching new data)
        // After fetching new data, update the state and set refreshing to false
        // setData(newData);
        setTimeout(() => {
            setRefreshing(false);

        }, 2000);

    };

    return <ScrollView
        contentContainerStyle={[GlobalStyle.screenBG, {
            padding: 20,
            alignItems: 'center',
            justifyContent: 'space-around',
        }]}
        refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={['red', 'green', 'yellow']}
            />
        }
    >
        <View
            style={{
                padding: 20,
                alignItems: 'center',
                justifyContent: 'space-around',
                flex: 1
            }}
        >
            <View
                style={{
                    alignItems: 'center'
                }}
            >
                <Text
                    style={{
                        fontSize: 20,
                        color: 'white',
                        fontWeight: 700,
                        marginBottom: 0
                    }}
                >Find Your New Match🎉</Text>
                <Text
                    style={{
                        color: 'white',
                        fontSize: 16,
                        margin: 20,
                        textAlign: 'center',

                    }}
                >You'll see people who listen to the same song or artists here, play a song now</Text>
            </View>
            <TouchableOpacity
                style={{
                    backgroundColor: '#00A8B6',
                    alignItems: 'center',
                    padding: 10,
                    width: 240,
                    borderRadius: 50
                }}
            >
                <Text
                    style={{
                        color: 'rgb(9,18,40)',
                        fontSize: 15,
                        fontWeight:700
                    }}
                >
                    View Currently Played
                </Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
}

export default FindNewMatch