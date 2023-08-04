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
import { Avatar } from 'react-native-paper'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function UploadId() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[style.area]}>
            <ImageBackground source={theme.upload}
                style={{ width: width, height: height / 1.3, }}
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
                                color={Colors.secondary}
                                size={30}
                            />
                        </TouchableOpacity>
                        }
                    />
                    <View style={{  }}>
                        <Text style={[style.title, { color: Colors.secondary }]}>Photo ID Card</Text>
                        <Text style={[style.txt1, { color: '#CCCACF' }]}>Position all 4 corners of the page clearly</Text>
                    </View>
                </View>
            </ImageBackground>

            <View style={{
                flex: 1,
                backgroundColor: theme.bg,
                marginTop: -50,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
                //  width:width
            }}>
                <View style={{
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    flexDirection: 'row',
                    paddingHorizontal: 20,
                    flex:1
                }}>
                    <Avatar.Icon icon='image'
                        color={Colors.primary}
                        size={40}
                        style={{
                            backgroundColor: theme.bg,
                            borderColor: theme.bord,
                            borderWidth: 1
                        }}
                    />
                    <TouchableOpacity >
                    <Image source={theme.camera}
                        style={{ height: height / 11, width: width/5, resizeMode: 'stretch' }}
                    />
                    </TouchableOpacity>
                    <Avatar.Icon icon='lightning-bolt'
                        color={Colors.primary}
                        size={40}
                        style={{
                            backgroundColor: theme.bg,
                            borderColor: theme.bord,
                            borderWidth: 1
                        }} />
                </View>
            </View>
        </SafeAreaView>
    )
}