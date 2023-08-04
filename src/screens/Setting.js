import {
    View, Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions,
    TextInput,
    Switch
} from 'react-native'
import React, { useState, useContext } from 'react'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { Colors } from '../theme/color'
import { useNavigation } from '@react-navigation/native';
import { AppBar, } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Iconss from 'react-native-vector-icons/FontAwesome5Pro'
import { EventRegister } from 'react-native-event-listeners'


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Setting() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const [isEnabled, setIsEnabled] = useState(true);
    const [darkMode, setDarkMode] = useState('false')
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={[style.main, { backgroundColor: theme.bg }]}>
                <AppBar
                    style={{ backgroundColor: 'transparent' }}
                    elevation={0}
                    leading={<TouchableOpacity
                    onPress={() => navigation.navigate('Profile')}
                    >
                        <Icon name="arrow-back"
                            color={theme.txt}
                            size={30}
                        />
                    </TouchableOpacity>
                    }
                />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ paddingTop: 20 }}>
                        <Text style={[style.title1, { color: theme.txt }]}>Settings</Text>
                    </View>
                    <View style={{ paddingTop: 20 }}>
                        <Text style={[style.txt1]}>General</Text>
                    </View>
                    
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginVertical: 10
                    }}>
                        <Text style={[style.txt1, { color: theme.txt, }]}>Reset Password</Text>
                        <Icons name='chevron-right' color={Colors.disable} size={30} />
                    </TouchableOpacity>
                    <View style={{ backgroundColor: Colors.disable, height: 1, }}></View>
                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginVertical: 10
                    }}>
                        <Text style={[style.txt1, { color: theme.txt, }]}>Notifications</Text>
                        <Icons name='chevron-right' color={Colors.disable} size={30} />
                    </TouchableOpacity>
                    <View style={{ backgroundColor: Colors.disable, height: 1, }}></View>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginVertical: 10
                    }}>
                        <Text style={[style.txt1, { color: theme.txt, }]}>Privacy Settings</Text>
                        <Icons name='chevron-right' color={Colors.disable} size={30} />
                    </TouchableOpacity>
                    <View style={{ backgroundColor: Colors.disable, height: 1, }}></View>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat')}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginVertical: 10
                    }}>
                        <Text style={[style.txt1, { color: theme.txt, }]}>Help Center</Text>
                        <Icons name='chevron-right' color={Colors.disable} size={30} />
                    </TouchableOpacity>
                    <View style={{ backgroundColor: Colors.disable, height: 1, }}></View>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginVertical: 10
                    }}>
                        <Text style={[style.txt1, { color: theme.txt, }]}>Contact Us</Text>
                        <Icons name='chevron-right' color={Colors.disable} size={30} />
                    </TouchableOpacity>
                    <Text style={[style.txt1]}>Follow Us</Text>
                    <View style={{ paddingTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{
                            height: height / 13,
                            width: width / 4.5 - 20,
                            backgroundColor: theme.btn,
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Iconss name='twitter' size={30} color={theme.his} style={{ alignItems: 'center' }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            height: height / 13,
                            width: width / 4.5 - 20,
                            backgroundColor: theme.btn,
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Iconss name='facebook' size={30} color={theme.his} style={{ alignItems: 'center' }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            height: height / 13,
                            width: width / 4.5 - 20,
                            backgroundColor: theme.btn,
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Iconss name='tiktok' size={30} color={theme.his} style={{ alignItems: 'center' }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            height: height / 13,
                            width: width / 4.5 - 20,
                            backgroundColor: theme.btn,
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Iconss name='instagram' size={30} color={theme.his} style={{ alignItems: 'center' }} />
                        </TouchableOpacity>
                    </View>
                    {/* <TouchableOpacity onPress={() => navigation.navigate('Login')}
                    style={{ paddingTop: 20, alignItems: 'center' }}>
                        <Text style={[style.txt, { color: '#FB4E4E' }]}>Log Out</Text>
                    </TouchableOpacity> */}
                    <View style={{ paddingTop: 20, alignItems: 'center' }}>
                        <Text style={[style.txt1]}>Finpay © 2021 v1.0</Text>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}