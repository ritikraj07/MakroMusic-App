import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from "./BottomTab";
import { Signin } from "../Screens";
const Stack = createStackNavigator()

const StackTab = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    initialRouteName: "Explore",
                }}
            >
                <Stack.Screen name="Signin" component={Signin} />
                <Stack.Screen name="BottomTab" component={BottomTab} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackTab