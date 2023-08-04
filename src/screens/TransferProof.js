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

export default function TransferProof() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={{
                backgroundColor: theme.input,
                borderBottomRightRadius: 40,
                borderBottomLeftRadius: 40,
                width: width,
                height: height / 1.37
            }}>
                <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                    <AppBar
                        title='Transfer Success'
                        titleStyle={[style.title, { color: theme.txt }]}
                        centerTitle={true}
                        style={{ backgroundColor: 'transparent' }}
                        elevation={0}
                        leading={<TouchableOpacity
                        onPress={() => navigation.navigate('Transferdetail')}
                        >
                            <Icon name="arrow-back"
                                // style={{ marginLeft: 20 }}
                                color={theme.txt}
                                size={30}
                            />
                        </TouchableOpacity>
                        }
                    />
                    <ScrollView>
                        <View style={{ paddingTop: 50, }}></View>

                        <View style={{
                            backgroundColor: theme.bg,
                            height: height / 1.85,
                            borderBottomRightRadius: 40,
                            borderBottomLeftRadius: 40,
                        }}>
                            <Image source={require('../../assets/image/True.png')}
                                style={{ height: height / 9, width: width/2.5, resizeMode: 'stretch', position: 'absolute', marginTop: -40 ,alignSelf:'center'}}
                            />
                            <View style={{ paddingTop: 50, alignItems: 'center' ,paddingBottom:15}}>
                                <Text style={[style.txt1]}>#TR-109092021</Text>
                                <View style={{ flexDirection: 'row', paddingTop: 20 ,alignItems:'center'}}>
                                    <Text style={[style.txt, { color: theme.txt ,}]}>$</Text>
                                    <Text style={[style.title1,{color:theme.txt}]}>75.00</Text>
                                </View>
                            </View>
                            <View style={{paddingHorizontal:20}}>
                        <View style={{backgroundColor:Colors.disable,height:1,}}></View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:15}}>
                            <Text style={[style.txt1,]}>Recipient</Text>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Image source={require('../../assets/image/Phillip4.png')}
                                style={{resizeMode:'stretch',height:height/30,width:width/10}}
                                />
                                <Text style={[style.txt1,{color:theme.txt,marginLeft:5}]}>Phillip</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor:Colors.disable,height:1,}}></View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:15}}>
                            <Text style={[style.txt1,]}>Transfer To</Text>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('../../assets/image/Wise4.png')}
                            style={{resizeMode:'stretch',height:height/30,width:width/13}}
                            />
                                <Text style={[style.txt1,{color:theme.txt,marginRight:5}]}>Wise</Text>
                                <Text style={[style.txt1,{}]}>**** 9797</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor:Colors.disable,height:1,}}></View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:15}}>
                            <Text style={[style.txt1]}>Transfer Date</Text>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={[style.txt1,{color:theme.txt,marginLeft:5}]}>Sep 9,2021</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor:Colors.disable,height:1,}}></View>
                        <TouchableOpacity style={{paddingVertical:15}}>
                            <Text style={[style.txt,{color:theme.his,alignSelf:'center'}]}>History Transaction</Text>
                        </TouchableOpacity>
                        </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
            <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-evenly',flex:1,paddingHorizontal:20}}>
                <TouchableOpacity style={[style.btn,{width:width/2-25,backgroundColor:theme.input}]}>
                    <Text style={[style.txt,{color:theme.his}]}>Print</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('History')}
                style={[style.btn,{width:width/2-25}]}>
                    <Text style={[style.txt,]}>Done</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}