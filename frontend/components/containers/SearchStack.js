import { createStackNavigator } from '@react-navigation/stack';
import { FilterScreen } from '../../app/screens/home/FilterScreen';
import { DetailsScreen } from '../../app/screens/home/DetailsScreen';
import SearchScreen from '../../app/screens/search/SearchScreen';

const Stack = createStackNavigator();
function SearchStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Search' component={SearchScreen} options={{headerShown: false}}/>
            <Stack.Screen name='Filter' component={FilterScreen} />
            <Stack.Screen name='Details' component={DetailsScreen} />
        </Stack.Navigator>
    );
}

export default SearchStack;