import {
    View, Text,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    Image
} from 'react-native'
import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import style from '../theme/style'
import theme from '../theme/theme';
import { Colors } from '../theme/color';
import Slides from './Slides';
import themeContext from '../theme/themeContex';

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function IntroItem({item}) {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    
    return (
        <SafeAreaView style={{ width: width }}>
            <View style={{ flexDirection: 'row',
             alignItems: 'center', paddingTop: 20,
             justifyContent:'space-between' ,
             paddingHorizontal:20
             }}>
                <Text style={[style.txt1, { color: Colors.disable }]}>{item.subtitle}</Text>
                <View style={[style.btn3,{height:30,backgroundColor:theme.btn}]}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                    <Text style={[style.txt1,{color:theme.txt,}]}>Skip</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ paddingHorizontal: 20,  }}>
                <Text style={[style.title1, { color: theme.txt }]}>{item.title1}</Text>
                <Text style={[style.title1, { color: theme.txt }]}>{item.title2}</Text>
                <Text style={[style.title1, { color: theme.txt }]}>{item.title3}</Text>
            </View>
            <View style={{  alignItems: 'center', flex:1,justifyContent:'center'}}>
                <Image source={item.bg} style={{
                    height: height /3,
                    width: width,
                    resizeMode:'contain'
                }} />
            </View>
            
        </SafeAreaView>
    )
}