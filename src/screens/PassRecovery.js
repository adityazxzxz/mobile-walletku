import { View, Text,SafeAreaView,TouchableOpacity,TextInput,Image,ScrollView,StatusBar} from 'react-native'
import React,{useState,useContext} from 'react'
import { AppBar} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../theme/color';
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { useNavigation } from '@react-navigation/native';

export default function PassRecovery() {
 
    const navigation=useNavigation();
    const theme = useContext(themeContext);

    return (

      <SafeAreaView style={[style.area,{backgroundColor:theme.bg,}]}>
        <View style={[style.main,{backgroundColor:theme.bg}]}>
           <AppBar 
        color={theme.bg}
         elevation={0}
         leading={ <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
        <Icon name="arrow-back"  
         color={theme.txt} size={30}
     />
     </TouchableOpacity>
     }/>

        <View style={{marginTop:70}}>
            <Text style={[style.title,{color:theme.txt,textAlign:'center'}]}>PassWord Recovery</Text>
        </View>
        <View>
            <Text style={[style.subtxt,{textAlign:'center'}]}>Enter your Phone number to recover your password</Text>
        </View>

        <View style={[style.inputContainer,{marginTop:40,backgroundColor:theme.input}]}>
        <Icon name='ios-call' size={30} color={Colors.primary}></Icon>
                    <TextInput placeholder='0812 345 6789'
                    selectionColor={Colors.primary}
                    placeholderTextColor={Colors.disable}
                    keyboardType='phone-pad'
                    style={[{paddingHorizontal:10,color:theme.txt,fontFamily:'Itim-Regular',}]}
                    />
        </View>

        <View style={{marginTop:30}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Otp')} 
            style={style.btn}>
               <Text style={style.btntxt}>Continue</Text>
            </TouchableOpacity>
          </View>

    </View>
    </SafeAreaView>
  )
}