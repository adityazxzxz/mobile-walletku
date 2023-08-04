import { View, Text,SafeAreaView,TouchableOpacity,TextInput,Image,ScrollView,StatusBar} from 'react-native'
import React,{useState,useContext} from 'react'
import { AppBar} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../theme/color';
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { useNavigation } from '@react-navigation/native';


export default function Login() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const navigation=useNavigation();
    const theme = useContext(themeContext);
  return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,}]}>
        <View style={style.main}>
           <AppBar 
        color={theme.bg}
         elevation={0}
         leading={ <TouchableOpacity onPress={()=>navigation.navigate('Introduction')}>
        <Icon name="arrow-back"  
         color={theme.txt} size={30}
     />
     </TouchableOpacity>
     }/>

     <View style={{marginTop:20}}>
        <Text style={[style.title,{color:theme.txt}]}>Hi, Welcome Back!</Text>
        <Text style={style.subtxt}>Sign in to your account.</Text>
     </View>
     
     <View style={[style.inputContainer,{marginTop:40,backgroundColor:theme.btn}]}>
        <Icon name='ios-call' size={30} color={Colors.primary}></Icon>
                    <TextInput placeholder='Phone Number'
                    selectionColor={Colors.primary}
                    placeholderTextColor={Colors.disable}
                    style={[{color:theme.txt,fontFamily:'Itim-Regular',}]}
                    />
        </View>
        <View style={[style.inputContainer,{backgroundColor:theme.btn}]}>
        <Icon name='lock-closed' size={30} color={Colors.primary}></Icon>
                    <TextInput placeholder='Password'
                    selectionColor={Colors.primary}
                    secureTextEntry={!isPasswordVisible}
                    placeholderTextColor={Colors.disable}
                    style={[{paddingHorizontal:10,color:theme.txt,fontFamily:'Itim-Regular',flex:1}]}
                    />
                    <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} >
                        <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} color={Colors.disable} size={20} />
                    </TouchableOpacity>
        </View>

        <View style={{alignItems:'flex-end',paddingTop:10}}>
          <TouchableOpacity onPress={()=>navigation.navigate('PassRecovery')}>
            <Text style={{color:Colors.primary, fontFamily:'Itim-Regular'}}>Forgot Password ?</Text>
          </TouchableOpacity>
        </View>
       
        <View style={{marginTop:30}}>
            <TouchableOpacity onPress={()=>navigation.navigate('MyTabs')} 
            style={style.btn}>
               <Text style={style.btntxt}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row',justifyContent:'center',paddingTop:30}}>
            <Text style={style.txt1}>Don't have an account?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
                <Text style={[style.txt,{color:Colors.primary,fontWeight:'500'}]}> Sign Up</Text>
            </TouchableOpacity>
          </View>
<View style={{flex:1,justifyContent:'flex-end'}}>
          <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between', paddingHorizontal:30}}>
              <View style={style.divider}></View>
              <Text style={{color:Colors.disable, fontFamily:'Itim-Regular'}}>Or login with</Text>
              <View style={style.divider}></View>
          </View>

          <View style={{paddingTop:20,marginBottom:30}}>
            <TouchableOpacity style={[style.btn1,{borderColor:Colors.disable,borderWidth:1,backgroundColor:theme.bg}]}>
               <Image source={require('../../assets/image/Google.png')}></Image>
               <Text style={[style.btntxt1,{color:theme.txt,flex:1,textAlign:'center'}]}>Login with Google</Text>
            </TouchableOpacity>
          </View>
          </View>

     </View>
    </SafeAreaView>
  )
}
