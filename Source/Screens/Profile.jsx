import { } from 'react'
import { View, Text,SectionList, StyleSheet, ScrollView, ImageBackground, Dimensions, TouchableOpacity, FlatList } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather'
import GlobalStyle from '../Style/Global';
import { Image } from '@rneui/base';
import { ArtistsDisplayer, FlowingColorText, HBar, HorizontalLine, RecentlyPlayedSong } from '../Components';

const { width, height } = Dimensions.get('window')

const Profile = ({navigation}) => {
    let user = {
        image: 'https://cdn2.makromusic.com/user_image/n1-e8eca371-c012-4318-9b9b-b9bfdef2c864',
        name: "Ritik Raj",
        isPremiumUser: true,
        username: '@ritikraj07',
        spotifyId: '',
        instagram: false,
        about: 'Everthing thing is ok ',
        artists: [
            {
                id: 1,
                name: 'Arijit Singh',
                image:'https://imgs.search.brave.com/G3jp9cl5gQ2Cmhq-PAp5yaHRBOk2LavYyfq5OewhCFY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZTMubW91dGhzaHV0/LmNvbS9pbWFnZXMv/aW1hZ2VzcC85MjU5/MzQ2NTJzLmpwZw'
            },
            {
                id: 2,
                name: 'Pritam',
                image:'https://imgs.search.brave.com/OjfrEgG2JyRKAFn7Dw56SevBHJ6PYbZAnQ3970ryxDs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2FiL1ByaXRhbV9D/aGFrcmFib3J0eV9h/dF90aGVfNXRoX0dp/TUFfQXdhcmRzLmpw/Zw'
            },
            {
                id: 3,
                name: 'KK',
                image:'https://imgs.search.brave.com/kQS7wmgWjSQd6MHeKvDkfU10ngu7beTqHCTnz4Tjoc8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS9h/cnRpc3RzL0tLXzUw/MHg1MDAuanBn'
            },
            {
                id: 4,
                name: 'Jubin Nautiyal',
                image:'https://imgs.search.brave.com/lovCzpgaCdrQq57ImUt0fuI6IX_k6G9hiB3YyJMyA4o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9maWxt/ZmFyZS53d21pbmRp/YS5jb20vY29udGVu/dC8yMDIyL2p1bi90/b3B0ZW5zb25nc29m/anViaW5uYXV0aXlh/bHlvdW11c3RsaXN0/ZW50b29uaGlzYmly/dGhkYXkxMTY1NTE4/OTExOS5qcGc'
            },
            {
                id: 5,
                name: 'Aanchal Tyagi',
                image:'https://imgs.search.brave.com/5DAKQsAkI4DTGb3cCszbKk9iLdbBzaAd3iC-w9WJHzY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGFy/c3VuZm9sZGVkLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OC8wNS9NcmluYWxp/bmktVHlhZ2kuanBn'
            },
            {
                id: 6,
                name: 'Honey Singh',
                image: 'https://imgs.search.brave.com/L6xBXj915RNv6_UACmJp4ZSXVmHHTX2EKYXnL8n8BzI/rs:fit:860:0:0/g:ce/aHR0cDovL3N0YXJz/dW5mb2xkZWQuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE1/LzAxL1lvLVlvLUhv/bmV5LVNpbmdoLTMu/anBn'
            },
            {
                id: 7,
                name: 'Badshah',
                image:'https://imgs.search.brave.com/gZDgEfB7vvwUgOMXUG0CjInoi19VmOC5HKt5vQL_KQU/rs:fit:860:0:0/g:ce/aHR0cDovL3N0YXJz/dW5mb2xkZWQuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE1/LzA5L0JhZHNoYWgu/anBn'
            },
            {
                id: 8,
                name: 'Alka Yagnik',
                image:'https://imgs.search.brave.com/oZ8IqpCDzkflSDPlgJb1893KxCxvo7DwkIJeBhi5PJQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDUzNTYz/MTcuanBn'
            },
            {
                id: 9,
                name: 'Shreya Ghoshal',
                image: 'https://imgs.search.brave.com/oZ8IqpCDzkflSDPlgJb1893KxCxvo7DwkIJeBhi5PJQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDUzNTYz/MTcuanBn'
            },
            {
                id: 10,
                name: 'Arijit Singh',
                image: 'https://imgs.search.brave.com/G3jp9cl5gQ2Cmhq-PAp5yaHRBOk2LavYyfq5OewhCFY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZTMubW91dGhzaHV0/LmNvbS9pbWFnZXMv/aW1hZ2VzcC85MjU5/MzQ2NTJzLmpwZw'
            },
            {
                id: 11,
                name: 'Pritam',
                image: 'https://imgs.search.brave.com/OjfrEgG2JyRKAFn7Dw56SevBHJ6PYbZAnQ3970ryxDs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2FiL1ByaXRhbV9D/aGFrcmFib3J0eV9h/dF90aGVfNXRoX0dp/TUFfQXdhcmRzLmpw/Zw'
            },
            {
                id: 12,
                name: 'KK',
                image: 'https://imgs.search.brave.com/kQS7wmgWjSQd6MHeKvDkfU10ngu7beTqHCTnz4Tjoc8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS9h/cnRpc3RzL0tLXzUw/MHg1MDAuanBn'
            },
            {
                id: 13,
                name: 'Jubin Nautiyal',
                image: 'https://imgs.search.brave.com/lovCzpgaCdrQq57ImUt0fuI6IX_k6G9hiB3YyJMyA4o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9maWxt/ZmFyZS53d21pbmRp/YS5jb20vY29udGVu/dC8yMDIyL2p1bi90/b3B0ZW5zb25nc29m/anViaW5uYXV0aXlh/bHlvdW11c3RsaXN0/ZW50b29uaGlzYmly/dGhkYXkxMTY1NTE4/OTExOS5qcGc'
            },
            {
                id: 14,
                name: 'Aanchal Tyagi',
                image: 'https://imgs.search.brave.com/5DAKQsAkI4DTGb3cCszbKk9iLdbBzaAd3iC-w9WJHzY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGFy/c3VuZm9sZGVkLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OC8wNS9NcmluYWxp/bmktVHlhZ2kuanBn'
            },
            {
                id: 15,
                name: 'Honey Singh',
                image: 'https://imgs.search.brave.com/L6xBXj915RNv6_UACmJp4ZSXVmHHTX2EKYXnL8n8BzI/rs:fit:860:0:0/g:ce/aHR0cDovL3N0YXJz/dW5mb2xkZWQuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE1/LzAxL1lvLVlvLUhv/bmV5LVNpbmdoLTMu/anBn'
            },
            {
                id: 16,
                name: 'Badshah',
                image: 'https://imgs.search.brave.com/gZDgEfB7vvwUgOMXUG0CjInoi19VmOC5HKt5vQL_KQU/rs:fit:860:0:0/g:ce/aHR0cDovL3N0YXJz/dW5mb2xkZWQuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE1/LzA5L0JhZHNoYWgu/anBn'
            },
            {
                id: 17,
                name: 'Alka Yagnik',
                image: 'https://imgs.search.brave.com/oZ8IqpCDzkflSDPlgJb1893KxCxvo7DwkIJeBhi5PJQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDUzNTYz/MTcuanBn'
            },
            {
                id: 18,
                name: 'Shreya Ghoshal',
                image: 'https://imgs.search.brave.com/oZ8IqpCDzkflSDPlgJb1893KxCxvo7DwkIJeBhi5PJQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDUzNTYz/MTcuanBn'
            },
        ],
        recentlyPlayedSong: [
            {
                id: '1',
                songName: 'Jai Ho',
                artistName: 'A.R. Rahman',
                image: 'https://example.com/jaiho.jpg',
            },
            {
                id: '2',
                songName: 'Lag Ja Gale',
                artistName: 'Lata Mangeshkar',
                image: 'https://example.com/lagjagale.jpg',
            },
            {
                id: '3',
                songName: 'Mere Sapno Ki Rani',
                artistName: 'Kishore Kumar',
                image: 'https://example.com/meresapnokirani.jpg',
            },
            {
                id: '4',
                songName: 'Tum Hi Ho',
                artistName: 'Arijit Singh',
                image: 'https://example.com/tumhiho.jpg',
            },
            {
                id: '5',
                songName: 'Dilbar',
                artistName: 'Neha Kakkar',
                image: 'https://example.com/dilbar.jpg',
            },
            {
                id: '6',
                songName: 'DJ Waley Babu',
                artistName: 'Badshah',
                image: 'https://example.com/djwaleybabu.jpg',
            },
            {
                id: '7',
                songName: 'Deewani Mastani',
                artistName: 'Shreya Ghoshal',
                image: 'https://example.com/deewanimastani.jpg',
            },
            {
                id: '8',
                songName: 'Tera Hone Laga Hoon',
                artistName: 'Atif Aslam',
                image: 'https://example.com/terahonelaga.jpg',
            },
        ]


    }

    return (
        <ScrollView style={[GlobalStyle.screenBG, styles.screen]} nestedScrollEnabled={true} >
            {/* profile image  */}
            <ImageBackground resizeMode='contain' source={{ uri: user.image }} style={styles.image} >
                <TouchableOpacity style={[styles.iconsWrapper, { left: 20, top: 20 }]}
                    onPress={()=>navigation.goBack()}
                >
                    <AntDesign name="arrowleft" size={23} color={'white'} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.iconsWrapper, { right: 20, top: 20 }]}>
                    <AntDesign name='setting' size={23} color={"white"} />
                </TouchableOpacity>

                <LinearGradient colors={['transparent', 'rgba(9,18,40,1)']} style={styles.gradient} >
                    <View style={styles.premiumBandage}>
                        <Text style={{ color: 'white', fontSize: 16, letterSpacing: 3, textAlign:'center' }} >SUPER PREMIUM</Text>
                    </View>
                    <Text style={{ color: 'white', fontSize: 25, fontWeight: 900 }} > {user.name} </Text>
                    <Text style={{color:'rgba(90,218,190,1)', fontSize:16}}>{user.username}</Text>
                </LinearGradient>
            </ImageBackground>

            {/* sharing and eding options*/}
            <View style={styles.shareEditView}>
                <View style={styles.share}>
                    <TouchableOpacity style={styles.spotifyBtm} >
                        <Image style={{width:16, height:16, borderRadius:10}} source={{ uri:'https://imgs.search.brave.com/vjxBYwxia20nyKWd6TLKpIwZHNiPrFUHLXdlCw8KIyc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1pY29uL3Nw/b3RpZnlfMzE4LTE4/MzQzMC5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw'}} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.instaBtm} >
                        <Image style={{width:20, height:16}} source={{ uri: 'https://imgs.search.brave.com/sj2qX7fJgF3QkXKXo_dektzz9u9Itwmyaet5WHBcUGE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1MjEu/cG5n' }} />
                        <Text style={{color:'white', fontSize:14}}> Connect</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.shareBtm} >
                        <Feather name='share-2' size={20} color={'white'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.edit}>
                    <TouchableOpacity style={styles.instaBtm} >
                        <Text style={{color:'white'}} >Edit profile</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={{ color: 'white', margin: 10 }} >{user.about}</Text>
            
            <View style={styles.playlistView} >
                <TouchableOpacity style={styles.addPlaylist} >
                    <AntDesign name="plus" size={50} color={'white'} />
                </TouchableOpacity>
            </View>

            <View>
                {/* Profile and Premium navigation */}
                <View style={{width:'100%', height:40, flexDirection:'row', alignItems:'center' }}>
                    <TouchableOpacity style={[styles.profilePremiumBtm, {borderBottomWidth: 2, borderColor: '#00A8B6',}]} >
                        <Text style={{ color:'#00A8B6', fontSize:18}} >Profile</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.profilePremiumBtm} >
                        <FlowingColorText text={'PREMIUM'} />
                    </TouchableOpacity>
                </View>
    
                <ArtistsDisplayer artists={user.artists} title={'My Favorite Artists'} shape={'circle'} />
                <HorizontalLine />
                <ArtistsDisplayer artists={user.artists} title={'My Favorite Songs'} shape={'square'} />
                <HorizontalLine />

                <View style={{padding:10,}} >
                    <Text style={styles.title} >My Favorite Genres</Text>
                    <HBar title={'modern bollywood'} rodSize={80} />
                    <HBar title={'filmi'} rodSize={70} />
                    <HBar title={'disi pop'} rodSize={60} />
                    <HBar title={'indian instrumental'} rodSize={30} />
                    <HBar title={'hare krishna'} rodSize={50} />
                </View>
                <View style={{ padding: 10, }}>
                    <Text style={styles.title} >My Recently Played</Text>
                    {user.recentlyPlayedSong.map((item)=><RecentlyPlayedSong key={item.id} item={item} />)}
                </View>
                
            </View>
        </ScrollView>
    )
}

