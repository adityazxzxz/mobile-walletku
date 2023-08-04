import { View, Text,SafeAreaView,TouchableOpacity,TextInput,Image,ImageBackground,ScrollView,StatusBar} from 'react-native'
import React,{useState,useContext} from 'react'
import { AppBar} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../theme/color';
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { useNavigation } from '@react-navigation/native';


export default function Fingerprint() {
    const navigation=useNavigation();
    const theme = useContext(themeContext);
  return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,paddingHorizontal:20}]}>
        <ImageBackground source={theme.fingerbg}
        style={{flex:1}}>

       <AppBar 
    color={theme.bg}
     elevation={0}
     leading={ <TouchableOpacity onPress={()=>navigation.navigate('Otp')}>
    <Icon name="arrow-back"  
     color={theme.txt} size={30}
 />
 </TouchableOpacity>
 }/>

        <View style={{marginTop:70}}>
            <Text style={[style.title,{color:theme.txt,textAlign:'center'}]}>Fingerprint</Text>
        </View>
        <View>
            <Text style={[style.subtxt,{textAlign:'center'}]}>Please lift and rest your finger for login authentication</Text>
        </View>
    <View style={{flex:1,justifyContent:'flex-end',marginBottom:20}}>
    <TouchableOpacity onPress={()=>navigation.navigate('OtpVerify')} >

        <Text style={[style.subtxt,{textAlign:'center'}]}>By set fingerprint, you agree to our </Text>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Text style={[style.subtxt,{color:theme.txt}]}>Terms</Text>
            <Text style={style.subtxt}> and</Text>
            <Text style={[style.subtxt,{color:theme.txt}]}> Conditions</Text>
        </View>
        </TouchableOpacity>

    </View>
    
    </ImageBackground>
    </SafeAreaView>
  )
}