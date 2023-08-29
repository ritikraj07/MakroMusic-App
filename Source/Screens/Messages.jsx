import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import GlobalStyle from '../Style/Global';
import { TobBarMes } from '../Components';

const Messages = () => {

    const LA = [
        {
            name: 'You',
            image:'https://cdn2.makromusic.com/user_image/n1-e8eca371-c012-4318-9b9b-b9bfdef2c864',
            song: {
                singer: 'king',
                name: 'Sochta Houn ye ki',
                isActive: false,
                image:'https://images.mid-day.com/images/images/2022/jul/Kesariya_lead_image_d.png'
            }
        },
        {
            name: 'Ruchi',
            image: 'https://i.pinimg.com/564x/49/10/b0/4910b092fe9a309b6036442cf05811d4.jpg',
            song: {
                singer: 'Honey Singh',
                name: 'do botal roj ka',
                isActive: false,
                image: 'https://filmfare.wwmindia.com/thumb/content/2022/apr/arijitsingh11650885572.jpg?width=1200&height=900'
            }
        },
        {
            name: 'Krishna',
            image: 'https://cdn2.momjunction.com/wp-content/uploads/2015/05/The-Story-Of-The-Birth-Of-Lord-Krishna-For-Your-Kid-624x702.jpg',
            song: {
                singer: 'Neha kakkar',
                name: 'Sochta Houn ye ki',
                isActive: false,
                image: 'https://i.ytimg.com/vi/hp_-RlwNg04/maxresdefault.jpg'
            }
        },
        {
            name: 'Nikita',
            image: 'https://nikita-saini-portfolio.vercel.app/assets/dp-3386394a.jpg',
            song: {
                singer: 'Rock',
                name: 'Sochta Houn ye ki',
                isActive: false,
                image: 'https://filmfare.wwmindia.com/thumb/content/2022/apr/arijitsingh11650885572.jpg?width=1200&height=900'
            }
        },
    ]

    const NM = [
        {
            name: 'Ritik Raj',
            image:'https://cdn2.makromusic.com/user_image/n1-e8eca371-c012-4318-9b9b-b9bfdef2c864'
        },  
        {
            name: 'Sri Radha Krishna',
            image: 'https://filmfare.wwmindia.com/thumb/content/2022/apr/arijitsingh11650885572.jpg?width=1200&height=900'
        }, 
        {
            name: 'kishan',
            image: 'https://i.ytimg.com/vi/hp_-RlwNg04/maxresdefault.jpg'
        }, 
        {
            name: 'kishan',
            image: 'https://filmfare.wwmindia.com/thumb/content/2022/apr/arijitsingh11650885572.jpg?width=1200&height=900'
        }, 
        {
            name: 'Ritik Raj',
            image: 'https://cdn2.makromusic.com/user_image/n1-e8eca371-c012-4318-9b9b-b9bfdef2c864'
        },
        {
            name: 'Sri Radha Krishna',
            image: 'https://filmfare.wwmindia.com/thumb/content/2022/apr/arijitsingh11650885572.jpg?width=1200&height=900'
        },
        {
            name: 'kishan',
            image: 'https://i.ytimg.com/vi/hp_-RlwNg04/maxresdefault.jpg'
        },
        {
            name: 'kishan',
            image: 'https://filmfare.wwmindia.com/thumb/content/2022/apr/arijitsingh11650885572.jpg?width=1200&height=900'
        }, 
         
    ]

    const Chats = [
        {
            name: 'Lord Krishna',
            image: 'https://cdn2.momjunction.com/wp-content/uploads/2015/05/The-Story-Of-The-Birth-Of-Lord-Krishna-For-Your-Kid-624x702.jpg',
            lastText: 'You: hi',
            lastTextTime:'1d'
        },
        {
            name: 'Nikita',
            image: 'https://nikita-saini-portfolio.vercel.app/assets/dp-3386394a.jpg',
            lastText: 'Nikita: Hello Ritik',
            lastTextTime: '2d'
        },
        {
            name: 'Ritik Raj',
            image: 'https://cdn2.makromusic.com/user_image/n1-e8eca371-c012-4318-9b9b-b9bfdef2c864',
            lastText: 'You: hello',
            lastTextTime: '1d'
        },
        {
            name: 'Ruchi',
            image: 'https://i.pinimg.com/564x/49/10/b0/4910b092fe9a309b6036442cf05811d4.jpg',
            lastText: 'You: Hi',
            lastTextTime: '43d'
        },

    ]

    const ListeningActivity = ({item}) => {
        return (
            <View
                style={{
                    width: 100,
                    alignItems: 'center',
                    paddingHorizontal: 'auto',
                    height: 160,
                    justifyContent:'flex-end'
                    
                }}
            >
                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        padding: 2,
                        borderWidth: 2,
                        borderColor: '#00A8B6',
                        borderRadius: 50,
                    }}
                >
                <Image source={{ uri: item.image }} style={{
                    width: 80,
                    height: 80,
                    borderRadius: 50,
                    padding: 4,
                    
                    
                    }} />
                   

                    <View
                        style={{
                            position: 'absolute',
                            width: 90,
                            backgroundColor: 'rgb(9,18,40)',
                            borderWidth: 1,
                            borderColor: '#a3a3c2',
                            borderRadius: 10,
                            padding: 5,
                            justifyContent: 'center',
                            // height:40,
                            top: -35


                        }}
                    >
                        <Text numberOfLines={1} ellipsizeMode="tail" style={{ color: 'white', overflow: 'hidden', }}>{item.song.name}</Text>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={{ color: 'white', overflow: 'hidden', }}>{item.song.singer}</Text>
                    </View>

                    <Image source={{ uri: item.song.image }}

                        style={{
                            width: 35,
                            height: 35,
                            position: 'absolute',
                            bottom: -10,
                            borderRadius: 30
                        }}
                    />

                </TouchableOpacity>

                
                
                <Text style={{
                    color: 'white',
                    fontSize: 16,
                    marginTop:10
                }} >{item.name}</Text>
            </View>
        )
    }

    const NewMatches = ({item}) => {
        return (
            <View
                style={{
                    overflow: 'hidden',
                    width: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:5
                }}
            >
                <TouchableOpacity>
                    <Image source={{ uri: item.image }}
                        style={{
                            width: 80,
                            height: 100,
                            borderRadius:10
                        }}
                    />
                </TouchableOpacity>
                <Text
                    numberOfLines={1}
                    style={{
                        color: 'white',
                        fontSize: 16,
                        marginTop:4
                    }}
                >{item.name}</Text>
            </View>
        )
    }

    const Message = ({item}) => {
        return (
            <View
                key={item.name}
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    
                }}
            >
                <Image source={{ uri: item.image }}
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        margin:10
                    }}
                />
                <View
                    style={{
                        justifyContent:'center'
                        
                    }}
                >
                    <Text numberOfLines={1} style={{color:'white'}} >{item.name}</Text>
                    <Text numberOfLines={1} style={{color:'white'}} >{item.lastText} .{item.lastTextTime} </Text>
                </View>
            </View>
        )
    }


    return (
        <ScrollView
            nestedScrollEnabled={true}
            contentContainerStyle={{ backgroundColor:'rgb(9,18,40)'}} >
            <TobBarMes />
            

            <View style={Style.section} >
                <Text style={Style.lable}>Listening Activity</Text>
                <FlatList
                    data={LA}
                    renderItem={ListeningActivity}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{paddingHorizontal:10}}
                />
            </View>

            <View style={Style.section} >
                <Text style={Style.lable} >New Match</Text>
                <FlatList
                    data={NM}
                    renderItem={NewMatches}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 10 }}
                />
            </View>

            <View style={Style.section} >
                <Text style={Style.lable} >Messages</Text>
                {
                    Chats.map((item)=>Message({item}))
                }
                

            </View>

        </ScrollView>
    );
};

export default Messages; 

const Style = StyleSheet.create({
    section: {
        padding: 0,
        marginBottom:10
    },
    lable: {
        color: 'white',
        fontSize: 18,    
        marginLeft: 18,
        fontWeight:'900'
    }
})