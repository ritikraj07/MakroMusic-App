import {createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Likes, Explore, Matches, Messages} from '../Screens/index.jsx'

const Tab = createBottomTabNavigator()


const BottomTab = () => {
    return <Tab.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Tab.Screen name="Likes" component={Likes} /> 
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="Matches" component={Matches} />
        <Tab.Screen name="Messages" component={Messages} />
        
    </Tab.Navigator>
}

export default BottomTab