import { } from 'react'
import { View, Text } from 'react-native'
import GlobalStyle from '../Style/Global'
import { TobBar } from '../Components'


const Explore = () => {
    return (
        <View style={GlobalStyle.screenBG} >
            <TobBar/>
            <Text>Explore</Text>
        </View>
    )
}

export default Explore