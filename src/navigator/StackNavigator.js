import { View, Text, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import IntroItem from '../screens/IntroItem'
import themeContext from '../theme/themeContex'
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EventRegister } from 'react-native-event-listeners';
import Introduction from '../screens/Introduction';
import theme from '../theme/theme';
import Login from '../screens/Login';
import Otp from '../screens/Otp';
import OtpVerify from '../screens/OtpVerify';
import Splash from '../screens/Splash';
import Pin from '../screens/Pin';
import SelectReason from '../screens/SelectReason';
import Verifyid from '../screens/Verifyid';
import UploadSelfie from '../screens/UploadSelfie';
import UploadId from '../screens/UploadId';
import PassRecovery from '../screens/PassRecovery';
import ProofResidency from '../screens/ProofResidency';
import ResetPass from '../screens/ResetPass'
import Signup from '../screens/Signup';
import Home from '../screens/Home';
import Success from '../screens/Success';
import TransferProof from '../screens/TransferProof';
import CardPin from '../screens/CardPin';
import NewCard from '../screens/NewCard';
import Account from '../screens/Account';
import TopUp from '../screens/TopUp';
import Transfer from '../screens/Transfer';
import Transferdetail from '../screens/Transferdetail';
import History from '../screens/History';
import Setting from '../screens/Setting';
import Notification from '../screens/Notification';
import Chat from '../screens/Chat';
import Country from '../screens/Country';
import Statistic from '../screens/Statistic';
import StatisticV2 from '../screens/StatisticV2';
import MyCard from '../screens/MyCard';
import DetailHistory from '../screens/DetailHistory';
import Profile from '../screens/Profile';
import { Colors } from '../theme/color';
// import MyTabs from './BottomNavigator';
 import BottomNavigator from './BottomNavigator';
import MyTabs from './BottomNavigator';
import Fingerprint from '../screens/Fingerprint';


const Stack = createNativeStackNavigator();


export default function StackNavigator() {
    const [darkMode, setDarkMode] = useState(false)
    useEffect(() => {
        const listener = EventRegister.addEventListener('ChangeTheme', (data) => {
            setDarkMode(data)
            console.log(data)

        })

        return () => {
            EventRegister.removeAllListeners(listener)
        }
    }, [darkMode])

    const [showSplashScreen, setshowSplashScreen] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setshowSplashScreen(false);
        }, 4000);


    }, [])
    return (
        <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
            <NavigationContainer theme={darkMode === true ? DarkTheme : DefaultTheme}>
                <StatusBar backgroundColor={darkMode === true ? Colors.active : Colors.secondary}
                    barStyle={darkMode === true ? 'light-content' : 'dark-content'} translucent={false}
                />
                <Stack.Navigator>
                    {
                        showSplashScreen ?
                            <Stack.Screen
                                name="Splash"
                                component={Splash}
                                options={{ headerShown: false }} />
                            : null
                    }
                    <Stack.Screen
                        name="Introduction"
                        component={Introduction}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Otp"
                        component={Otp}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="OtpVerify"
                        component={OtpVerify}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Pin"
                        component={Pin}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="SelectReason"
                        component={SelectReason}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Verifyid"
                        component={Verifyid}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="UploadSelfie"
                        component={UploadSelfie}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="UploadId"
                        component={UploadId}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="PassRecovery"
                        component={PassRecovery}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="ProofResidency"
                        component={ProofResidency}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="ResetPass"
                        component={ResetPass}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Signup"
                        component={Signup}
                        options={{ headerShown: false }} />
                    {/* <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ headerShown: false }} /> */}
                    <Stack.Screen
                        name="Success"
                        component={Success}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="TransferProof"
                        component={TransferProof}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="CardPin"
                        component={CardPin}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="NewCard"
                        component={NewCard}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Account"
                        component={Account}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="TopUp"
                        component={TopUp}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Transfer"
                        component={Transfer}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Transferdetail"
                        component={Transferdetail}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="History"
                        component={History}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Setting"
                        component={Setting}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Notification"
                        component={Notification}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Chat"
                        component={Chat}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Country"
                        component={Country}
                        options={{ headerShown: false }} />
                    {/* <Stack.Screen
                        name="Statistic"
                        component={Statistic}
                        options={{ headerShown: false }} /> */}
                    <Stack.Screen
                        name="StatisticV2"
                        component={StatisticV2}
                        options={{ headerShown: false }} />
                    {/* <Stack.Screen
                        name="MyCard"
                        component={MyCard}
                        options={{ headerShown: false }} /> */}
                    <Stack.Screen
                        name="DetailHistory"
                        component={DetailHistory}
                        options={{ headerShown: false }} />
                    {/* <Stack.Screen
                        name="Profile"
                        component={Profile}
                        options={{ headerShown: false }} /> */}
                    <Stack.Screen
                        name="MyTabs"
                        component={MyTabs}
                        options={{ headerShown: false }} />
                        <Stack.Screen
                        name="BottomNavigator"
                        component={BottomNavigator}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Fingerprint"
                        component={Fingerprint}
                        options={{ headerShown: false }} />


                </Stack.Navigator>
            </NavigationContainer>
        </themeContext.Provider>
    )
}