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

export default function Verifyid() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={[style.main, { backgroundColor: theme.bg }]}>
                <AppBar
                    style={{ backgroundColor: 'transparent' }}
                    elevation={0}
                    leading={<TouchableOpacity
                    onPress={() => navigation.navigate('SelectReason')}
                    >
                        <Icon name="arrow-back"
                            color={theme.txt}
                            size={30}
                        />
                    </TouchableOpacity>
                    }
                />
                <Image source={theme.verify} style={{ height: height / 4, resizeMode: 'stretch', width: width/2,alignSelf:'center' }} />
                <View style={{ paddingTop: 20, alignItems: 'center' }}>
                    <Text style={[style.title, { color: theme.txt, textAlign: 'center' }]}>First, let’s verify your identity</Text>
                </View>
                <View>
                    <Text style={[style.txt1, { textAlign: 'center' }]}>We’re required by law to verify your identity before you can spend with your card or send money. Your information will be encrypted and stored securely.</Text>
                </View>
                <View style={{ justifyContent:'flex-end',flex:1,marginBottom:20}}>
                    <TouchableOpacity style={[style.btn]}
                    onPress={()=>navigation.navigate('ProofResidency')}
                    >
                        <Text style={[style.txt]}>Verify Identity</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}