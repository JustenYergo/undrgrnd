import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../app/screens/home/HomeScreen';
import { FilterScreen } from '../../app/screens/home/FilterScreen';
import { DetailsScreen } from '../../app/screens/home/DetailsScreen';

const Stack = createStackNavigator();
function HomeStack() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name='Filter' component={FilterScreen} />
            <Stack.Screen name='Details' component={DetailsScreen} />
        </Stack.Navigator>
    );
}

export default HomeStack;