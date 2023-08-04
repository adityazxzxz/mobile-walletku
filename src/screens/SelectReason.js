import {
    View, Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions
} from 'react-native'
import React, { useState, useContext } from 'react'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { Colors } from '../theme/color'
import { useNavigation } from '@react-navigation/native';
import { AppBar, } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons'


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function SelectReason() {
    const navigation=useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={[style.main, { backgroundColor: theme.bg }]}>
                <AppBar
                    style={{ backgroundColor: 'transparent' }}
                    elevation={0}
                    leading={<TouchableOpacity
                    onPress={() => navigation.navigate('Country')}
                    >
                        <Icon name="arrow-back"
                            // style={{ marginLeft: 20 }}
                            color={theme.txt}
                            size={30}
                        />
                    </TouchableOpacity>
                    }
                />
                <View style={{ paddingTop: 30 }}>
                    <Text style={[style.title, { color: theme.txt }]}>Main reason for using FinPay</Text>
                    <Text style={[style.txt1]}>We need to know this regulatory reasons. And also, we’re curious!</Text>
                </View>
                <View style={{ paddingTop: 20 ,}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Verifyid')}
                    style={[style.inputContainer, { flexDirection: 'row', justifyContent: 'space-between',backgroundColor:theme.btn }]}>
                        <Text style={[style.txt, { color: theme.txt }]}>Spend or save daily</Text>
                        <Icon name='chevron-forward' color={Colors.disable} size={25} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={[style.inputContainer, { flexDirection: 'row', justifyContent: 'space-between',backgroundColor:theme.btn }]}>
                    <Text style={[style.txt, { color: theme.txt }]}>Spend while travelling</Text>
                    <Icon name='chevron-forward' color={Colors.disable} size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={[style.inputContainer, { flexDirection: 'row', justifyContent: 'space-between' ,backgroundColor:theme.btn}]}>
                    <Text style={[style.txt, { color: theme.txt }]}>Spend money</Text>
                    <Icon name='chevron-forward' color={Colors.disable} size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={[style.inputContainer, { flexDirection: 'row', justifyContent: 'space-between' ,backgroundColor:theme.btn}]}>
                    <Text style={[style.txt, { color: theme.txt }]}>Gain exposure to financial assets</Text>
                    <Icon name='chevron-forward' color={Colors.disable} size={25} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}