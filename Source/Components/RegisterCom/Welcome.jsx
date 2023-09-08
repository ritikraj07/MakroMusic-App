import { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setUser, setprogress } from '../../Redux/Reducers/user'
const Welcome = () => {
    const { name } = useSelector((state) => state.user)
    const [myname, setmyname] = useState(name)
    let dispatch = useDispatch()

    return (
        <SafeAreaView style={styles.container} >

            <View style={styles.box}>
                <Text style={styles.header} >
                    👋 Welcome, what's your name?
                </Text>
                <Text style={styles.subtitle} >This is how you will be displayed on makromusic</Text>

                <View style={styles.inputBox} >
                    <TextInput style={styles.input}
                        placeholderTextColor={'#bbbdca'}
                        placeholder={`${name}`}
                        onChangeText={setmyname}

                    />
                </View>
            </View>

            <TouchableOpacity style={styles.btm}
                onPress={() => {
                    dispatch(setUser({ field: 'name', value: myname }))
                    dispatch(setprogress())
                }}
            >
                <Text style={styles.btmText}>Continue</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: 20
    },

    box: {
        marginTop: 30
    },
    header: {
        color: 'white',
        fontSize: 30,
        fontWeight: '500',
        marginVertical: 10,
    },

    subtitle: {
        color: '#bbbdca',
        fontSize: 16,
        fontWeight: '500',
        marginVertical: 10,
    },
    inputBox: {
        borderColor: '#40bcbf',
        borderWidth: 3,
        borderRadius: 10,
        marginVertical: 10,
        paddingHorizontal: 10
    },
    input: {
        fontSize: 20,
        color: 'white',
        marginVertical: 5,
        width: '100%',

    },

    btm: {
        width: '100%',
        height: 50,
        backgroundColor: '#40bcbf',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40
    },
    btmText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'rgb(9,18,40)'
    }




})