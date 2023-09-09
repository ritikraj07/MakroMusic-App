import React, { useState } from 'react'

import DatePicker from 'react-native-date-picker'
import {
    View, Text, StyleSheet,
    SafeAreaView, TouchableOpacity, Button
} from 'react-native'

import { useDispatch, useSelector } from 'react-redux'
import { setUser, setprogress } from '../../Redux/Reducers/user'
import showToast from '../showToast'
const BirthDate = () => {
    let dispatch = useDispatch()
    
    const [open, setOpen] = useState(false)
    const [dob, setdob] = useState({
        day: '',
        month: '',
        year:''
    })

    
    function GetDate(timestamp) {
        const today = new Date()
        if (today < timestamp) {
            // console.log("=====invalid")
            showToast('!invalid date', 'short')
            return
        }
        const dateObject = new Date(timestamp);

        const year = dateObject.getFullYear();
        const month = (dateObject.getMonth() + 1).toString().padStart(2, '0'); // Add leading zero if needed
        const day = dateObject.getDate().toString().padStart(2, '0'); // Add leading zero if needed

        setdob({... dob, day, month, year })
        // console.log(`Year: ${year}`);
        // console.log(`Month: ${month}`);
        // console.log(`Day: ${day}`);
        // console.log(dob)
    }

    function DateView({text}) {
        return (<View
            style={{
                margin: 10,
                backgroundColor: 'rgb(9,18,40)',
                padding: 5,
                paddingHorizontal: 5,
                borderRadius:5
            }}
        >
            <Text style={{fontSize:20, color:'white'}} >{text}</Text>
        </View>)
    }
    
    return (
        <SafeAreaView style={styles.container} >

            <View style={styles.box}>
                <Text style={styles.header} >
                    When is your birthday?
                </Text>
                <Text style={styles.subtitle} >
                    We will not share your birthday with others.
                </Text>

                
                <TouchableOpacity
                    style={{
                        backgroundColor: '#40bcbf', borderRadius: 5, flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center' }}
                    onPress={() => setOpen(true)}
                >
                    {!dob.day && <Text style={{ textAlign: 'center', fontSize: 20, color: 'white', paddingVertical: 10 }} >Select Your Date of Birth</Text>}
                    {dob.day &&  <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent:'center'
                        }}
                    >
                        <DateView text={dob.day} />
                        <DateView text={dob.month} />
                        <DateView text={dob.year} />
                    </View>}
                </TouchableOpacity>
                <DatePicker
                    modal
                    open={open}
                    date={new Date()}
                    mode='date'
                    onConfirm={(date) => {
                        setOpen(false)
                        GetDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                    textColor='#40bcbf'
                    theme='dark'
                />



            </View>



            <TouchableOpacity style={styles.btm}
                onPress={() => {
                    if (!dob.day) {
                        showToast('Please enter you birthday')
                        return
                    }
                    dispatch(setprogress())
                    dispatch(setUser({field:'dob', value:dob}))
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