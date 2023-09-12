import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from "./BottomTab";
import {
    CreateAccount, CreateAccountWithSpotify, Explore, Likes, Matches, Messages,
    Profile, RegisterAccount, Search, Settings, Signin
} from "../Screens";
import { CreateAccWithEmailPassword, Filter, SignInWithEmailPassword, SignInWithGoogle, SignInWithPhoneNumber } from "../Components";
import MyDrawer from "./Drawer";
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
                <Stack.Screen name="RegisterAccount" component={RegisterAccount} />
                <Stack.Screen name="CreateAccountWithSpotify" component={CreateAccountWithSpotify} />
                <Stack.Screen name="BottomTab" component={BottomTab} />
                <Stack.Screen name="Signin" component={Signin} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="CreateAccount" component={CreateAccount} />
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen name="CreateAccWithEmailPassword" component={CreateAccWithEmailPassword} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="SignInWithGoogle" component={SignInWithGoogle} />
                <Stack.Screen name="SignInWithPhoneNumber" component={SignInWithPhoneNumber} />
                <Stack.Screen name="SignInWithEmailPassword" component={SignInWithEmailPassword} />
                <Stack.Screen name="Drawer" component={MyDrawer} />
                <Stack.Screen name="Filter" component={Filter} />
                {/* <Stack.Screen name="Explore" component={Explore} />
                <Stack.Screen name="Likes" component={Likes} />
                <Stack.Screen name="Matches" component={Matches} />
                <Stack.Screen name="Messages" component={Messages} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackTab