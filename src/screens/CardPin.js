import {
    View, Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions,
    ImageBackground
} from 'react-native'
import React, { useState, useContext } from 'react'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { Colors } from '../theme/color'
import { useNavigation } from '@react-navigation/native';
import { AppBar, } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons'
import OtpInputs from 'react-native-otp-inputs'
import Clipboard from '@react-native-clipboard/clipboard'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function CardPin() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
        <View style={[style.main,]}>
            <AppBar
                title='Create Pin'
                titleStyle={[style.title, { color: theme.txt }]}
                centerTitle={true}
                style={{ backgroundColor: 'transparent' }}
                elevation={0}
                leading={<TouchableOpacity
                onPress={() => navigation.navigate('NewCard')}
                >
                    <Icon name="arrow-back"
                        color={theme.txt}
                        size={30}
                    />
                </TouchableOpacity>
                }
            />
            {/* <View style={{paddingTop:20}}></View> */}
            <ScrollView showsVerticalScrollIndicator={false}>
            <Image source={theme.pin} 
            style={{width:width/1.5,resizeMode:'stretch',alignSelf:'center'}}
            />

            <View style={{paddingTop:20}}>
                <Text style={[style.txt1,{textAlign:'center'}]}>Add a pin number to make your card more secure</Text>
            </View>
            <View style={{ paddingTop: 20 }}>
                    <OtpInputs
                        Clipboard={Clipboard}
                        numberOfInputs={4}
                        selectionColor={theme.txt}
                        style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}
                        inputStyles={{

                            borderColor: theme.btn,
                            backgroundColor: theme.btn,
                            borderRadius: 10,
                            textAlign: 'center',
                            height: 50,
                            width: 50,
                            fontSize: 22,
                            borderWidth: 1,
                            color: theme.txt,
                            fontWeight: '600',
                            fontFamily: 'Itim-Regular',
                        }}
                    />
                </View>
                <View style={{justifyContent:'flex-end',paddingVertical:20,}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}
                    style={[style.btn]}>
                        <Text style={[style.txt]}>Save Pin</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}