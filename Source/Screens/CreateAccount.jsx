import { ScrollView, Image, View, StyleSheet } from 'react-native';
import GlobalStyle from '../Style/Global';

const CreateAccount = () => {
    let logo = 'https://cdn-images-1.medium.com/fit/t/1600/480/1*FpqeaQi8Q1siHs9M2gEMZA.png'
    return (
        <ScrollView contentContainerStyle ={[GlobalStyle.screenBG, { alignItems: 'center', paddingHorizontal: 10 }]}>
            <Image style={{
                width: 200,
                height: 70
            }}
                resizeMode='contain'
                source={{ uri: logo }} />
            
            <View>

            </View>

        </ScrollView>
    )
}

export default CreateAccount;

const styles = StyleSheet.create({
    
})