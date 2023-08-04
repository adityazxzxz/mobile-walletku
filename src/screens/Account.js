import {
    View, Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions,
    TextInput,
    KeyboardAvoidingView
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

export default function Account() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
             
            <View style={[style.main, { backgroundColor: theme.bg }]}>
           
                <AppBar
                    title='My Account'
                    titleStyle={[style.title, { color: theme.txt }]}
                    centerTitle={true}
                    style={{ backgroundColor: 'transparent' }}
                    elevation={0}
                    leading={<TouchableOpacity
                    onPress={() => navigation.navigate('Profile')}
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
                <View style={{ alignItems: 'center' ,paddingTop:20,}}>
                    <Image source={require('../../assets/image/User.png')}
                        style={{ height: height / 6, width: width / 3, resizeMode: 'stretch' ,position:'absolute'}}
                    />
                    
                    <Image source={require('../../assets/image/User2.png')}
                        style={{
                            height: height / 10,
                            width: width / 10,
                            resizeMode: 'center',
                            position: 'absolute',
                            marginTop:70,
                            right:105
                        }}
                    
                    />
                </View>
                
                   
                <View style={{paddingTop:100}}>
                <View style={[style.inputContainer,{backgroundColor:theme.input,flexDirection:'row'}]}>
                    <Icon name='person' color={Colors.primary} size={20}/>
                    <TextInput placeholder='Enter Name' placeholderTextColor={theme.txt}
                    selectionColor={Colors.primary}
                    style={[style.txt,{color:theme.txt,marginLeft:5}]}/>
                </View>
                <View style={[style.inputContainer,{backgroundColor:theme.input,flexDirection:'row'}]}>
                    <Icons name='phone' color={Colors.primary} size={20}/>
                    <TextInput placeholder='Phone Number' placeholderTextColor={theme.txt}
                    selectionColor={Colors.primary}
                    keyboardType='phone-pad'
                    style={[style.txt,{color:theme.txt,marginLeft:5}]}/>
                </View>
                <View style={[style.inputContainer,{backgroundColor:theme.input,flexDirection:'row'}]}>
                    <Icon name='lock-closed' color={Colors.primary} size={20}/>
                    <TextInput placeholder='Password' placeholderTextColor={theme.txt}
                    selectionColor={Colors.primary}
                    secureTextEntry={!isPasswordVisible}
                    style={[style.txt,{color:theme.txt,marginLeft:5}]}/>
                    <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                    style={{alignItems:'flex-end',flex:1}}
                    >
                    <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} color={Colors.disable} size={20}/>
                    </TouchableOpacity>
                </View>
                <View style={[style.inputContainer,{backgroundColor:theme.input,flexDirection:'row'}]}>
                    <Image source={require('../../assets/image/Flag.png')}
                    style={{height:height/30,width:width/15,resizeMode:'stretch'}}
                    />
                    <Text 
                    style={[style.txt,{color:theme.txt,marginLeft:5}]}>Indonesia</Text>
                    <TouchableOpacity style={{flex:1,alignItems:'flex-end'}}>
                        <Text style={[style.txt,{color:Colors.primary}]}>Change </Text>
                    </TouchableOpacity>
                </View>
                <View style={{paddingVertical:20,}}>
                    <TouchableOpacity style={[style.btn,{height:50}]}>
                        <Text style={[style.txt]}>Save Changes</Text>
                    </TouchableOpacity>
                </View>
                </View>

                </ScrollView>
                </View>
                

            </View>
        </SafeAreaView>
    )
}