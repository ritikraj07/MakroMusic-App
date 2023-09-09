import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import GlobalStyle from '../Style/Global';
import { AddPhoto, BirthDate, Gender, UserName, Welcome, About, Email, Location } from '../Components';
import {useDispatch, useSelector} from 'react-redux'
import { decprogress } from '../Redux/Reducers/user';


const RegisterAccount = ({ navigation }) => {
    let dispatch = useDispatch()
    const {progress} = useSelector((state) => state.user)
    

    useEffect(() => {
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
            <View
                style={{
                    flexDirection: 'row',
                    width: '100%',
                    // borderWidth: 1,
                    // borderColor: 'red',
                    alignItems: 'center',
                    marginTop: 30,
                    justifyContent:'space-between'
                    
                }}
            >
                <TouchableOpacity
                    onPress={()=>dispatch(decprogress())}
                >
                    <MaterialIcons name="keyboard-backspace" color="white" size={30} />
                </TouchableOpacity>

                <View style={styles.progresBar}>
                    <View style={[styles.bar, { width: `${progress}%` }]} />
                </View>
            </View>
           

            <ReturnUi />

            

            


        </View>
    )
}


export default RegisterAccount;
const styles = StyleSheet.create({

    progresBar: {
        width: '88%',
        height: 12,
        backgroundColor: '#bbbdca',
        borderRadius: 20,
        overflow:'hidden'
    },
    bar: {
        height: '100%',
        backgroundColor: '#00A8B6',
        borderRadius: 20
    }
})