import {
    View, Text,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions,
    TextInput,
    Switch,
    SafeAreaView
} from 'react-native'
import React, { useState, useContext } from 'react'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { Colors } from '../theme/color'
import { useNavigation } from '@react-navigation/native';
import { AppBar, } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Chat() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.input }]}>
            <View style={[style.main, { backgroundColor: theme.input }]}>
                <AppBar
                    title='Chat Assistant'
                    titleStyle={[style.title, { color: theme.txt }]}
                    centerTitle={true}
                    style={{ backgroundColor: 'transparent' }}
                    elevation={0}
                    leading={<TouchableOpacity
                    onPress={() => navigation.navigate('Setting')}
                    >
                        <Icon name="arrow-back"
                            color={theme.txt}
                            size={30}
                        />
                    </TouchableOpacity>
                    }
                />
                <View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ paddingTop: 20 }}>
                            <View style={{
                                // paddingHorizontal:10,
                                paddingVertical: 10,
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 18,
                                borderBottomRightRadius: 18,
                                backgroundColor: theme.btn,
                                marginRight: 150
                            }}>
                                <Text style={[style.txt, { color: theme.txt, marginLeft: 10 }]}>Hi Daniel, I’m Fin 😎</Text>
                            </View>
                        </View>
                        <View style={{ paddingTop: 10 }}>
                            <View style={{
                                // paddingHorizontal:10,
                                paddingVertical: 10,
                                borderTopRightRadius: 18,
                                borderBottomRightRadius: 18,
                                backgroundColor: theme.btn,
                                marginRight: 100
                            }}>
                                <Text style={[style.txt, { color: theme.txt, marginLeft: 10 }]}>I’m here to help your personal</Text>
                                <Text style={[style.txt, { color: theme.txt, marginLeft: 10 }]}>finance stuff easier 💰</Text>
                            </View>
                        </View>
                        <View style={{ paddingTop: 10 }}>
                            <View style={{
                                // paddingHorizontal:10,
                                paddingVertical: 10,
                                borderBottomLeftRadius: 20,
                                borderTopRightRadius: 18,
                                borderBottomRightRadius: 18,
                                backgroundColor: theme.btn,
                                marginRight: 150
                            }}>
                                <Text style={[style.txt, { color: theme.txt, marginLeft: 10 }]}>Hi Daniel, I’m Fin 😎</Text>
                            </View>
                        </View>
                        <View style={{ paddingTop: 20 }}>
                            <View style={{
                                // paddingHorizontal:10,
                                paddingVertical: 10,
                                borderBottomLeftRadius: 20,
                                borderTopLeftRadius: 18,
                                borderTopRightRadius: 18,
                                backgroundColor: Colors.primary,
                                marginLeft: 150
                            }}>
                                <Text style={[style.txt, { color: Colors.secondary, marginLeft: 10 }]}>How to spend less?</Text>
                            </View>
                        </View>
                        <View style={{ paddingTop: 20 }}>
                            <View style={{
                                // paddingHorizontal:10,
                                paddingVertical: 10,
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 18,
                                borderBottomRightRadius: 18,
                                backgroundColor: theme.btn,
                                marginRight: 140
                            }}>
                                <Text style={[style.txt, { color: theme.txt, marginLeft: 10 }]}>I can help you with that</Text>
                            </View>
                        </View>
                        <View style={{ paddingTop: 10 }}>
                            <View style={{
                                // paddingHorizontal:10,
                                paddingVertical: 10,
                                borderTopRightRadius: 18,
                                borderBottomRightRadius: 18,
                                backgroundColor: theme.btn,
                                marginRight: 100
                            }}>
                                <Text style={[style.txt, { color: theme.txt, marginLeft: 10 }]}>Introducing Finpay card! 🎉</Text>
                            <Image source={require('../../assets/image/chat.png')}
                            style={{height:height/12,width:width/4,resizeMode:'center',marginLeft:10}}
                             />
                            </View>
                        </View>
                        <View style={{ paddingTop: 10 }}>
                            <View style={{
                                // paddingHorizontal:10,
                                paddingVertical: 10,
                                borderBottomLeftRadius: 20,
                                borderTopRightRadius: 18,
                                borderBottomRightRadius: 18,
                                backgroundColor: theme.btn,
                                marginRight: 10
                            }}>
                                <Text style={[style.txt, { color: theme.txt, marginLeft: 10 }]}>A smart debit and credit card that can help</Text>
                           <Text style={[style.txt, { color: theme.txt, marginLeft: 10 }]}>save more money! 💳</Text>
                            </View>
                        </View>
                        <View style={{paddingTop:20,alignItems:'center'}}>
                            <TouchableOpacity style={{
                                borderColor:Colors.primary,
                                borderWidth:1,
                                paddingHorizontal:10,
                                paddingVertical:8,
                                borderRadius:20
                                }}>
                                <Text style={[style.txt,{color:Colors.primary,textAlign:'center'}]}>more info 👀</Text>
                                </TouchableOpacity>
                        </View>
                    <View style={{justifyContent:'flex-end',}}>
                        <View style={[style.inputContainer,{flexDirection:'row',justifyContent:'space-between',backgroundColor:theme.btn,marginBottom:60}]}>
                            <TextInput style={[style.txt1]} 
                            placeholder='Say something'
                            placeholderTextColor={Colors.disable}
                            />
                            <Icons name='emoticon-happy-outline' color={Colors.disable} size={20}/>
                        </View>
                    </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}