import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import MCI from "react-native-vector-icons/MaterialCommunityIcons";

const TobBarMes = (status = false) => {
    let logo_uri = 'https://play-lh.googleusercontent.com/l0KJsF608IbB-Q27fKDy3a2-bdpUGjLJkxlAoP1evHvM5B1tivpmhor86gOH4yaluPzw'
    let profile_uri = "https://cdn2.makromusic.com/user_image/n1-e8eca371-c012-4318-9b9b-b9bfdef2c864"
    return <View style={Style.mainView} >
        <Image source={{ uri: logo_uri }} style={Style.image} />
        <View style={{flexDirection:'row', alignItems:'center'}} >
            <MCI name="account-plus-outline" size={35} color={'white'} style={{margin:10}} />
            <Image source={{ uri: profile_uri }} style={Style.image} />

        </View>

    </View>
}

const Style = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 1
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 50,
        resizeMode: 'center',
        margin: 10
    },
    icon: {
        margin: 1,
        fontSize: 20

    }
})


export default TobBarMes;