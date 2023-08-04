import {
    View, Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions,
} from 'react-native'
import React, { useState, useContext } from 'react'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { Colors } from '../theme/color'
import { useNavigation } from '@react-navigation/native';
import { AppBar, } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons'
import { Avatar } from 'react-native-paper'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Success() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={{ marginTop: 90, alignItems: 'center' }}>
                <Image source={require('../../assets/image/True.png')}
                    style={{ height: height / 6, width: width/2, resizeMode: 'stretch' }}
                />
                <Text style={[style.logintitle, { color: theme.txt, paddingTop: 20 }]}>Top Up Success</Text>
                <View style={{ paddingTop: 20 }}>
                    <View style={{ paddingHorizontal: 20, paddingVertical: 13, backgroundColor: theme.input, borderRadius: 10 }}>
                        <Text style={[style.txt, { color: theme.txt,fontWeight:'600' }]}>$500.00</Text>
                    </View>
                </View>
                <View style={{ paddingTop: 20 }}>
                    <Text style={[style.txt1, { alignSelf: 'center' }]}>Has been added to your Finpay</Text>
                    <Text style={[style.txt1, { alignSelf: 'center' }]}>Card Balance</Text>
                </View>
            </View>
            <View style={{ paddingHorizontal: 20, justifyContent: 'flex-end', flex: 1, bottom: 15 }}>
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}
                style={[style.btn]}>
                    <Text style={[style.txt]}>Done</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}