import {useState} from 'react'
import { View, Text, Platform, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setUser, setprogress } from '../../Redux/Reducers/user'
const Email = () => {
    let dispatch = useDispatch()
    const {email} = useSelector((state)=>state.user)
    const [Email, setEmail] = useState(email)
    return (
        <SafeAreaView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container} >

            <View style={styles.box}>
                <Text style={styles.header} >
                    What's your email address?
                </Text>
                <Text style={styles.subtitle} >
                    You need to enter your email address for us to contact you.
                </Text>

                <View style={styles.inputBox} >
                    <TextInput style={styles.input} placeholderTextColor={'#bbbdca'}
                        placeholder={`${email}`} 

                        onChangeText={setEmail}
                        />
                </View>
            </View>

            <TouchableOpacity style={styles.btm}
                onPress={() => {
                    dispatch(setUser({field:'email', value:Email}))
                    dispatch(setprogress())
                }}
            >
                <Text style={styles.btmText}>Continue</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default Email;

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
        alignItems: 'center',
        paddingVertical: 8

    },
    input: {
        fontSize: 20,
        color: 'white',
        flex: 1,
        alignContent: 'center'
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