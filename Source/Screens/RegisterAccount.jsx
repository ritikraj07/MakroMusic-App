import { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import GlobalStyle from '../Style/Global';
import { AddPhoto, BirthDate, Gender, UserName, Welcome, About, Email, Location } from '../Components';
import {useDispatch, useSelector} from 'react-redux'

const RegisterAccount = ({navigation}) => {
    
    const { progress } = useSelector((state) => state.user)
    useEffect(() => {
        // console.log(progress)
        if (progress >= 100) {
            navigation.navigate("BottomTab")
    }
    },[progress])
    function ReturnUi() {
        if (progress <= 12.5) {
            return <Welcome />
        } else if (progress <= 25) {
            return <UserName />
        } else if (progress <= 37.5) {
            return <AddPhoto />
        } else if (progress <= 50) {
            return <BirthDate />
        } else if (progress <= 62.5) {
            return <Gender />
        } else if (progress <= 75) {
            return <About />
        } else if (progress <= 87.5) {
            return <Email /> 
        } else if(progress <= 100){
            return <Location />
        }
    }

    return (
        <View style={[GlobalStyle.screenBG, { paddingHorizontal: 10 }]} >
            <View style={styles.progresBar}>
                <View style={[styles.bar, { width: `${progress}%` }]} />
            </View>

            <ReturnUi />


        </View>
    )
}


export default RegisterAccount;
const styles = StyleSheet.create({

    progresBar: {
        width: '100%',
        height: 12,
        backgroundColor: '#bbbdca',
        marginTop: 30,
        borderRadius: 20,
        overflow:'hidden'
    },
    bar: {
        height: '100%',
        backgroundColor: '#00A8B6',
        borderRadius: 20
    }
})