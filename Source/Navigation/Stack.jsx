import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from "./BottomTab";
import { Explore, Likes, Matches, Messages, Signin } from "../Screens";
import { SignInWithEmailPassword, SignInWithGoogle, SignInWithPhoneNumber } from "../Components";
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
                <Stack.Screen name="SignInWithGoogle" component={SignInWithGoogle} />
                <Stack.Screen name="SignInWithPhoneNumber" component={SignInWithPhoneNumber} />
                <Stack.Screen name="SignInWithEmailPassword" component={SignInWithEmailPassword} />
                <Stack.Screen name="BottomTab" component={BottomTab} />
                {/* <Stack.Screen name="Explore" component={Explore} />
                <Stack.Screen name="Likes" component={Likes} />
                <Stack.Screen name="Matches" component={Matches} />
                <Stack.Screen name="Messages" component={Messages} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackTab