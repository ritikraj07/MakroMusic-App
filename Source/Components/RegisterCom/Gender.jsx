import React, { useState } from 'react'

import RadioBtm from '../RadioBtm';
import {
    View, Text, StyleSheet,
    SafeAreaView, TouchableOpacity,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setUser, setprogress } from '../../Redux/Reducers/user'
import showToast from '../showToast';
const Gender = () => {
    let dispatch = useDispatch()
    const [GP, setGP] = useState(4)
    const GenderPreference = [
        { id: 1, option: 'Men', status: false },
        { id: 2, option: 'Women', status: false },
        { id: 3, option: 'Non-Binary', status: false },
    ]

    return (
        <SafeAreaView style={styles.container} >

            <View style={styles.box}>
                <Text style={styles.header} >
                   What's your gender?
                </Text>
                <Text style={styles.subtitle} >
                    Choose the option that best describes you, you can chage it 
                    later in your profile.
                </Text>

                <View style={{ margin: 10 }} >
                    {GenderPreference.map((item) => {
                        return <RadioBtm key={item.id} item={item} GP={GP} setGP={setGP} />
                    })}
                </View>

                


            </View>



            <TouchableOpacity style={styles.btm}
                onPress={() => {
                    if (GP == 4) {
                        showToast('Please Select Your Gender', 'short')
                        return
                    }
                    dispatch(setprogress())
                    dispatch(setUser({field:'gender', value:GenderPreference[GP-1].option}))
                }}
            >
                <Text style={styles.btmText}>Continue</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default Gender;

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