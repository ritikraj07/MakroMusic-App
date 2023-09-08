import { useState} from 'react'
import {View, Text, Platform, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setUser, setprogress } from '../../Redux/Reducers/user'
const UserName = () => {
    const {name} = useSelector((store)=>store.user)
    const [username, setUsername] = useState(name)
    let dispatch = useDispatch()
    
    
    return (
        <SafeAreaView
            style={styles.container} >

            <View style={styles.box}>
                <Text style={styles.header} >
                    Welcome, {name}!
                </Text>
                <Text style={[styles.header, {marginTop:-5}]} >
                    Choose a username
                </Text>
                <Text style={styles.subtitle} >
                    Choose a username that people can recognize you by. You can use your full name or anything you prefer.
                </Text>

                <View style={styles.inputBox} >
                    <Text style={{color:'#bbbdca', fontSize:20, marginTop:-5}} >@</Text>
                    <TextInput style={styles.input} placeholderTextColor={'#bbbdca'}
                        placeholder={`${name}`} 
                        onChangeText={setUsername}
                        />
                </View>
            </View>

            <TouchableOpacity style={styles.btm}
                onPress={() => {
                    dispatch(setUser({field:'username', value:username}))
                    dispatch(setprogress())
                }}
            >
                <Text style={styles.btmText}>Continue</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default UserName;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: 20,
    },

    box: {
        marginTop: 30
    },
    header: {
        color: 'white',
        fontSize: 30,
        fontWeight: '500',
        marginVertical: 5,
    },

    subtitle: {
        color: '#bbbdca',
        fontSize: 16,
        fontWeight: '500',
        marginVertical: 5,
    },
    inputBox: {
        borderColor: '#40bcbf',
        borderWidth: 3,
        borderRadius: 10,
        marginVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems:'center'
    },
    input: {
        fontSize: 20,
        color: 'white',
        marginVertical: 5,
        flex:1
    },

    btm: {
        width: '100%',
        height: 50,
        backgroundColor: '#40bcbf',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        
    },
    btmText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'rgb(9,18,40)'
    }




})