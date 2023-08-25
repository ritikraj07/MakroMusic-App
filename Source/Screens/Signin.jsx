import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import GlobalStyle from '../Style/Global';

import { SignInWithGoogle } from '../Components';


const Signin = ({navigation}) => {
   

    let logo = 'https://cdn-images-1.medium.com/fit/t/1600/480/1*FpqeaQi8Q1siHs9M2gEMZA.png'
   
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
          



            <TouchableOpacity style={[styles.btm, { width: '95%' }]}
               
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
