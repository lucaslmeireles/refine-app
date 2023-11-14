import { View } from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { DetailsScreen } from './src/screens/DetailsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();  
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{title: 'Alunos', 
        headerStyle: {
          backgroundColor: '#026F00'
        },
        headerTintColor: '#fff'
      }
      }/>
        <Stack.Screen name="Details" component={DetailsScreen} options={({ route }) => ({ title: route.params.name, headerStyle: {
          backgroundColor: '#026F00'
        },
        headerTintColor: '#fff' })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

