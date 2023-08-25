import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import GlobalStyle from '../Style/Global';
import auth, { firebase } from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';


const SignInWithGoogle = () => {
    const navigation = useNavigation();
    useEffect(() => { GoogleSignin.configure(); }, [])

    async function onGoogleButtonPress() {
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            await GoogleSignin.signOut();
            const userInfo = await GoogleSignin.signIn();
            
            console.log(userInfo)

            // const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
            // Sign-in the user with the credential
            // console.log('googleCredential==>',googleCredential)
            // let state = auth().signInWithCredential(googleCredential);
            // console.log("state===>", state)
            // return state
        } catch (error) {
            console.log("==>Error on singin page line fun onGoogleButtonPress", error)
        }
    }


    return (
        <View style={styles.inputContainer} onPress={onGoogleButtonPress}  >
            <Image style={styles.img} source={{ uri: 'https://blog.hubspot.com/hubfs/image8-2.jpg' }} />
            <TouchableOpacity style={[styles.btm]}
                onPress={() => onGoogleButtonPress().then(() => navigation.navigate('BottomTab'))}
            >
                <Text style={styles.btmText}> Continue With Google </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignInWithGoogle;

const styles = StyleSheet.create({
    inputContainer: {
        width: '95%',
        flexDirection: 'row',
        backgroundColor: '#00A8B6',
        alignItems: 'center',
        height: 55,
        margin:10
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
        height:'100%'

    },
    btmText: {
        color: 'white',
        fontSize: 22,
        paddingHorizontal: 10
    }
})


