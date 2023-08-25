import { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import GlobalStyle from '../Style/Global';
import auth, { firebase } from '@react-native-firebase/auth'
const SignInWithEmailPassword = ({navigation}) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    let logo = 'https://cdn-images-1.medium.com/fit/t/1600/480/1*FpqeaQi8Q1siHs9M2gEMZA.png'

    // useEffect(() => {
    //     const unsubscribe = auth().onAuthStateChanged((currentUser) => {
    //         currentUser.reload()
    //         if (currentUser) {
    //             // setUser(currentUser);
    //             console.log(currentUser)
    //             if (currentUser.emailVerified) {
    //                 // Update your UI to show that the email is verified
    //                 console.log("user Verified ====>>>>>><<<<<<")
    //                 navigation.navigate('Explore')
    //             }
    //         }
    //     });

        // return unsubscribe;
    // }, []);

    async function SignIn() {
        try {
            const userCredential = await auth().createUserWithEmailAndPassword(email, password);
            const user = userCredential.user;
            console.log('User created successfully:', user);

            if (user) {
                user.sendEmailVerification()
                    .then(() => {
                        console.log('Verification email sent');
                        TimerOnVerify()
                    })
                    .catch((error) => {
                        console.log('Error sending verification email:', error);
                    });
            }
        } catch (error) {
            console.log('Error creating user:', error);
        }
    }

    function TimerOnVerify() {
        setTimeout(() => {
            navigation.navigate('BottomTab')
        }, 10000);
    }

    async function CheckVerified() {
        try {
            auth().onAuthStateChanged((currentUser) => {
                currentUser?.reload()
                if (currentUser) {
                    // setUser(currentUser);
                    console.log(currentUser)
                    if (currentUser.emailVerified) {
                        // Update your UI to show that the email is verified
                        console.log("user Verified ====>>>>>><<<<<<")
                        navigation.navigate('Explore')
                    }
                }
            });
        } catch (error) {

        }
    }

    return (
        <SafeAreaView style={[GlobalStyle.screenBG, { alignItems: 'center' }]} >
            <Image style={{
                width: 200,
                height: 70
            }}
                resizeMode='contain'
                source={{ uri: logo }} />

            <View style={styles.inputContainer}  >
                <Text style={styles.lable} > Login with Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter your email'
                    placeholderTextColor={'#a3a3c2'}
                    onChangeText={setemail}
                />
                <TextInput
                    style={[styles.input, { marginTop: 5 }]}
                    placeholder='Enter your password'
                    placeholderTextColor={'#a3a3c2'}
                    onChangeText={setpassword}
                    textContentType='password'
                />
                <TouchableOpacity style={styles.btm} onPress={SignIn} >
                    <Text style={styles.btmText}>Verify Email</Text>
                </TouchableOpacity>
            </View>

            {/* <TouchableOpacity style={styles.btm} onPress={CheckVerified} >
                <Text style={styles.btmText}>CheckVerified</Text>
            </TouchableOpacity> */}



        </SafeAreaView>
    )

}

export default SignInWithEmailPassword;




const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        padding: '2%'
    },
    lable: {
        color: 'white',
        fontSize: 20,
        marginBottom: 10
    },
    input: {
        padding: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        paddingHorizontal: 10,
        color: 'white',
        fontSize: 16,
        marginVertical: 10
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
        padding: 10,
    }
})