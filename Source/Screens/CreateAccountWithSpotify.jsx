import { View, Text,Dimensions, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { authorize } from 'react-native-app-auth';
import GlobalStyle, { color } from '../Style/Global';
import { SlidingCom } from '../Components';

const { width, height } = Dimensions.get('window')

const CreateAccountWithSpotify = () => {


    async function login() {
    const config = {
        issuer: 'https://accounts.spotify.com',
        clientId: '56f171692ab84aceba329f5457f7dbef',
        redirectUrl: 'com.makromusic.MakroMusic:/callback',
        scopes: ['user-library-read', 'user-library-modify'],
    };

    try {
        const result = await authorize(config);
        console.log(result);

        // Now, you can continue with your code after a successful authorization.
        // const accessToken = result.accessToken;
        // const response = await fetch('https://api.spotify.com/v1/me/playlists', {
        //     headers: {
        //         Authorization: `Bearer ${accessToken}`,
        //     },
        // });
        // const data = await response.json();
        // console.log(data);
    } catch (error) {
        // Handle the error gracefully here
        console.error('Authorization error:', error);
    }
}


    let logo = 'https://cdn-images-1.medium.com/fit/t/1600/480/1*FpqeaQi8Q1siHs9M2gEMZA.png'

    return (
        <View style={[GlobalStyle.screenBG, {paddingHorizontal:15, alignItems:'stretch', justifyContent:"space-between"}]}>
            <Image style={styles.img} source={{ uri: logo }} />
            <SlidingCom />

            <View>
            <View style={{marginVertical:10}} >
                <Text style={{color:'white', fontWeight:'bold'}} >
                    By Continuing with Spotify or Apple, you agree to our Terms.
                </Text>
                <Text style={{color:'white', fontWeight:'bold', textAlign:'center'}}>
                    You can review our Privacy Policy to understand how we process your data.
                </Text>
            </View>

                <TouchableOpacity
                    onPress={login}
                style={{
                    borderWidth: 1,
                    borderColor: color['french-greay'],
                    alignItems: 'center',
                    flexDirection: 'row',
                    borderRadius: 30,
                        padding: 10,
                        marginVertical: 10
                    
                }}
            >
                <Image style={{ width: 35, height: 35, position:'absolute', left:5 }} source={{ uri: 'https://o.remove.bg/downloads/6cfce020-1c5b-4987-8a7e-8f7daf182623/zrarqnhmkoaihvzss5ek-removebg-preview.png' }} />
                <Text style={{flex:1, fontWeight:'bold', textAlign:'center', fontSize:18, color:'white'}}>Continue with Spotify</Text>
                </TouchableOpacity>
                <Text style={{textAlign:'center', color:'white', marginBottom:10}} >Are you having trouble logging in?</Text>
            </View>
        </View>
    )

}

export default CreateAccountWithSpotify;



const styles = StyleSheet.create({
    img: {
        width: 250,
        height: 60,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop:-20
    },


})
