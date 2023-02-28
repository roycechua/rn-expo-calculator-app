import CalculatorScreen from '../screens/CalculatorScreen';
import HistoryScreen from '../screens/HistoryScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

export type RootStackParamList = {
    Calculator: undefined;
    History: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const MainStack = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator
                initialRouteName='Calculator'
                screenOptions={{ headerShown: false }}
            >
                <RootStack.Screen
                    name='Calculator'
                    component={CalculatorScreen}
                />
                <RootStack.Screen
                    name='History'
                    component={HistoryScreen}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default MainStack;
