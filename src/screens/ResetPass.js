import { View, Text,SafeAreaView,TouchableOpacity,TextInput,Image,ScrollView,StatusBar} from 'react-native'
import React,{useState,useContext} from 'react'
import { AppBar} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../theme/color';
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { useNavigation } from '@react-navigation/native';

export default function ResetPass() {
  
    const navigation=useNavigation();
    const theme = useContext(themeContext);
    const [isPasswordVisible, setIsPasswordVisible] = useState(true)
    const [isVisible, setIsVisible] = useState(true)
    return (
        <SafeAreaView style={[style.area,{backgroundColor:theme.bg,}]}>
        <View style={[style.main,{backgroundColor:theme.bg}]}>
           <AppBar 
        color={theme.bg}
         elevation={0}
         leading={ <TouchableOpacity onPress={()=>navigation.navigate('OtpVerify')}>
        <Icon name="arrow-back"  
         color={theme.txt} size={30} />
             </TouchableOpacity>
         }/>

        <View style={{marginTop:70}}>
            <Text style={[style.title,{color:theme.txt,textAlign:'center'}]}>Reset your password</Text>
        </View>
        <View style={{marginBottom:20}}>
            <Text style={[style.subtxt,{textAlign:'center'}]}>At least 8 characters, with uppercase and lowercase letters</Text>
        </View>

        <View style={[style.inputContainer,{backgroundColor:theme.input,}]}>
        <Icon name='lock-closed' size={30} color={Colors.primary}></Icon>
                    <TextInput placeholder='New Password'
                    selectionColor={Colors.primary}
                    placeholderTextColor={Colors.disable}
                    secureTextEntry={!isPasswordVisible}
                    style={[{paddingHorizontal:10,color:theme.txt,fontFamily:'Itim-Regular',flex:1}]}
                    />
                    <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} >
                        <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} color={Colors.disable} size={20} />
                    </TouchableOpacity>
        </View>

        <View style={[style.inputContainer,{backgroundColor:theme.input}]}>
        <Icon name='lock-closed' size={30} color={Colors.primary}></Icon>
                    <TextInput placeholder='Confirm Password'
                    selectionColor={Colors.primary}
                    placeholderTextColor={Colors.disable}
                    secureTextEntry={!isVisible}
                    style={[{paddingHorizontal:10,color:theme.txt,fontFamily:'Itim-Regular',flex:1}]}
                    />
                    <TouchableOpacity onPress={() => setIsVisible(!isVisible)} >
                        <Icon name={isVisible ? 'eye-off' : 'eye'} color={Colors.disable} size={20} />
                    </TouchableOpacity>
        </View>

        <View style={{marginTop:40}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')} 
            style={style.btn}>
               <Text style={style.btntxt}>Sign In</Text>
            </TouchableOpacity>
        </View>

    </View>
    </SafeAreaView>
  )
}