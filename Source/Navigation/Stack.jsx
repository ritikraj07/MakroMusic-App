import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from "./BottomTab";
const Stack = createStackNavigator()

const StackTab = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                headerShown:false
            }}
            >
                <Stack.Screen name="BottomTab" component={BottomTab} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackTab