import { } from 'react'
import { View, Text,SectionList, StyleSheet, ScrollView, ImageBackground, Dimensions, TouchableOpacity, FlatList } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather'
import GlobalStyle from '../Style/Global';
import { Image } from '@rneui/base';
import { ArtistsDisplayer, FlowingColorText, HBar, HorizontalLine, RecentlyPlayedSong } from '../Components';
import {useSelector} from 'react-redux'
const { width, height } = Dimensions.get('window')

const Profile = ({ navigation }) => {
    
    let { name, username, image, artists, recentlyPlayedSong, about } = useSelector((store) => store.user) 
    

    return (
        <ScrollView style={[GlobalStyle.screenBG, styles.screen]} nestedScrollEnabled={true} >
            {/* profile image  */}
            {/* resizemode = contain | cover */}
            <ImageBackground resizeMode='cover' source={{ uri: image[0].uri }} style={styles.image} >
                <TouchableOpacity style={[styles.iconsWrapper, { left: 20, top: 20 }]}
                    onPress={()=>navigation.goBack()}
                >
                    <AntDesign name="arrowleft" size={23} color={'white'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Settings')} style={[styles.iconsWrapper, { right: 20, top: 20 }]}>
                    <AntDesign name='setting' size={23} color={"white"} />
                </TouchableOpacity>

                <LinearGradient colors={['transparent', 'rgba(9,18,40,1)']} style={styles.gradient} >
                    <View style={styles.premiumBandage}>
                        <Text style={{ color: 'white', fontSize: 16, letterSpacing: 3, textAlign:'center' }} >SUPER PREMIUM</Text>
                    </View>
                    <Text style={{ color: 'white', fontSize: 25, fontWeight: 900 }} > {name} </Text>
                    <Text style={{color:'rgba(90,218,190,1)', fontSize:16}}>{username}</Text>
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

            <Text style={{ color: 'white', margin: 10 }} >{about}</Text>
            
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
    
                <ArtistsDisplayer artists={artists} title={'My Favorite Artists'} shape={'circle'} />
                <HorizontalLine />
                <ArtistsDisplayer artists={artists} title={'My Favorite Songs'} shape={'square'} />
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
                    {recentlyPlayedSong?.map((item)=><RecentlyPlayedSong key={item.id} item={item} />)}
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