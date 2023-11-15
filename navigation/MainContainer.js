import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import LibrariesScreen from './screens/LibrariesScreen';
import CreateScreen from './screens/CreateScreen';
import SearchScreen from './screens/SearchScreen'

// Screen Names
const homeName = "Home";
const libraryName = "Your Libraries"
const createName = "Create"
const profileName = "Profile";
const searchName = "Search"

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({ route }) => ({
              tabBarActiveTintColor: '#52D681',
              tabBarInactiveTintColor: 'grey',
              tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
              tabBarStyle: [{ display: 'flex', height: 60 }, null],
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                switch (route.name) {
                  case homeName:
                    iconName = focused ? 'home' : 'home-outline';
                    break;
                  case profileName:
                    iconName = focused ? 'person' : 'person-outline';
                    break;
                  case createName:
                    iconName = focused ? 'create' : 'create-outline';
                    break;
                  case libraryName:
                    iconName = focused ? 'library' : 'library-outline';
                    break;
                  case searchName:
                    iconName = focused ? 'search' : 'search-outline';
                    break;
                  default:
                    iconName = 'home-outline';
                }
    
                return <Ionicons name={iconName} size={size} color={color} style={{paddingTop: 10}}/>;
              },
            })}>

            <Tab.Screen name={homeName} component={HomeScreen} />
            <Tab.Screen name={libraryName} component={LibrariesScreen} />
            <Tab.Screen name={createName} component={CreateScreen} />
            <Tab.Screen name={searchName} component={SearchScreen} />
            <Tab.Screen name={profileName} component={ProfileScreen} />

            

                
                
            </Tab.Navigator>
        </NavigationContainer>
    );
}