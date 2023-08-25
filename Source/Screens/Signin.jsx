import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import GlobalStyle from '../Style/Global';
import auth, { firebase } from '@react-native-firebase/auth'

import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';
// 260553489981 - d56hbe5bimrb6tdj3lq7nh7ne14up977.apps.googleusercontent.com
// GoogleSignin.configure({
//     webClientId: '260553489981 - d56hbe5bimrb6tdj3lq7nh7ne14up977.apps.googleusercontent.com',
// });

const Signin = () => {
    const [lmethod, setlmethod] = useState(true)
    const [confirm, setConfirm] = useState(null);
    const [email, setemail] = useState('ritikra3rrr@gmail.com')
    const [password, setpassword] = useState('23456789')
    const [phoneNumber, setphoneNumber] = useState(0)
    const [code, setCode] = useState(0);

    let logo = 'https://cdn-images-1.medium.com/fit/t/1600/480/1*FpqeaQi8Q1siHs9M2gEMZA.png'
    // useEffect(() => {
    //     const subscriber = auth().onAuthStateChanged(() => console.log());
    //     return subscriber;
    // }, []);

    // useEffect(() => {
    //     GoogleSignin.configure({
    //         webClientId: '260553489981 - d56hbe5bimrb6tdj3lq7nh7ne14up977.apps.googleusercontent.com',
    //     });
    // }, [])

    useEffect(() => { GoogleSignin.configure(); },[])


    
    async function signInWithPhoneNumber() {
        const confirmation = await auth().signInWithPhoneNumber(`+91 ${phoneNumber}`);
        setConfirm(confirmation);
        console.log(confirmation)
    }

    async function confirmCode() {
        try {
            await confirm.confirm(code);
            console.log('you have log in succefully')
        } catch (error) {
            console.log('Invalid code.');
        }
    }


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

  async function SignInWithEmailPassword() {
    try {
        const userCredential = await auth().createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        console.log('User created successfully:', user);

        // Send email verification
        if (user) {
            user.sendEmailVerification()
                .then(() => {
                    console.log('Verification email sent');
                })
                .catch((error) => {
                    console.log('Error sending verification email:', error);
                });
        }
    } catch (error) {
        console.log('Error creating user:', error);
    }
    }


    async function Login() {
        try { 
            const userCredential = await auth().createUserWithEmailAndPassword(email, password);
            console.log(userCredential)
            const user = userCredential.user;
        } catch (error) {
            
        }
    }

    
    async function CheckVerified() {
        try {
            auth().onAuthStateChanged((currentUser) => {
                currentUser.reload()
                if (currentUser) {
                    // setUser(currentUser);
                    console.log(currentUser)
                    if (currentUser.emailVerified) {
                        // Update your UI to show that the email is verified
                    }
                }
            });
            console.log(a)
         } catch (error) {
            
        }
    }




    return (
        <View
            style={[GlobalStyle.screenBG, { alignItems: 'center' }]}
        >
            <Image style={{
                width: 200,
                height: 70
            }}
                resizeMode='contain'
                source={{ uri: logo }} />

            {lmethod == true ? <View style={styles.inputContainer}  >
                <Text style={styles.lable} > Login with Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter your email'
                    placeholderTextColor={'#a3a3c2'}
                    onChangeText={setemail}
                />
                <TextInput
                    style={[styles.input, {marginTop:5}]}
                    placeholder='Enter your password'
                    placeholderTextColor={'#a3a3c2'}
                    onChangeText={setpassword}
                    textContentType='password'
                />
                <TouchableOpacity style={styles.btm} onPress={SignInWithEmailPassword} >
                    <Text style={styles.btmText}>Get OTP</Text>
                </TouchableOpacity>
            </View>
                :
                <View style={styles.inputContainer}  >
                    <Text style={styles.lable} > Login with Phone</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Enter your Phone Number'
                        placeholderTextColor={'#a3a3c2'}
                        onChangeText={setphoneNumber}
                        keyboardType='number-pad'
                    />
                    <TouchableOpacity onPress={() => signInWithPhoneNumber()} style={styles.btm} >
                        <Text style={styles.btmText}>Get OTP</Text>
                    </TouchableOpacity>
                </View>}



            <View
                style={{
                    width: '100%',
                    alignItems: 'flex-end',
                    padding: 10
                }}
            >
                <TouchableOpacity onPress={() => setlmethod(!lmethod)} >
                    <Text style={{ color: '#00A8B6', fontSize: 16 }} >Login with {lmethod == true ? 'Phone' : 'Email'} </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.inputContainer} >
                <Text style={styles.lable} >Enter Your OTP</Text>
                <TextInput onChangeText={setCode} maxLength={6} keyboardType='number-pad' style={[styles.input, { textAlign: 'center', fontSize: 20 }]} placeholderTextColor={'#a3a3c2'} placeholder='######' />
                <TouchableOpacity style={styles.btm} onPress={confirmCode} >
                    <Text style={styles.btmText}> Submit </Text>
                </TouchableOpacity>
            </View>




            <TouchableOpacity style={[styles.btm, { width: '95%' }]}
                onPress={() => onGoogleButtonPress().then(() => console.log('signin successfully with google'))}
            >
                <Text style={styles.btmText}> Sign-In With Google </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.btm, { width: '95%' }]}
                onPress={() => CheckVerified()}

            >
                <Text style={styles.btmText}> check verified</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Signin;

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