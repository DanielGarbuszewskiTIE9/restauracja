import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{contentStyle:{backgroundColor:'#E3E3E3'},
        headerStyle:{backgroundColor:'#ABABAB'}}}>
          <Stack.Screen name='MealsCategories' 
          component={CategoriesScreen}
          options={{title:'Wybierz Kategorię'}}/>

          <Stack.Screen name='MealsOverviewScreen' 
          component={MealsOverviewScreen}
          options={{title:'Dostępne dania'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
});
