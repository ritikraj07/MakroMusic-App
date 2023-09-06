
import {useEffect, useState} from 'react'
import { View, Text, StyleSheet, TextInput, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import GlobalStyle, { color } from '../Style/Global';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from "react-native-vector-icons/Feather";
import { useSelector, useDispatch } from 'react-redux'
import { clearSearchHistory, removeFromSearchHistory } from '../Redux/Reducers/user';
const Search = ({ navigation }) => {
    const [focused, setFocused] = useState(false)
    const [searchInput, setSearchInput] = useState('')
    const [activeFilter, setActiveFilter] = useState('Best Results')
    const dispatch = useDispatch()
    const { searchHistory, artists, recentlyPlayedSong, currentlyPlayed } = useSelector((state) => state.user)
    const filterTabs = ['Best Results', 'Users', 'Tracks', 'Artists', 'Playlists', 'Albums', 'Podcasts']
    
    useEffect(() => {
        searchInput.length>0?setFocused(true):setFocused(false)
    },[searchInput])

    const RightArrow = () => <AntDesign name="right" color={'#00A8B6'} size={20} />
    
    const Header = ({ header, subheader }) => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 20,
                    paddingHorizontal: 10,
                    marginBottom: -10

                }}
            >
                <Text style={styles.lable}>{header}</Text>
                {subheader.length > 0 && <TouchableOpacity onPress={() => { dispatch(clearSearchHistory()) }} >
                    <Text style={{ color: 'white', fontSize: 15 }}>  {subheader} </Text>
                </TouchableOpacity>}
            </View>
        )
    }

    const SearchTab = ({ item }) => {
        return (
            <View style={styles.tab} >
                <TouchableOpacity style={{ flexDirection: 'row', marginHorizontal: 5, width: '70%' }} >
                    <Image source={{ uri: item.image }} style={styles.tabImage} />
                    <Text style={{ color: 'white', paddingHorizontal: 5 }}>{item.historyText.split('').map((e, i) => {
                        if (i < 8) {
                            return e
                        } else if (i == 9) {
                            return '...'
                        }
                    })}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '10%', marginHorizontal: 5 }}
                    onPress={() => { dispatch(removeFromSearchHistory(item.id)) }}
                >
                    <Text style={{ color: 'white' }} >X</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const FavTab = ({ item }) => {
        return (
            <View style={styles.tab} >
                <TouchableOpacity style={{ flexDirection: 'row', marginHorizontal: 5, width: '90%' }} >
                    <Image source={{ uri: item.image }} style={styles.tabImage} />
                    <Text style={{ color: 'white', paddingHorizontal: 5 }}>{item.name.split('').map((e, i) => {
                        if (i < 12) {
                            return e
                        } else if (i == 13) {
                            return '...'
                        }
                    })}</Text>
                </TouchableOpacity>

            </View>
        )
    }


    const RecentTab = ({ song }) => {
        return <TouchableOpacity style={styles.recentView} key={song.id} >
            <Image style={{ width: 60, height: 60, borderRadius: 5, marginRight: 10 }} source={{ uri: song.image }} />
            <View>
                <Text numberOfLines={1} style={styles.lable} >{song.name}</Text>
                <Text numberOfLines={1} style={{ color: '#a3a3c2' }} >{song.artists}</Text>
            </View>
        </TouchableOpacity>
    }

    const SuggestedTab = ({item}) => {
        return <TouchableOpacity key={item.id} style={[styles.box]} >
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
}} >
                <Image source={{ uri: item.image }} style={{ width: 40, height: 40, borderRadius: 25, marginRight:10 }} />
                <View>
                    <Text style={styles.lable} > {item.name}</Text>
                    <Text style={{ color: color['french-greay'], marginLeft:5}}>Edit Profile</Text>
                </View>
            </View>
            <RightArrow />
        </TouchableOpacity>
    }
    const FilterTabs = ({ item }) => {
        console.log(activeFilter, item, "check ==>", activeFilter === item)
        let act = activeFilter === item;
        return (
            <TouchableOpacity
                key={item}
                onPress={()=>setActiveFilter((pre)=>item)}
                style={[{
                borderWidth: 1,
                margin: 5, borderRadius: 20, paddingVertical: 2,
                paddingHorizontal: 5
            }, act ?
                { borderColor: '#40bcbf', backgroundColor:"#0e4958" } :
                    { borderColor: '#a3a3c2', }]}
            >
                <Text style={{color:'white', margin:5, fontSize:15}} >{item}</Text>
            </TouchableOpacity>
        )
    }

    
    return (
        <View style={GlobalStyle.screenBG} >
            <View style={styles.topBar} >
                <View style={styles.search}>
                    <Feather name='search' style={styles.icon} color={'#a3a3c2'} />
                    <TextInput
                        placeholder='Search on makromuisc...'
                        placeholderTextColor='#a3a3c2'
                        style={{ color: 'white', width:'90%' }}
                        onChangeText={setSearchInput}
                    />
                </View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{ color: 'white' }} >Cancel</Text>
                </TouchableOpacity>
            </View>

            {focused ? <ScrollView nestedScrollEnabled={true}>
                <FlatList 
                    data={filterTabs}
                    renderItem={FilterTabs}
                    keyExtractor={filterTabs.items}
                    horizontal
                    style={{}}
                    showsHorizontalScrollIndicator={false}
                />

                
                {recentlyPlayedSong.map((item)=><SuggestedTab item={item} />)}

               
                

                </ScrollView>
                :
                <ScrollView nestedScrollEnabled={true} >
                <Header header={"Search History"} subheader={'clear'} />
                <FlatList
                    data={searchHistory}
                    renderItem={SearchTab}

                    horizontal={true}
                    keyExtractor={searchHistory.id}
                />

                <Header header={"Your Favorite Artists"} subheader={''} />
                <FlatList
                    data={artists}
                    renderItem={FavTab}
                    horizontal={true}
                />



                <View>
                    <Header header={"Recently Played"} subheader={''} />

                    {recentlyPlayedSong.map((song) => {
                        return <RecentTab key={song.id} song={song} />
                    })}
                </View>


                <View>
                    <Header header={"Currently Played"} subheader={''} />

                    {currentlyPlayed.map((song) => {
                        return <RecentTab key={song.id} song={song} />
                    })}
                </View>

            </ScrollView>           
            }

        </View>
    )
}

export default Search;


const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#a3a3c2',
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 5,
        width: '85%',
        height: 40,
        backgroundColor: '#091228'
    },
    icon: {
        margin: 1,
        fontSize: 20

    },
    lable: {
        color: 'white',
        fontSize: 20
    },
    tab: {
        borderColor: '#a3a3c2',
        borderWidth: 1,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginHorizontal: 10,
        padding: 5,
        flex: 1
    },
    tabImage: {
        width: 20,
        height: 20,
        borderRadius: 20,
        marginRight: 5
    },
    recentView: {
        borderWidth: 0.5,
        padding: 5,
        flexDirection: 'row',
        borderColor: '#a3a3c2',
        marginHorizontal: 10,
        borderRadius: 10,
        marginBottom: 10,
        alignItems:'center'
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        marginHorizontal: 10,
        borderColor: '#a3a3c2',
        borderWidth: 1,
        marginVertical: 5,
        paddingHorizontal: 10,
        paddingVertical:2.5

    },
})
