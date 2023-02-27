import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

type RootStackParamList = {
    Main: undefined;
    History: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const MainStack = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator
                initialRouteName='Home'
                screenOptions={{ headerShown: false }}
            >
                <RootStack.Screen name='Home' component={HomeScreen} />
                <RootStack.Screen
                    name='History'
                    component={HistoryScreen}
                    // initialParams={{ userId: user.id }}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default MainStack;
