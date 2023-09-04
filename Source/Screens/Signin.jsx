import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import GlobalStyle from '../Style/Global';
import auth, { firebase } from '@react-native-firebase/auth'
import { LoadingScreen, SignInWithGoogle, showToast } from '../Components';
import { useSelector, useDispatch } from 'react-redux'
import { setLoadingFalse, setLoadingTrue } from '../Redux/Reducers/loading';
import { logIn } from '../Redux/Reducers/user';

const Signin = ({navigation}) => {
   let dispatch = useDispatch()
    let isloggedIn = useSelector((state) => state.user.isloggedIn)
    
    
    let logo = 'https://cdn-images-1.medium.com/fit/t/1600/480/1*FpqeaQi8Q1siHs9M2gEMZA.png'
   
    

    useEffect(() => {
        if (isloggedIn) {
            navigation.navigate('BottomTab');
         }
        const unsubscribe = auth()?.onAuthStateChanged((currentUser) => {
            currentUser?.reload()
            if (currentUser) {
                // setUser(currentUser);
                // console.log(currentUser)
                if (currentUser.emailVerified) {
                    // Update your UI to show that the email is verified
                    // console.log("user Verified ====>>>>>><<<<<<")
                    // dispatch(logIn())
                    navigation.navigate('BottomTab')
                } else {
                    showToast('Please Verify Your Email','short')
                }
            }
        });

        return unsubscribe;
    }, []);

    return (
        <View
            style={[GlobalStyle.screenBG, { alignItems: 'center', paddingHorizontal:10 }]}
        >
            <Image style={{
                width: 200,
                height: 70
            }}
                resizeMode='contain'
                source={{ uri: logo }} />
            
            

            <View style={styles.inputContainer} >
                <Image style={styles.img} source={{ uri: 'https://static.vecteezy.com/system/resources/previews/002/079/984/original/phone-icon-flat-style-isolated-on-grey-background-telephone-symbol-call-illustration-sign-for-web-and-mobile-app-free-vector.jpg' }} />
                <TouchableOpacity style={[styles.btm]}
                    onPress={() => { navigation.navigate('SignInWithPhoneNumber')}}
                >
                    <Text style={styles.btmText}> Continue With Phone </Text>
                </TouchableOpacity>
            </View>
            




            
            <View style={styles.inputContainer} >
                <Image style={styles.img} source={{ uri: 'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png' }} />
                <TouchableOpacity style={[styles.btm]}
                    onPress={() => { navigation.navigate('SignInWithEmailPassword') }}
                >
                    <Text style={styles.btmText}> Continue With Email </Text>
                </TouchableOpacity>
            </View>
            
            <SignInWithGoogle />
          



            <TouchableOpacity style={{
                marginVertical: 10,
                alignItems: 'center',
                height: 45,
                justifyContent: 'center',
                width: '82%',
                height: '10%'

            }}
               onPress={()=>navigation.navigate('CreateAccount')}
            >
                <Text style={styles.btmText}> Create New Account</Text>
            </TouchableOpacity>

           
      



            
        </View>
    )
}

export default Signin;

const styles = StyleSheet.create({
    inputContainer: {
        width: '95%',
        flexDirection: 'row',
        backgroundColor: '#00A8B6',
        alignItems: 'center',
        height: 55,
        margin: 10
    },
    lable: {
        color: 'white',
        fontSize: 18,
        marginBottom: 10
    },
    img: {
        width: 60,
        height: '100%',
        backgroundColor: 'white'
    },

    btm: {
        marginVertical: 10,
        alignItems: 'center',
        height: 45,
        justifyContent: 'center',
        width: '82%',
        height: '100%'

    },
    btmText: {
        color: 'white',
        fontSize: 22,
        paddingHorizontal: 10
    }
})
