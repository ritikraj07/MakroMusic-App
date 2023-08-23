import { } from 'react'
import { View, Text } from 'react-native'
import { TobBar } from '../Components'
import GlobalStyle from '../Style/Global'
import FindNewMatch from '../Components/FindNewMatch'


const Matches = () => {
    return (
        <View style={GlobalStyle.screenBG} >
            <TobBar />
            <FindNewMatch />
        </View>
    )
}

export default Matches