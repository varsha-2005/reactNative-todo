import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllTasks from './pages/AllTasks';
import RecentlyAdded from './pages/RecentlyAdded';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddTask from './pages/AddTask';
import editTask from './pages/editTask';
import Context from './Context/Context1';





const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();


export default function App() {
  function BottomTabs(){
    return(
      <Tab.Navigator>       
        <Tab.Screen name="AllTasks" component={AllTasks}  />
        <Tab.Screen name="RecentlyAdded" component={RecentlyAdded} />
        <Tab.Screen name="AddTask" component={AddTask}/>
      </Tab.Navigator>
    )
  }
  

  return (
      <Context>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='bottomNav' component={BottomTabs} options={{headerShown:false}}/>
            <Stack.Screen name='editTask' component={editTask}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Context>
  );
}

