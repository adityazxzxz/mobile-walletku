import {
    View, Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions,
    TextInput
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

export default function NewCard() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={[style.main, { backgroundColor: theme.bg }]}>
                <AppBar
                    title='Add Card'
                    titleStyle={[style.title, { color: theme.txt }]}
                    centerTitle={true}
                    style={{ backgroundColor: 'transparent' }}
                    elevation={0}
                    leading={<TouchableOpacity
                    onPress={() => navigation.navigate('MyCard')}
                    >
                        <Icon name="arrow-back"
                            color={theme.txt}
                            size={30}
                        />
                    </TouchableOpacity>
                    }
                />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ paddingTop: 20 }}>
                        <View style={[style.inputContainer, { backgroundColor: theme.input }]}>
                            <TextInput placeholder='Enter Name' placeholderTextColor={theme.txt}
                                selectionColor={Colors.primary}
                                style={[style.txt, { color: theme.txt }]}
                            />
                        </View>
                        <View style={[style.inputContainer, { backgroundColor: theme.input, flexDirection: 'row', justifyContent: 'space-between' }]}>
                            <TextInput placeholder='Enter Card Number' placeholderTextColor={theme.txt}
                                keyboardType='phone-pad'
                                selectionColor={Colors.primary}
                                style={[style.txt, { color: theme.txt }]}
                            />
                            <Image source={require('../../assets/image/Mastercard.png')}
                                style={{ height: height / 8, resizeMode: 'center', width: width / 8 }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <View style={[style.inputContainer, { backgroundColor: theme.input, width: width / 2 - 25 }]}>
                                <TextInput placeholder='Expire Date' placeholderTextColor={theme.txt}
                                    keyboardType='phone-pad'
                                    selectionColor={Colors.primary}
                                    style={[style.txt, { color: theme.txt }]}
                                />
                            </View>
                            <View style={[style.inputContainer, { backgroundColor: theme.input, width: width / 2 - 25 }]}>
                                <TextInput placeholder='3-Digit CVV' placeholderTextColor={Colors.disable}
                                    keyboardType='phone-pad'
                                    selectionColor={Colors.primary}
                                    style={[style.txt, { color: theme.txt }]}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('CardPin')}
                    style={[style.btn, { flexDirection: 'row' ,alignSelf:'center'}]}>
                        <View style={{marginHorizontal:10}}>
                        <Icons name='credit-card-scan' color={Colors.secondary} size={25}/>
                        </View>
                        <Text style={[style.txt]}>Scan your card</Text>
                        <View style={{alignItems:'flex-end',flex:1}}>
                        <Icon name='chevron-forward' color={Colors.secondary} size={25} 
                        />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}