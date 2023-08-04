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

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function UploadSelfie() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <ImageBackground source={theme.selfie}
                style={{ height: height / 1.2, width: width }}
            >
                <View style={[style.main, { backgroundColor: 'transparent' }]}>
                    <AppBar
                        style={{ backgroundColor: 'transparent' }}
                        elevation={0}
                        leading={<TouchableOpacity
                            onPress={() => navigation.navigate('ProofResidency')}
                        >
                            <Icon name="arrow-back"
                                // style={{ marginLeft: 20 }}
                                color={theme.txt}
                                size={30}
                            />
                        </TouchableOpacity>
                        }
                    />
                    <View style={{ paddingTop: 20 }}>
                        <Text style={[style.title, { color: theme.txt }]}>Selfie With ID Card</Text>
                        <Text style={[style.txt1]}>Please look at the camera and hold still</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={{
                flex: 1,
                backgroundColor:theme.bg,
                marginTop: -160,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40
            }}>
                <View style={{ paddingTop: 30, paddingHorizontal: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('ProofResidency')}
                    style={[style.btn,]}>
                        <Text style={style.txt}>Submit Selfie</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ paddingTop: 30, paddingHorizontal: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('ProofResidency')}
                    style={[style.btn,{backgroundColor:theme.btn}]}>
                        <Text style={[style.txt,{color:theme.background}]}>Retake Selfie</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}