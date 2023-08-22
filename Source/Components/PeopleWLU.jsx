import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, RefreshControl, ScrollView } from 'react-native'
import GlobalStyle from '../Style/Global'
const { height, width } = Dimensions
const PeopleWLU = () => {
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
                >No One Has Liked You Yet</Text>
                <Text
                    style={{
                        color: 'white',
                        fontSize: 16,
                        margin: 20,
                        textAlign: 'center',

                    }}
                >You'll see here when someone likes you from your match</Text>
            </View>
            <TouchableOpacity
                style={{
                    backgroundColor: '#3333ff',
                    alignItems: 'center',
                    padding: 10,
                    width: 240,
                    borderRadius: 50
                }}
            >
                <Text
                    style={{
                        color: 'white',
                        fontSize: 15
                    }}
                >Stand Out While Matching</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
}

export default PeopleWLU