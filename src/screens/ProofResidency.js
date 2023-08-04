import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Image, ScrollView, StatusBar, Dimensions } from 'react-native'
import React, { useState, useContext } from 'react'
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../theme/color';
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function ProofResidency() {

    const navigation = useNavigation();
    const theme = useContext(themeContext);

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <View style={[style.main, { backgroundColor: theme.bg }]}>
                <AppBar
                    color={theme.bg}
                    elevation={0}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('Verifyid')}>
                        <Icon name="arrow-back"
                            // style={{ backgroundColor: Colors.secondary, }}
                            color={theme.txt} size={30}
                        />
                    </TouchableOpacity>
                    } />

                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{ marginVertical: 20 }}>
                        <Text style={[style.title, { color: theme.txt }]}>Silahkan upload data diri anda</Text>
                        {/* <Text style={style.subtxt}>Prove you live in Indonesia</Text> */}
                    </View>

                    <Text style={style.subtxt}>NATIONALITY</Text>

                    <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', backgroundColor: theme.input, paddingVertical: 10, paddingHorizontal: 15, borderRadius: 10, marginBottom: 30 }}>
                        <Image source={require('../../assets/image/Flag.png')}
                            resizeMode='stretch'
                            style={{ width: width / 12, height: height / 25, }}
                        ></Image>
                        <View style={{ marginHorizontal: 20 }}>
                            <Text style={{ fontSize: 18, fontWeight: '600', color: theme.txt, marginBottom: 5, fontFamily: 'Itim-Regular' }}>Indonesian</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end', paddingHorizontal: 20 }}>
                            <TouchableOpacity>
                                <Text style={[style.subtxt, { color: Colors.primary }]}>Change</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Text style={style.subtxt}>METHOD OF VERIFICATION</Text>

                    <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 10, backgroundColor: theme.input, borderRadius: 10 }}>
                        <Image source={require('../../assets/image/bpkb.png')}
                            resizeMode='stretch'
                            style={{ width: width / 9, height: height / 20 }}
                        ></Image>
                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: '600', color: theme.txt, marginBottom: 5, fontFamily: 'Itim-Regular' }}>BPKB</Text>
                            <Text style={[style.subtxt, { width: 180, lineHeight: 12 }]}>Issued in Indonesia</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <Icon name='chevron-forward' size={20} color={Colors.primary}></Icon>
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('UploadId')}>
                        <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 10, backgroundColor: theme.input, borderRadius: 10 }}>
                            <Image source={require('../../assets/image/ktp.png')}
                                resizeMode='stretch'
                                style={{ width: width / 9, height: height / 20 }}
                            ></Image>
                            <View style={{ marginHorizontal: 10 }}>
                                <Text style={{ fontSize: 18, fontWeight: '600', color: theme.txt, marginBottom: 5, fontFamily: 'Itim-Regular' }}>KTP</Text>
                                <Text style={[style.subtxt, { width: 180, lineHeight: 12 }]}>Issued in Indonesia</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <Icon name='chevron-forward' size={20} color={Colors.primary}></Icon>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('UploadSelfie')}>
                        <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 10, backgroundColor: theme.input, borderRadius: 10 }}>
                            <Image source={require('../../assets/image/npwp.png')}
                                resizeMode='stretch'
                                style={{ width: width / 9, height: height / 20 }}
                            ></Image>
                            <View style={{ marginHorizontal: 10 }}>
                                <Text style={{ fontSize: 18, fontWeight: '600', color: theme.txt, marginBottom: 5, fontFamily: 'Itim-Regular' }}>NPWP (*Optional)</Text>
                                <Text style={[style.subtxt, { width: 180, lineHeight: 12 }]}>Issued in Indonesia</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <Icon name='chevron-forward' size={20} color={Colors.primary}></Icon>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <View style={{ marginTop: 70 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Pin')}
                            style={style.btn}>
                            <Text style={style.btntxt}>Continue</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>

            </View>
        </SafeAreaView>
    )
}