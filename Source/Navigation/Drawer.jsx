import { createDrawerNavigator } from '@react-navigation/drawer';
import { Filter } from '../Components';


const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Filter" component={Filter} />
        </Drawer.Navigator>
    );
}

export default MyDrawer;