import React, { useState } from 'react'


import {
    View, Text, StyleSheet,
    SafeAreaView, TouchableOpacity,
} from 'react-native'

import { useDispatch, useSelector } from 'react-redux'
import { setprogress } from '../../Redux/Reducers/user'
const BirthDate = () => {
    let dispatch = useDispatch()
    
    return (
        <SafeAreaView style={styles.container} >

            <View style={styles.box}>
                <Text style={styles.header} >
                    When is your birthday?
                </Text>
                <Text style={styles.subtitle} >
                    We will not share your birthday with others.
                </Text>

               


            </View>



            <TouchableOpacity style={styles.btm}
                onPress={() => {
                    dispatch(setprogress())
                }}
            >
                <Text style={styles.btmText}>Continue</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default BirthDate;

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
        marginVertical: 5,
    },

    subtitle: {
        color: '#bbbdca',
        fontSize: 16,
        fontWeight: '500',
        marginVertical: 5,
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