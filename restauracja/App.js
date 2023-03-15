import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen' ;
import { createDrawerNavigator } from '@react-navigation/drawer';
import DummyScreen from './DummyScreen'
const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator(){
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="MealsCategories" 
                    component={CategoriesScreen}
                    options={{
                        title: "Menu"
                    }} />

      <Drawer.Screen name="Dummy" component={DummyScreen}/>
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
              contentStyle: {backgroundColor: "#3f2f5"},
              headerStyle: {backgroundColor:"#991410"},
              headerTintColor: "white"
            }}
        >
            <Stack.Screen name="DrawerScreen" 
                          component={DrawerNavigator}
                          options={{
                            title: "Menu"
                          }} />

            <Stack.Screen name="MealsOverview" 
                          component={MealsOverviewScreen}
                          options={{
                            title: "Podkategoria"
                          }}
                          />
            <Stack.Screen name="MealDetails"
                          component={MealDetailScreen}
                          options={{
                            title: "Detale"
                          }}
                          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
