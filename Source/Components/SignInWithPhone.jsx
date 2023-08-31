import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import GlobalStyle from '../Style/Global';
import auth, { firebase } from '@react-native-firebase/auth'
import { setLoadingFalse, setLoadingTrue } from '../Redux/Reducers/loading';
import {useDispatch} from 'react-redux'
const SignInWithPhoneNumber = ({navigation}) => {
    const [confirm, setConfirm] = useState(null);
    const [phoneNumber, setphoneNumber] = useState(0)
    const [code, setCode] = useState(0);
    const [otpSend, setotpSend] = useState(true)
    const dispatch = useDispatch()

    let logo = 'https://cdn-images-1.medium.com/fit/t/1600/480/1*FpqeaQi8Q1siHs9M2gEMZA.png'

    async function signInWithPhoneNumber() {
        dispatch(setLoadingTrue())
        try { 
            const confirmation = await auth().signInWithPhoneNumber(`+91 ${phoneNumber}`);
            setConfirm(confirmation);
            setotpSend(false)
        } catch (error) {
            console.log('signinwithPhone 23==>', `${error}` )
        }
        dispatch(setLoadingFalse())
     
    }

    async function confirmCode() {
        dispatch(setLoadingTrue())
        try {
            await confirm.confirm(code);
            console.log('you have log in succefully')
            navigation.navigate('BottomTab')
        } catch (error) {
            console.log('Invalid code.');
        }
        dispatch(setLoadingFalse())
    }


    return (
        <SafeAreaView style={[GlobalStyle.screenBG, { alignItems: 'center' }]} >
            <Image style={{
                width: 200,
                height: 70
            }}
                resizeMode='contain'
                source={{ uri: logo }} />
            {otpSend?<View style={styles.inputContainer}  >
                <Text style={styles.lable} > Login with Phone</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter your Phone Number'
                    placeholderTextColor={'#a3a3c2'}
                    onChangeText={setphoneNumber}
                    keyboardType='number-pad'
                    maxLength={10}
                    
                />
                <TouchableOpacity onPress={() => signInWithPhoneNumber()} style={styles.btm} >
                    <Text style={styles.btmText}>Get OTP</Text>
                </TouchableOpacity>
            </View>
                :

            <View style={styles.inputContainer} >
                <Text style={styles.lable} >Enter Your OTP</Text>
                <TextInput onChangeText={setCode} maxLength={6} keyboardType='number-pad' style={[styles.input, { textAlign: 'center', fontSize: 20 }]} placeholderTextColor={'#a3a3c2'} placeholder='######' />
                <TouchableOpacity style={styles.btm} onPress={confirmCode} >
                    <Text style={styles.btmText}> Submit </Text>
                </TouchableOpacity>
            </View>}

        </SafeAreaView>
    )
}

export default SignInWithPhoneNumber;


const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        padding: '2%'
    },
    lable: {
        color: 'white',
        fontSize: 18,
        marginBottom: 10
    },
    input: {
        padding: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        paddingHorizontal: 10,
        color: 'white',
        fontSize: 16
    },
    btm: {
        backgroundColor: '#00A8B6',
        marginVertical: 10,
        alignItems: 'center',
        borderRadius: 10


    },
    btmText: {
        color: 'white',
        fontSize: 20,
        padding: 10
    }
})