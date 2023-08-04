import React,{useContext,useState} from 'react';
import {StyleSheet,Text,TouchableOpacity,View,Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Ionicons from "react-native-vector-icons/Ionicons"
import Profile from '../screens/Profile';
import { Colors } from '../theme/color';
import MyCard from '../screens/MyCard';
import Statistic from '../screens/Statistic';
import themeContext from '../theme/themeContex';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Transfer from '../screens/Transfer';
import style from '../theme/style';
import UploadId from '../screens/UploadId';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children,onPress}) => (
      <TouchableOpacity
       style={{
        top: -30,
        justifyContent:'center',
        alignItems:'center',
        // ...Styles.shadow,
       }}
       onPress={onPress}
      >
        <View style={{
          width:70,
          height:70,
          borderRadius:35,
          backgroundColor:Colors.primary,
          ...Styles.shadow,
        }}>
          {children}
        </View>
      </TouchableOpacity>
);

export default function MyTabs() {

  const theme = useContext(themeContext);
  const [darkMode,setDarkMode] = useState('false')

  return (
    
    <Tab.Navigator
    

    screenOptions={{
      
      tabBarStyle: { position: 'absolute',height:70, backgroundColor:theme.back },
      tabBarLabelStyle: {
        fontSize: 15,
      },
      tabBarShowLabel:false,
      // style:{...Styles.shadow}
    }}
  //   screenOptions={() => ({tabBarShowLabel:false})
  // }
  
    >

{/* <Tab.Screen name="First">
          {() => (
            <SettingsStack.Navigator>
              <SettingsStack.Screen
                name="Home"
                component={Home}
              />
              <SettingsStack.Screen name="Profile" component={ProfileScreen} />
            </SettingsStack.Navigator>
          )}
          </Tab.Screen> */}




    
    <Tab.Screen name="Home" component={Home} 
    options={{
      // // tabBarShowLabel:true,
      // tabBarLabel: ({focused, color,}) => (
      //   <Text style={{color: focused ? Colors.primary : Colors.disable,fontFamily:'Itim-Regular'}}>Home</Text>
      // ),
      tabBarIcon:({focused,color}) => {
        return <View><Ionicons name="home-outline" size={25} 
        color={focused ? Colors.primary : Colors.disable} 
        style={{alignSelf:'center'}} />
        <Text style={{color:focused ? Colors.primary: Colors.disable}}>Home</Text>
        </View>
      },
      headerShown:false,
      
    }}
    />

    <Tab.Screen name="Statistic" component={Statistic}
     options={{
      // // tabBarShowLabel:true,
      // tabBarLabel: ({focused, color,}) => (
      //   <Text style={{color: focused ? Colors.primary : Colors.disable,fontFamily:'Itim-Regular'}}>Statistic</Text>
      // ),
      tabBarIcon:({focused,color}) => {
        return <View><Ionicons name="md-stats-chart" size={25}
        color={focused ? Colors.primary : Colors.disable}
        style={{alignSelf:'center'}} />
        <Text style={{color:focused ? Colors.primary: Colors.disable}}>Statistics</Text>
        </View>
      },
      headerShown:false,
    }} /> 

  <Tab.Screen name="UploadId" component={UploadId}
     options={{
    //   tabBarShowLabel:true,
    //   tabBarLabel: ({focused, color,}) => (
    //     <Text style={{color: focused ? Colors.primary : Colors.disable,fontFamily:'Itim-Regular'}}>Transfer</Text>
    //   ),
      tabBarIcon:({focused,color}) => {
       return <Image
        source={require('../../assets/image/scanner.png')}
        resizeMode='contain'
        style={{width:30,height:30,tintColor:'#fff'}}
       />
      },
    //   headerShown:false,/
    tabBarButton: (props) =>(
      <CustomTabBarButton {...props}/>
    ),
    headerShown:false, 
    tabBarStyle:{display:'none'},
    }}
    /> 
  
    <Tab.Screen name="MyCard" component={MyCard}
     options={{
      // tabBarShowLabel:true,
      // tabBarLabel: ({focused, color,}) => (
      //   <Text style={{color: focused ? Colors.primary : Colors.disable,fontFamily:'Itim-Regular'}}>MyCard</Text>
      // ),
      tabBarIcon:({focused,color}) => {
        return <View><Ionicons name="md-card" size={25}
        color={ focused ? Colors.primary : Colors.disable}
        style={{alignSelf:'center'}} />
        <Text style={{color:focused ? Colors.primary: Colors.disable}}>Cards</Text>
        </View>
      },
      headerShown:false,
    }} />

<Tab.Screen name="Profile" component={Profile}
    options={{
      // tabBarShowLabel:true,
      // tabBarLabel: ({focused, color,}) => (
      //   <Text style={{color: focused ? Colors.primary : Colors.disable,fontFamily:'Itim-Regular'}}>Profile</Text>
      // ),
      tabBarIcon:({focused,color}) => {
        return <View><Ionicons name="person-outline" size={25}
        color={focused ? Colors.primary: Colors.disable} 
        style={{alignSelf:'center'}}/>
        <Text style={{color:focused ? Colors.primary: Colors.disable}}>Profile</Text>
          </View>
      },
      headerShown:false,
    }} />
  

  </Tab.Navigator>
  );
}


const Styles = StyleSheet.create({
  shadow:{
    shadowColor:Colors.primary,
    shadowOffset:{
      width:0,
      height:10,
    },
    shadowOpacity:0.25,
    shadowRadius:3.5,
    elevation:7
  },

 

})

