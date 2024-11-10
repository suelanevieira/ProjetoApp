import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import logo from "../../assets/logo.png";
import { Image } from "react-native";
import home from "../../assets/home.png"
import calendar from "../../assets/calendar.png"
import person from "../../assets/person.png";

import AbaHome from "../abahome/abahome.jsx";
import AbaCalendar from "../abacalendar/abacalendar.jsx";
import AbaProfile from "../abaprofile/abaprofile.jsx";



 
 const Tab = createBottomTabNavigator();


function Main() {

    return <NavigationContainer>
    <Tab.Navigator>
         <Tab.Screen name="Home" component={AbaHome} options={{
          headerTitleAlign: "center",
          headerTitle: () => {
           return <Image source={logo} style={
            {width: 70, height: 60 }
           }/>
          },
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) =>{
            return <Image source={home} style={
              {
                width: 25,
                height: 25,
                opacity: focused ? 1 : 0.3 
              }
             }/>
          }
         }}/>
         <Tab.Screen name="Calendar" component={AbaCalendar} options={{
           headerTitleAlign: "center",
           headerTitle: () => {
            return <Image source={logo} style={
             {width: 70, height: 60 }
            }/>
           },
           tabBarShowLabel: false,
           tabBarIcon: ({focused}) =>{
             return <Image source={calendar} style={
               {
                width: 25,
                height: 25,
                opacity: focused ? 1 : 0.3 
               }
              }/>
           }
         }}/>
        <Tab.Screen name="AbaProfile" component={AbaProfile} options={{
          headerTitleAlign: "center",
          headerTitle: () => {
           return <Image source={logo} style={
            {width: 70, height: 60 }
           }/>
          },
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) =>{
            return <Image source={person} style={
              {
                width: 25,
                height: 25,
                opacity: focused ? 1 : 0.3 
                
              }
             }/>
          }
        }}/>
         </Tab.Navigator>
   </NavigationContainer>
}


export default Main;