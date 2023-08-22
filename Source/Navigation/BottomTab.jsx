import {createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Likes, Explore, Matches, Messages} from '../Screens/index.jsx'
import { View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from "react-native-vector-icons/AntDesign";
import MCI from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator()


const BottomTab = () => {
    return <Tab.Navigator
        screenOptions={{
            initialRouteName: "Explore",
            headerShown: false,
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
            tabBarActiveTintColor: '#00A8B6',
           
            tabBarStyle: {
                padding:0,    
                // height: 100,
                // elevation: 70,
                backgroundColor: 'rgb(9, 18, 40)',
                borderTopWidth: 0,
                borderTopColor: "transparent",

                elevation: 0,
                shadowColor: '#5bc4ff',
                shadowOpacity: 0,
                shadowOffset: {
                    height: 0,
                },
                shadowRadius: 0,
                
            },
        //     tabBarBackground: () => (
        //   <LinearGradient
        //             colors={[
        //                 `transparent`,        // Fully transparent color
        //                 `rgba(9,18,40,0.9)`,  // Bottom color with higher opacity
        //                 `rgba(9,18,40,1)`,  // Top color with reduced opacity
        //             ]}
        //             style={{ flex: 1 }}
        //             useAngle={true}
        //             angle={180}
        //   />
        // ),
            
            
        
        }}
        
    >
        <Tab.Screen name="Likes" component={Likes} 
            options={{
                tabBarIcon: ({ focused, size, color }) => (
                    <>
                        {focused ? (
                            <AntDesign name="heart" size={30} color={color} />
                        ) : (
                            <AntDesign name="hearto" size={30} color={color} />
                        )}
                        <Text style={{color,}} >Likes</Text>
                        
                    </>
                )
            }}
        /> 
        <Tab.Screen name="Explore" component={Explore}
            options={{
                tabBarIcon: ({ focused, size, color }) => (
                    <>
                        {focused ? (
                            <MCI name="compass" size={30} color={color} />
                        ) : (
                            <MCI name="compass-outline" size={30} color={color} />
                        )}
                        <Text style={{ color, }} >Explore</Text>
                    </>
                )
            }}
        />
        <Tab.Screen name="Matches" component={Matches}
        
            options={{
                tabBarIcon: ({ focused, size, color }) => (
                    <>
                        {focused ? (
                            <MCI name="cards-playing-heart-multiple" size={30} color={color} />
                        ) : (
                            <MCI name="cards-playing-heart-multiple-outline" size={30} color={color} />
                        )}
                        <Text style={{ color, }} >Matches</Text>
                    </>
                )
            }}
        />
        <Tab.Screen name="Messages" component={Messages}
        
            options={{
                tabBarIcon: ({ focused, size, color }) => (
                    <>
                        {focused ? (
                            <Ionicons name="chatbubbles" size={30} color={color} />
                        ) : (
                            <Ionicons name="chatbubbles-outline" size={30} color={color} />
                        )}
                        <Text style={{ color, }} >Messages</Text>
                    </>
                )
            }}
        />
        
    </Tab.Navigator>
}

export default BottomTab