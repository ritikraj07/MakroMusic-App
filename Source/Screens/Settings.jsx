import {useEffect } from 'react'
import {
    View, ScrollView, Text,
    Image, TouchableOpacity,
    StyleSheet
} from 'react-native'
import GlobalStyle, { color } from '../Style/Global';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'

import auth, { firebase } from '@react-native-firebase/auth'

import { logOut, logIn } from '../Redux/Reducers/user';

import {useSelector, useDispatch} from 'react-redux'




const Settings = ({navigation}) => {
    let dispatch = useDispatch()
    let {name, image, age, isloggedIn} = useSelector((state) => state.user)
    
    const LogOut = () => {
        auth().signOut()
            .then(() => {
                dispatch(logOut())

            }).catch((error) => {
                
            })
    }


    let image2 = 'https://imgs.search.brave.com/G3jp9cl5gQ2Cmhq-PAp5yaHRBOk2LavYyfq5OewhCFY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZTMubW91dGhzaHV0/LmNvbS9pbWFnZXMv/aW1hZ2VzcC85MjU5/MzQ2NTJzLmpwZw'
    let image1 = 'https://cdn.marvel.com/content/1x/042_bluebayou_digital_keyart_teaser_r16_lg.jpg'

    const HorizontalLine = ({ }) => <View style={styles.horizontalLine} />
    const RightArrow = () => <AntDesign name="right" color={'#00A8B6'} size={25} />


    return (
        <View style={[GlobalStyle.screenBG,]} >
            <View style={{ justifyContent: 'center', marginBottom:5, position:'relative', height:50 }} >
                <TouchableOpacity style={{ left: 20, top: 15, position:'absolute', padding:5, width:'10%'}}
                    onPress={() => navigation.goBack()}
                >
                    <AntDesign name="arrowleft" size={23} color={'white'} />
                </TouchableOpacity>
                <Text style={{
                    position: 'absolute', color: 'white',
                    textAlign: 'center', fontSize: 20,
                    fontWeight: 'bold',  left:'43%', top:20
                }} >Settigns</Text>
            </View>
            <ScrollView style={styles.sview} >
                
                <View style={{
                    flexDirection: 'row', alignItems: 'center',
                    justifyContent: 'space-between', marginVertical:15,
                    position:'relative', height:80
                }} >
                    <TouchableOpacity style={[styles.container, styles.topBtm]} >
                        <View style={{width:'25%', margin:5, marginRight:10}} >
                            <Image style={[styles.img, {position:'absolute', top:10, zIndex:10,left:10} ]} source={{ uri: image2 }} />
                            <Image style={styles.img} source={{ uri: image1 }} />
                        </View>
                        <View style={{flex:1}} >
                            <Text style={{ color: 'white', fontWeight:'bold' }} >Extra </Text>
                            <Text style={{ color: 'white', fontWeight:'bold' }}>Profile Match</Text>
                            <Text style={{color:color['french-greay']}} >₹5.75 / es</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.container, styles.topBtm]} >
                        <View style={{ width: '25%', margin: 5, marginRight: 10 }} >
                            <Image style={[styles.img, { position: 'absolute', top: 10, zIndex: 10, left: 10 }]} source={{ uri: image2 }} />
                            <Image style={styles.img} source={{ uri: image1 }} />
                        </View>
                        <View style={{ flex: 1 }} >
                            <Text style={{ color: 'white', fontWeight: 'bold' }} >Extra </Text>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Match Request</Text>
                            <Text style={{ color: color['french-greay'] }} >₹27.59 / es</Text>
                        </View>
                    </TouchableOpacity>


                </View>

                <View style={styles.container} >
                    {/* profile */}
                    <View style={styles.box} >
                        <View style={styles.box} >
                            <Image source={{ uri: image }} style={{width:50, height:50, borderRadius:50}} />
                            <View>
                                <Text style={styles.lable} > {name}</Text>
                                <Text style={{ color: color['french-greay'], marginLeft:15 }}>Edit Profile</Text>
                            </View>
                        </View>
                        <RightArrow />
                    </View>
                    <HorizontalLine  />

                    <TouchableOpacity style={[styles.box]} >
                        <View style={styles.box} >
                            <EvilIcons name="user" color={'white'}  style={styles.icons}/>
                            <Text style={styles.lable} >Account</Text>
                        </View>
                        <RightArrow />
                    </TouchableOpacity>
                    <HorizontalLine />
                    <TouchableOpacity style={[styles.box]} >
                        <View style={styles.box} >
                            <Feather name="bell" color={'white'} style={styles.icons} />
                            <Text style={styles.lable} >Notifications</Text>
                        </View>
                        <RightArrow />
                    </TouchableOpacity>

                    <HorizontalLine />

                    <TouchableOpacity style={[styles.box]} >
                        <View style={styles.box} >
                            <Fontisto name="world-o" color={'white'} style={styles.icons} />
                            <Text style={styles.lable} >Language and Region</Text>
                        </View>
                        <RightArrow />
                    </TouchableOpacity>
                    <HorizontalLine />
                    <TouchableOpacity style={[styles.box]} >
                        <View style={styles.box} >
                            <Fontisto name="locked" color={'white'} style={styles.icons} />
                            <Text style={styles.lable} >Privacy</Text>
                        </View>
                        <RightArrow />
                    </TouchableOpacity>

                </View>


                <View style={styles.container}>
                    
                    <TouchableOpacity style={[styles.box]} >
                        <View style={styles.box} >
                            <AntDesign name="adduser" color={'white'} style={styles.icons} />
                            <View style={{marginVertical:5}}>
                                <Text style={styles.lable} >
                                    Invite a Friend
                                    <Text style={{
                                        // backgroundColor: color.pelorous,
                                        fontSize: 16,
                                        borderRadius: 10,
                                        padding: 5,
                                        color: color.pelorous


                                    }} > Gain Reward</Text>
                                </Text>
                                <Text style={{
                                    color: color.nevada,
                                    marginLeft:10
                                }} >Invite a friend and win 5 profile matches!</Text>

                            </View>
                            
                        </View>
                        <RightArrow />
                    </TouchableOpacity>

                </View>

                <View style={styles.container}>

                    <TouchableOpacity style={[styles.box]} >
                        <View style={{
                            flexDirection:'row'
                        }} >
                            <AntDesign name="notification" color={'white'} style={[styles.icons, { marginTop: 10, transform: [{ scaleX: -1 }] }]} />
                            <View style={{ marginVertical: 5, width:'85%', alignSelf:'flex-start' }}>
                                <Text style={styles.lable} >
                                    makromusic for Artists
                                </Text>
                                <Text numberOfLines={2} style={{
                                    color: color.nevada,
                                    marginLeft: 10
                                }} >Would you like to promote your songs to music lovers?</Text>

                            </View>

                        </View>
                        <RightArrow />
                    </TouchableOpacity>

                </View>



                <View style={styles.container} >
                    

                   
                    <TouchableOpacity style={[styles.box]} >
                        <View style={styles.box} >
                            <AntDesign name="staro" color={'white'} style={styles.icons} />
                            <Text style={styles.lable} >Rate Us</Text>
                        </View>
                        <RightArrow />
                    </TouchableOpacity>

                    <HorizontalLine />

                    <TouchableOpacity style={[styles.box]} >
                        <View style={styles.box} >
                            <AntDesign name="infocirlceo" color={'white'} style={styles.icons} />
                            <Text style={styles.lable} >About</Text>
                        </View>
                        <RightArrow />
                    </TouchableOpacity>
                    <HorizontalLine />
                    <TouchableOpacity style={[styles.box]} >
                        <View style={styles.box} >
                            <AntDesign name="customerservice" color={'white'} style={styles.icons} />
                            <Text style={styles.lable} >Help</Text>
                        </View>
                        <RightArrow />
                    </TouchableOpacity>

                </View>

                <TouchableOpacity onPress={LogOut} style={[styles.box, styles.container,{marginBottom:30}]} >
                    <View style={styles.box} >
                        <MaterialCommunityIcons name="logout" color={'white'} size={20} />
                        <Text style={styles.lable} >Log Out</Text>
                    </View>
                    <RightArrow />
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
export default Settings;

const styles = StyleSheet.create({
    sview: {
        padding: 10,
        paddingBottom:60
    },
    img: {
        width: 30,
        height: 30,
        borderRadius: 15,
        // position:'absolute'
    },
    topBtm: {
        width: '48%', flexDirection: 'row', alignItems: 'center',
        justifyContent: 'space-between', padding: 10,
        height: '100%'
    },
    container: {
        borderWidth: 0.15,
        borderColor: '#93a4d2',
        borderRadius: 5,
        backgroundColor: '#171f36',
        marginVertical: 5,
        paddingHorizontal: 10,
        overflow:'hidden'
        
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        alignItems: 'center',
        borderRadius:5
    },
    boxLeft: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    lable: {
        color: 'white',
        fontSize: 19,
        marginLeft: 10
    },
    icons: {
        fontSize: 30,
        color:'white'
    },
    horizontalLine: {
        borderBottomWidth: 0.6,
        borderBottomColor: '#a3a3c2',
        marginVertical: 7,
    },
})