export default Profile;

const styles = StyleSheet.create({
    screen: {
    },
    image: {
        width: '100%',
        height: height / 2,
        position: 'relative',
    },

    iconsWrapper: {
        width: 50,
        height: 50,
        borderRadius: 40,
        backgroundColor: '#333333',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },
    gradient: {
        width: '100%',
        height: 120,
        position: 'absolute',
        bottom: 0,
        paddingHorizontal:10
    },
    premiumBandage: {
        backgroundColor: 'rgb(31, 71, 229)',
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 20,
        width: 190,
        margin:10
    },
    shareEditView: {
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    share: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '45%',
        justifyContent: 'space-between',
        alignSelf:'flex-start'
    },
    edit: {

    },
    spotifyBtm: {
        width: 30,
        height: 30,
        borderWidth: 0.5,
        borderColor: '#a3a3c2',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    instaBtm: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#a3a3c2',
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: '#a3a3c2',
        padding: 5,
    },
    shareBtm: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#a3a3c2',
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: '#a3a3c2',
        padding: 5,
    },
    playlistView: {
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    addPlaylist: {
        borderWidth: 1,
        borderColor: '#a3a3c2',
        width: 60,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profilePremiumBtm: {
        width: '50%',
       
        justifyContent: 'center',
        alignItems: 'center',
        height:'100%'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        
    }
})