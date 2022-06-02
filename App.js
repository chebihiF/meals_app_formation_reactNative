import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator} from '@react-navigation/drawer'
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealsDetailScreen from './screens/MealsDetailScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

DrawerNavigatorBuilder = () => {
  return( 
  <Drawer.Navigator 
  screenOptions={{
    headerStyle: {backgroundColor:'#351401'},
    headerTintColor: 'white',
    sceneContainerStyle: {backgroundColor: '#3f2f25' },
    drawerContentStyle: {backgroundColor: '#351401'},
    drawerInactiveTintColor: 'white',
    drawerActiveTintColor: '#351401',
    drawerActiveBackgroundColor: '#3f2f25'
}}>
    <Drawer.Screen 
      name='Caregories' 
      component={CategoriesScreen}
      options= {{
        title: 'Categories',
        drawerIcon: ({color,size})=>( <MaterialIcons name="category" color={color} size={size} />)
      }}
      />
    <Drawer.Screen name='Favorite' component={FavoriteScreen}
    options= {{
      drawerIcon:  ({color,size})=>( <Ionicons name="star" color={color} size={size} />)
    }}
    />
  </Drawer.Navigator>);
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='MealsCategories' screenOptions={{
              headerStyle: {backgroundColor:'#351401'},
              headerTintColor: 'white',
              contentStyle: {backgroundColor: '#351401' }
          }}>
            <Stack.Screen 
              name='Drawer' 
              component={DrawerNavigatorBuilder}
              options={{
                //title:' All Categories',
                headerShown: false
              }}
              />
            <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} 
              //options={({route, navigation})=>{
                //const catId = route.params.categoryId
                //return {
                  //title : catId 
                //};
              //}}
            />
            <Stack.Screen name='MealDetails' component={MealsDetailScreen} 
            /*options={{
              headerRight: () => {
                return <Button title='Favorite' onPress={()=>{
                  console.log("favorite");
                }} />
              }
            }} */
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
});
