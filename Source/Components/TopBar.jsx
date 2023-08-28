import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import Feather from "react-native-vector-icons/Feather";
import FA6 from "react-native-vector-icons/FontAwesome6"; //sliders
import { useNavigation } from '@react-navigation/native';

const TobBar = () => {
    let Navigation = useNavigation();
    let logo_uri = 'https://play-lh.googleusercontent.com/l0KJsF608IbB-Q27fKDy3a2-bdpUGjLJkxlAoP1evHvM5B1tivpmhor86gOH4yaluPzw'
    let profile_uri = "https://cdn2.makromusic.com/user_image/n1-e8eca371-c012-4318-9b9b-b9bfdef2c864"
    return <View style={Style.mainView} >
        <Image source={{ uri: logo_uri }} style={Style.image} />
        <View style={Style.search}>
            <Feather name='search' style={Style.icon} color={'#a3a3c2'} />
            <TextInput
                placeholder='Search on makromuisc...'
                placeholderTextColor='#a3a3c2'
                style={{ color: 'white' }}
            />
        </View>
        <FA6 name='sliders' style={Style.icon} color={'white'} /> 
        <Image source={{ uri: profile_uri }} style={Style.image} />
    </View>
}

const Style = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 1,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 50,
        resizeMode: 'center',
        margin:10
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#a3a3c2',
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 3,
        width: '60%',
        height: 40,
        backgroundColor:'#091228'
    },
    icon: {
        margin: 1,
        fontSize:20
        
    }
})


export default TobBar;