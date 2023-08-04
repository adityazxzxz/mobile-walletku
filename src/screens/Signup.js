import { View, Text,SafeAreaView,TouchableOpacity,TextInput,Image,ScrollView,StatusBar} from 'react-native'
import React,{useState,useContext} from 'react'
import { AppBar} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../theme/color';
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';


export default function Signup() {
 
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const navigation=useNavigation();
    const theme = useContext(themeContext);
    const [isSelected, setIsSelected] = useState(false)

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
     <ScrollView showsVerticalScrollIndicator={false}>
       
        <View style={{marginTop:20}}>
            <Text style={[style.title,{color:theme.txt}]}>Getting Started</Text>
            <Text style={style.subtxt}>Create an account to continue!</Text>
        </View>

        <View style={[style.inputContainer,{marginTop:40,backgroundColor:theme.input}]}>
        <Icon name='ios-person' size={30} color={Colors.primary}></Icon>
                    <TextInput placeholder='Full Name'
                    selectionColor={Colors.primary}
                    placeholderTextColor={Colors.disable}
                    style={[{paddingHorizontal:10,color:theme.txt,fontFamily:'Itim-Regular',}]}
                    />
        </View>

        <View style={[style.inputContainer,{backgroundColor:theme.input}]}>
        <Icon name='ios-call' size={30} color={Colors.primary}></Icon>
                    <TextInput placeholder='Phone Number'
                    selectionColor={Colors.primary}
                    placeholderTextColor={Colors.disable}
                    style={[{paddingHorizontal:10,color:theme.txt,fontFamily:'Itim-Regular',}]}
                    />
        </View>
        
        <View style={[style.inputContainer,{backgroundColor:theme.input}]}>
        <Icon name='lock-closed' size={30} color={Colors.primary}></Icon>
                    <TextInput placeholder='Password'
                    selectionColor={Colors.primary}
                    placeholderTextColor={Colors.disable}
                    secureTextEntry={!isPasswordVisible}
                    style={[{paddingHorizontal:10,color:theme.txt,fontFamily:'Itim-Regular',flex:1}]}
                    />
                    <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} >
                        <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} color={Colors.disable} size={20} />
                    </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 20, paddingLeft:10 }}>
         
            <CheckBox
              value={isSelected}
              onValueChange={() => setIsSelected(!isSelected)}
              tintColors={{ true: Colors.primary, false: Colors.txtcolor }}
            />
         <View>
         <Text style={[style.subtxt,{lineHeight:14}]}>By creating an account, you aggree to our </Text>
         <View style={{flexDirection:'row',}}>
                <Text style={[style.subtxt,{color:Colors.primary}]}>Terms</Text>
                <Text style={style.subtxt}> and</Text>
                <Text style={[style.subtxt,{color:Colors.primary}]}> Conditions</Text>
           </View>
         </View>
            
          </View>
         

        <View style={{marginTop:30}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Country')} 
            style={style.btn}>
               <Text style={style.btntxt}>Sign Up</Text>
            </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row',justifyContent:'center',paddingTop:30}}>
            <Text style={style.txt1}>Already have an account?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                <Text style={[style.txt,{color:Colors.primary,fontWeight:'500'}]}> Login</Text>
            </TouchableOpacity>
        </View>

        <View style={{marginTop:80}}>
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

     </ScrollView>
    </View>
    </SafeAreaView>
  )
}