
import { } from 'react'
import { View, Text, StyleSheet, TextInput, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import GlobalStyle from '../Style/Global';
import Feather from "react-native-vector-icons/Feather";
import { useSelector, useDispatch } from 'react-redux'
import { clearSearchHistory, removeFromSearchHistory } from '../Redux/Reducers/user';
const Search = () => {
    const dispatch = useDispatch()
    const { searchHistory } = useSelector((state)=>state.user)
    

    const Header = ({header, subheader}) => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 20,
                    paddingHorizontal: 10
                }}
            >
                <Text style={styles.lable}>{header}</Text>
                {subheader.length > 0 && <TouchableOpacity onPress={()=>{dispatch(clearSearchHistory())}} >
                    <Text style={{ color: 'white', fontSize: 15 }}>  {subheader} </Text>
                </TouchableOpacity>}
            </View>
        )
    }

    const Tab = ({item}) => {
        return (
            <View style={styles.tab} >
                <TouchableOpacity style={{flexDirection:'row', marginHorizontal:5, width:'70%' }} >
                    <Image source={{ uri: item.image }} style={styles.tabImage} />
                    <Text style={{ color: 'white', paddingHorizontal:5 }}>{item.historyText.split('').map((e, i) => {
                        if (i < 8) {
                            return e
                        } else if (i == 9) {
                            return '...'
                        }
                    })}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '10%', marginHorizontal: 5 }}
                    onPress={()=>{dispatch(removeFromSearchHistory(item.id))}}
                >
                    <Text style={{color:'white'}} >X</Text>
                </TouchableOpacity>
            </View>
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
                        style={{ color: 'white' }}
                    />
                </View>
                <TouchableOpacity>
                    <Text style={{ color: 'white' }} >Cancel</Text>
                </TouchableOpacity>
            </View>

            <ScrollView nestedScrollEnabled={true} >
                <Header header={"Search History"} subheader={'clear'} />
                <FlatList
                    
                    data={searchHistory}
                    renderItem={Tab}

                    horizontal={true}
                />
            </ScrollView>

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
        flex:1
    },
    tabImage: {
        width: 20,
        height: 20,
        borderRadius: 20,
        marginRight:5
    }
})
