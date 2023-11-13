import { View } from 'react-native';
import { Home } from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  
  return (
    <NavigationContainer>
    <View className = 'flex flex-1'>
    <Home/>
    </View>
    </NavigationContainer>
  );
}

