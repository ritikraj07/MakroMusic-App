import {useState } from 'react'
import { View, Text, ScrollView, FlatList, TouchableOpacity, StyleSheet, RefreshControl, ImageBackground } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {Filter, TobBar } from '../Components'


const Explore = () => {
    const [Tab, setTab] = useState(null)
    const [refreshing, setRefreshing] = useState(false);
    const Tabs = ['🎶 Playlists', '🔥 Most Listenings', '🎤 Artists', '🎙 Podcasts']
    const CurrentlyPlaying = [
        {
            name: 'Arjit Singh',
            singer: 'Tum he ho',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1sfP1cYAvDkHvFhTZVO4lyamEmHNEjUVuaGb-9voyjd6Pzn0_vD88a70HMFITjpfqmeE&usqp=CAU',
            listener: [
                {
                    name: 'Ritik',
                    image:'https://cdn2.makromusic.com/user_image/n1-e8eca371-c012-4318-9b9b-b9bfdef2c864'
                },
                {
                    name: 'Ruchi',
                    image: 'https://images.mid-day.com/images/images/2022/jul/Kesariya_lead_image_d.png'
                },
                {
                    name: 'Ritik',
                    image: 'https://cdn2.makromusic.com/user_image/n1-e8eca371-c012-4318-9b9b-b9bfdef2c864'
                },
                {
                    name: 'Ritik',
                    image: 'https://cdn2.makromusic.com/user_image/n1-e8eca371-c012-4318-9b9b-b9bfdef2c864'
                },
            ]
        },
        {
            name: 'Wah Pehli Dafa',
            singer: 'King',
            image: 'https://i.pinimg.com/originals/67/0a/a0/670aa0f33a730e74e4312417d3ce1af3.jpg',
            listener: [
                {
                    name: 'Krishna',
                    image: 'https://cdn2.momjunction.com/wp-content/uploads/2015/05/The-Story-Of-The-Birth-Of-Lord-Krishna-For-Your-Kid-624x702.jpg'
                },
                {
                    name: 'Ruchi',
                    image: 'https://images.mid-day.com/images/images/2022/jul/Kesariya_lead_image_d.png'
                },
                {
                    name: 'Ruchi',
                    image: 'https://images.mid-day.com/images/images/2022/jul/Kesariya_lead_image_d.png'
                },
            ]
        },
        {
            name: 'Bashram rang',
            singer: 'Shahruk khan',
            image: 'https://m.media-amazon.com/images/I/91RUARIF3cL._AC_UF1000,1000_QL80_.jpg',
            listener: [
                {
                    name: '',
                    image: ''
                }
            ]
        },
        {
            name: 'Meri Galti Behance',
            singer: 'Tony Kakkar',
            image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/f64d8490948845.5e2547e92f136.jpg',
            listener: [
                {
                    name: '',
                    image: ''
                }
            ]
        },
        {
            name: 'Arjit Singh',
            singer: 'Tum he ho',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1sfP1cYAvDkHvFhTZVO4lyamEmHNEjUVuaGb-9voyjd6Pzn0_vD88a70HMFITjpfqmeE&usqp=CAU',
            listener: [
                {
                    name: 'Ritik',
                    image: 'https://cdn2.makromusic.com/user_image/n1-e8eca371-c012-4318-9b9b-b9bfdef2c864'
                },
                {
                    name: 'Ruchi',
                    image: 'https://images.mid-day.com/images/images/2022/jul/Kesariya_lead_image_d.png'
                },
                {
                    name: 'Ritik',
                    image: 'https://cdn2.makromusic.com/user_image/n1-e8eca371-c012-4318-9b9b-b9bfdef2c864'
                },
                {
                    name: 'Ritik',
                    image: 'https://cdn2.makromusic.com/user_image/n1-e8eca371-c012-4318-9b9b-b9bfdef2c864'
                },
            ]
        },
        {
            name: 'Wah Pehli Dafa',
            singer: 'King',
            image: 'https://i.pinimg.com/originals/67/0a/a0/670aa0f33a730e74e4312417d3ce1af3.jpg',
            listener: [
                {
                    name: 'Krishna',
                    image: 'https://cdn2.momjunction.com/wp-content/uploads/2015/05/The-Story-Of-The-Birth-Of-Lord-Krishna-For-Your-Kid-624x702.jpg'
                },
                {
                    name: 'Ruchi',
                    image: 'https://images.mid-day.com/images/images/2022/jul/Kesariya_lead_image_d.png'
                },
                {
                    name: 'Ruchi',
                    image: 'https://images.mid-day.com/images/images/2022/jul/Kesariya_lead_image_d.png'
                },
            ]
        },
        {
            name: 'Bashram rang',
            singer: 'Shahruk khan',
            image: 'https://m.media-amazon.com/images/I/91RUARIF3cL._AC_UF1000,1000_QL80_.jpg',
            listener: [
                {
                    name: '',
                    image: ''
                }
            ]
        },
        {
            name: 'Meri Galti Behance',
            singer: 'Tony Kakkar',
            image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/f64d8490948845.5e2547e92f136.jpg',
            listener: [
                {
                    name: '',
                    image: ''
                }
            ]
        },
        {
            name: 'Arjit Singh',
            singer: 'Tum he ho',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1sfP1cYAvDkHvFhTZVO4lyamEmHNEjUVuaGb-9voyjd6Pzn0_vD88a70HMFITjpfqmeE&usqp=CAU',
            listener: [
                {
                    name: 'Ritik',
                    image: 'https://cdn2.makromusic.com/user_image/n1-e8eca371-c012-4318-9b9b-b9bfdef2c864'
                },
                {
                    name: 'Ruchi',
                    image: 'https://images.mid-day.com/images/images/2022/jul/Kesariya_lead_image_d.png'
                },
                {
                    name: 'Ritik',
                    image: 'https://cdn2.makromusic.com/user_image/n1-e8eca371-c012-4318-9b9b-b9bfdef2c864'
                },
                {
                    name: 'Ritik',
                    image: 'https://cdn2.makromusic.com/user_image/n1-e8eca371-c012-4318-9b9b-b9bfdef2c864'
                },
            ]
        },
        {
            name: 'Wah Pehli Dafa',
            singer: 'King',
            image: 'https://i.pinimg.com/originals/67/0a/a0/670aa0f33a730e74e4312417d3ce1af3.jpg',
            listener: [
                {
                    name: 'Krishna',
                    image: 'https://cdn2.momjunction.com/wp-content/uploads/2015/05/The-Story-Of-The-Birth-Of-Lord-Krishna-For-Your-Kid-624x702.jpg'
                },
                {
                    name: 'Ruchi',
                    image: 'https://images.mid-day.com/images/images/2022/jul/Kesariya_lead_image_d.png'
                },
                {
                    name: 'Ruchi',
                    image: 'https://images.mid-day.com/images/images/2022/jul/Kesariya_lead_image_d.png'
                },
            ]
        },
        {
            name: 'Bashram rang',
            singer: 'Shahruk khan',
            image: 'https://m.media-amazon.com/images/I/91RUARIF3cL._AC_UF1000,1000_QL80_.jpg',
            listener: [
                {
                    name: '',
                    image: ''
                }
            ]
        },
        {
            name: 'Meri Galti Behance',
            singer: 'Tony Kakkar',
            image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/f64d8490948845.5e2547e92f136.jpg',
            listener: [
                {
                    name: '',
                    image: ''
                }
            ]
        },
    ]

    const SetTab = ({item}) => {
        return (
            <TouchableOpacity
                style={[Tab == item ? Style.active_tab : Style.inactive_tab, Style.tab]}
                onPress={() => {
                    Tab==item?setTab(null):setTab(item)
                }}
            >
                <Text style={{
                    color:'white'
                }} >{item}  <Text style={{ color:'#00A8B6'}} > {Tab == item ? "X" : ""}</Text>
                </Text>
                
            </TouchableOpacity>
        )
    }

    const onRefresh = () => {
        setRefreshing(true);
        // Perform your refresh logic here (e.g., fetching new data)
        // After fetching new data, update the state and set refreshing to false
        // setData(newData);
        setTimeout(() => {
            setRefreshing(false);

        }, 2000);

    };

    const PlayingTab = ({item}) => {
        return <TouchableOpacity key={item.name} style={Style.container} nestedScrollEnabled={true}>
            <ImageBackground borderRadius={15} source={{ uri: item.image }} style={Style.playTab}  >
                <LinearGradient
                    colors={['rgba(9,18,40, 1)', 'rgba(0, 0, 0, 0.9)', 'rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0.4)','transparent']} 
                    style={Style.gradient}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 1, y: 0.1 }}
                >
                    
                    <Text numberOfLines={1} style={Style.songName}>{item.name}</Text>
                    <Text numberOfLines={1} style={Style.songSinger} >{item.singer}</Text>

                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    }


    return (
        <ScrollView
            nestedScrollEnabled={true}
            contentContainerStyle={{ backgroundColor:'rgb(9,18,40)'}}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    colors={['#00A8B6', '#00A8B6', '#00A8B6']}
                />
            }
        >
            
            <TobBar />

            <View>
            <FlatList
                data={Tabs}
                renderItem={SetTab}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    nestedScrollEnabled={true}
                />
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <TouchableOpacity style={[Style.btm, { backgroundColor: '#05474d', borderColor: '#00A8B6', } ]}>
                    <Text style={{color:'white', fontSize:16}}>Quick Match</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[Style.btm, { borderColor: '#4900f5', backgroundColor:'#260080'}]}>
                    <Text style={{ color: 'white', fontSize: 16 }}>Best Matches</Text>
                </TouchableOpacity>
            </View>

            <View style={Style.headerContainer}>
                <Text style={Style.headerText}>Currently Played</Text>
            </View>
            
            <FlatList
                data={CurrentlyPlaying}
                renderItem={PlayingTab}
                nestedScrollEnabled={true}
                numColumns={3}
                scrollEnabled={false}
                contentContainerStyle={{
                    width: '100%',
                    paddingHorizontal: 5,
                    alignItems: 'center',
                }}
                
            />
            
            
            
        </ScrollView>
    )
}

export default Explore

const Style = StyleSheet.create({
    active_tab: {
        borderColor: '#00A8B6',
        backgroundColor:'#05474d'
    },
    inactive_tab: {
        borderColor: '#a3a3c2',
    },
    tab: {
        margin: 10,
        paddingHorizontal: 15,
        borderWidth: 1,
        height: 35,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btm: {
        width: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'blue',
        margin:5
    },
    container: {
        width:120,
        margin: '1.5%',
        borderWidth: 1,
        borderColor: '#a3a3c2',
        borderRadius: 15,

        
    },
    playTab: {
        width: '100%',
        height: 180,
        borderRadius: 20,
        position: 'relative',
        
    },

    gradient: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        position: 'absolute',
        bottom: 1,
        width: '100%',
        borderRadius: 15,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
    },
    songName: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    songSinger: {
        color: 'white',
        fontSize: 15,
    },
    headerContainer: {
        alignItems: 'flex-start', // Aligns content to the left side
        justifyContent: 'flex-start', // Aligns content to the top
        paddingHorizontal: 15,
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '700',
        alignSelf: 'flex-start'
    },

})