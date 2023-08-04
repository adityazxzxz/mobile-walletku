import { View, Text,SafeAreaView,TouchableOpacity,Modal,Dimensions,TextInput,Image,ScrollView,StatusBar, ImageBackground} from 'react-native'
import React,{useState,useContext} from 'react'
import { AppBar} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../theme/color';
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { useNavigation } from '@react-navigation/native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'


const width =Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function DetailHistory() {
 
    const navigation=useNavigation();
    const theme = useContext(themeContext);

    return (
        <SafeAreaView style={[style.area,{backgroundColor:theme.bg,}]}>
        <View style={[style.main,{backgroundColor:theme.bg}]}>
           <AppBar 
         color={theme.bg}
          title='Details'
          titleStyle={[style.title,{color:theme.txt}]}
          centerTitle={true}
         elevation={0}
         leading={ <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        <Icon name="arrow-back"  
         color={theme.txt} size={30}
     />
     </TouchableOpacity>
     }/>
 
     <ScrollView showsVerticalScrollIndicator={false}>

     <View style={{marginTop:20,flexDirection:'row',alignItems:'center',paddingHorizontal:15,paddingVertical:10,borderRadius:10}}>
                    <Image source={theme.apple}
                        resizeMode='stretch'
                        style={{width:width/9,height:height/20}}
                    ></Image>
                    <View style={{marginHorizontal:10}}>
                        <Text style={{fontSize:18,fontWeight:'600',color:theme.txt,marginBottom:5,fontFamily:'Itim-Regular',lineHeight:18}}>Apple Store</Text>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Icons name='arrow-right-thin' color={'red'} size={25}></Icons>
                            <Text style={[style.subtxt,{lineHeight:13}]}>iPhone 12 Case</Text>    
                        </View>
                    </View>
                    <View style={{justifyContent:'center',flex:1,alignItems:'flex-end'}}>
                       <Text style={[style.subtxt]}>09:39 AM</Text>
                    </View>
                </View>

        <View style={{paddingTop:20,}}>
            <Text style={[style.txt1,{textAlign:'center'}]}>Amount (USD)</Text>
             <Text style={[style.title,{color:theme.txt,textAlign:'center',fontSize:32}]}>- $120.90</Text>
         </View>
         <View style={style.divider1}></View>

         <Text style={[style.txt1,{color:theme.txt}]}>Payment with</Text>

         <View style={{marginTop:20,flexDirection:'row',alignItems:'center',paddingHorizontal:10,paddingVertical:5,borderRadius:10,backgroundColor:theme.btn,marginBottom:20}}>
                    <Image source={require('../../assets/image/card.png')}
                        resizeMode='stretch'
                        style={{width:width/6,height:height/20}}
                    ></Image>
                    <View style={{marginHorizontal:10}}>
                        <Text style={[style.txt1,{color:theme.txt,lineHeight:26}]}>Finpay Card</Text>
                        {/* <Text style={style.txt1}>.... .... .... 5318</Text> */}
                        <View style={{flexDirection:'row',alignSelf:'center',}}>
                            <Text style={[style.txt1,{lineHeight:14}]}>.... .... .... </Text>
                            <View style={{marginTop:5}}>
                            <Text style={[style.txt1,{lineHeight:14}]}> 5318</Text>
                            </View>
                        </View>
                    </View>
        </View>

        <Text style={[style.subtitle,{color:theme.txt}]}>Location</Text>
        <Text style={style.txt1}>767 Fifth Avenue New York, NY 10153</Text>

        <View style={{marginTop:20}}>
        <Image source={require('../../assets/image/Maps.png')}
                  resizeMode='stretch'
                  style={{height:height/4,width:width-40,}}     
                ></Image>
        </View> 

     </ScrollView>

    </View>
    </SafeAreaView>
  )
}