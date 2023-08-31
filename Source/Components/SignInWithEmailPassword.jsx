import { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import GlobalStyle from '../Style/Global';
import auth from '@react-native-firebase/auth'
import { showToast } from '../Components';
import {useDispatch} from 'react-redux'
import { setLoadingFalse, setLoadingTrue } from '../Redux/Reducers/loading';
const SignInWithEmailPassword = ({ navigation }) => {
    const dispatch = useDispatch()
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
                    
    //             }
    //         }
    //     });

    //     return unsubscribe;
    // }, []);

    async function SignIn() {
        dispatch(setLoadingTrue())
        try {
            const userCredential = await auth().signInWithEmailAndPassword(email, password);
            const user = userCredential.user;
            console.log('User created successfully:', user);

            if (!user.emailVerified) {
                CheckVerified()
                
                if (user) {
                    user.sendEmailVerification()
                        .then(() => {
                            console.log('Verification email sent');
                            showToast('Verification email send!', 'short')
                        })
                        .catch((error) => {
                            console.log('Error sending verification email:', error);
                            showToast(email, 'long')
                        });
                }
            } else {
                navigation.navigate('BottomTab')
            }

           
        } catch (error) {
            let bool = false;
            // console.log(error.split('').filter((e, i) => {
            //     if (e =='[' && i < 4 && !bool) {
            //         return e
            //     } else if (e==']' && i>10) {
            //         bool=true
            //     }
            // }));

            const input = `${error}`


            if (typeof input === "string") {
                const errorCodePattern = /\[([^\]]+)\]/;
                const matches = input.match(errorCodePattern);
                const errorCode = matches ? matches[1] : "Unknown error";
                showToast(errorCode.replace("auth/", ""), 'short')
                console.log(errorCode.replace("auth/", ""));
            } else {
                console.log("Invalid input format");
            }
            
            
        }

        dispatch(setLoadingFalse())
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
                        // console.log("user Verified ====>>>>>><<<<<<")
                        navigation.navigate('Explore')
                    } else {
                        showToast('Please Verify Your Email', 'short')
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
                    <Text style={styles.btmText}>Login</Text>
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