import {useState } from 'react'
import { View, Text, Image,TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import GlobalStyle from '../Style/Global';

const Signin = () => {
    const [lmethod, setlmethod] = useState(true)
    let logo = 'https://cdn-images-1.medium.com/fit/t/1600/480/1*FpqeaQi8Q1siHs9M2gEMZA.png'
    return (
        <View
            style={[GlobalStyle.screenBG, {alignItems:'center'} ]}
        >
            <Image style={{
                width: 200,
                height:70
            }}
                resizeMode='contain'
                source={{ uri: logo }} />
            
            {lmethod==true?<View style={styles.inputContainer}  >
                <Text style={styles.lable} > Login with Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter your email'
                    placeholderTextColor={'#a3a3c2'}
                />
                <TouchableOpacity style={styles.btm} >
                    <Text style={styles.btmText}>Get OPT</Text>
                </TouchableOpacity>
            </View>
            :
            <View style={styles.inputContainer}  >
                <Text style={styles.lable} > Login with Phone</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter your Phone Number'
                    placeholderTextColor={'#a3a3c2'}
                />
                <TouchableOpacity style={styles.btm} >
                    <Text style={styles.btmText}>Get OPT</Text>
                </TouchableOpacity>
            </View>}



            <View
                style={{
                    width: '100%',
                    alignItems: 'flex-end',
                    padding:10
                }}
            >
                <TouchableOpacity  onPress={()=>setlmethod(!lmethod)} >
                    <Text style={{ color:'#00A8B6', fontSize:16}} >Login with {lmethod==true?'Phone':'Email'} </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.inputContainer} >
                <Text style={styles.lable} >Enter Your OPT</Text>
                <TextInput keyboardType='number-pad' style={[styles.input, { textAlign: 'center', fontSize: 20 }]} placeholderTextColor={'#a3a3c2'} placeholder='######' />
                <TouchableOpacity style={styles.btm} >
                    <Text style={styles.btmText}> Submit </Text>
                </TouchableOpacity>
            </View>



        </View>
    )
}

export default Signin;

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        padding:'2%'
    },
    lable: {
        color: 'white',
        fontSize: 18,
        marginBottom:10
    },
    input: {
        padding: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        paddingHorizontal: 10,
        color: 'white',
        fontSize:16
    },
    btm: {
        backgroundColor: '#00A8B6',
        marginVertical: 10,
        alignItems: 'center',
        borderRadius:10
        
        
    },
    btmText: {
        color: 'white',
        fontSize: 20,
        padding:10
    }
})