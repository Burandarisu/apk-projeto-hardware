// Imports
import * as React from 'react';
import {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// Screens
import LoadingScreen from './src/screens/Loading';
import DashboardScreen from './src/screens/Dashboard';
import SettingsScreen from './src/screens/Settings';
import TemperatureScreen from './src/screens/Temperature';
import HumidityScreen from './src/screens/Humidity';

// Tabs
const Tab = createBottomTabNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color}) => {
              const size = focused ? 25 : 20;
              switch (route.name) {
                case 'Dashboard':
                  return (
                    <FontAwesome5 name="border-all" size={size} color={color} />
                  );
                  break;
                case 'Temperatura':
                  return (
                    <FontAwesome5
                      name="temperature-low"
                      size={size}
                      color={color}
                    />
                  );
                  break;
                case 'Umidade':
                  return <FontAwesome5 name="tint" size={size} color={color} />;
                  break;
                case 'Configurações':
                  return <FontAwesome5 name="cog" size={size} color={color} />;
                  break;

                default:
                  break;
              }
            },
            tabBarShowLabel: false,
            headerShown: false,
            tabBarActiveTintColor: 'green',
          })}>
          <Tab.Screen name="Dashboard" component={DashboardScreen} />
          <Tab.Screen name="Temperatura" component={TemperatureScreen} />
          <Tab.Screen name="Umidade" component={HumidityScreen} />
          <Tab.Screen name="Configurações" component={SettingsScreen} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}
