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
import {Avatar} from 'react-native-elements';


const width =Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function StatisticV2() {

    const navigation=useNavigation();
    const theme = useContext(themeContext);
  return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,}]}>
        <View style={[style.main,{backgroundColor:theme.bg}]}>
           <AppBar 
         color={theme.bg}
          title='Statistic'
          titleStyle={[style.title,{color:theme.txt}]}
          centerTitle={true}
         elevation={0}
         leading={ <TouchableOpacity onPress={()=>navigation.navigate('Statistic')}>
        <Icon name="arrow-back"  
         color={theme.txt} size={30}
     />
     </TouchableOpacity>
     }/>

     <View style={{marginTop:10}}>
        <Text style={style.txt1}>spending</Text>
     </View>
     <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={[style.title,{color:theme.txt}]}>$1,691.54 </Text>
            <Text style={[style.subtxt,{fontSize:12}]}>-3.1% from last month</Text>
    </View>

    <View style={{justifyContent:'space-evenly',flexDirection:'row',}}>
                 <View style={{}}>
                  <TouchableOpacity style={[style.btn,{width:width/4,alignItems:'center',backgroundColor:theme.input}]}
                  onPress={()=>navigation.navigate('Statistic')}>
                       <Text style={[style.txt1,{color:theme.txt,paddingHorizontal:10,lineHeight:16}]}>Week</Text>
                  </TouchableOpacity>                  
                 </View>
                
                 <View style={{}}>
                 <TouchableOpacity style={[style.btn,{width:width/4,alignItems:'center',backgroundColor:'#907FFA'}]}>
                       <Text style={[style.txt1,{color:'white',paddingHorizontal:10,lineHeight:16}]}>Month</Text>
                  </TouchableOpacity> 
                  </View>
                  
                  <View style={{}}>
                 <TouchableOpacity style={[style.btn,{width:width/4,alignItems:'center',backgroundColor:theme.input}]}>
                       <Text style={[style.txt1,{color:theme.txt,paddingHorizontal:10,lineHeight:16}]}>Year</Text>
                  </TouchableOpacity> 
                  </View>
     </View>

     <View style={{marginVertical:30}}>
        <Image source={theme.chart1}
                  resizeMode='stretch'
                  style={{height:height/3.5,width:width-40,}}     
        ></Image>
    </View>

    <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
                    <Text style={[style.txt1,{color:theme.txt}]}>This Month</Text>
                    <Text style={[style.txt1,{color:Colors.primary}]}>See all</Text>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} >
                <View style={{backgroundColor:theme.back,borderTopLeftRadius:20,borderTopRightRadius:20}}>
                <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:15,paddingVertical:10,borderRadius:10}}>
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
                       <Text style={[style.subtxt,{color:theme.txt}]}>- $120,90</Text>
                       <Text style={[style.subtxt]}>18 Sep,09:39 AM</Text>
                    </View>
                </View>

                <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:15,paddingVertical:10,borderRadius:10}}>
                    <Image source={theme.iiya}
                        resizeMode='stretch'
                        style={{width:width/9,height:height/20}}
                    ></Image>
                    <View style={{marginHorizontal:10}}>
                        <Text style={{fontSize:18,fontWeight:'600',color:theme.txt,marginBottom:5,fontFamily:'Itim-Regular',lineHeight:18}}>Ilya Vasil</Text>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Icons name='arrow-left-thin' color={'green'} size={25}></Icons>
                            <Text style={[style.subtxt,{lineHeight:13}]}>Finpay Card • 5318</Text>    
                        </View>
                    </View>
                    <View style={{justifyContent:'center',flex:1,alignItems:'flex-end'}}>
                       <Text style={[style.subtxt,{color:theme.txt}]}>+ $50,00</Text>
                       <Text style={[style.subtxt]}>17 Sep,06:51 PM</Text>
                    </View>
                </View>

                <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:15,paddingVertical:10,borderRadius:10}}>
                    <Image source={require('../../assets/image/burgerking.png')}
                        resizeMode='stretch'
                        style={{width:width/9,height:height/20}}
                    ></Image>
                    <View style={{marginHorizontal:10}}>
                        <Text style={{fontSize:18,fontWeight:'600',color:theme.txt,marginBottom:5,fontFamily:'Itim-Regular',lineHeight:18}}>Burger King</Text>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Icons name='arrow-right-thin' color={'red'} size={25}></Icons>
                            <Text style={[style.subtxt,{lineHeight:13}]}>Cheeseburger XL</Text>    
                        </View>
                    </View>
                    <View style={{justifyContent:'center',flex:1,alignItems:'flex-end'}}>
                       <Text style={[style.subtxt,{color:theme.txt}]}>- $5,90</Text>
                       <Text style={[style.subtxt]}>16 Sep,01:23 PM</Text>
                    </View>
                </View>

                <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:15,paddingVertical:10,borderRadius:10}}>
                    <Image source={theme.iiya}
                        resizeMode='stretch'
                        style={{width:width/9,height:height/20}}
                    ></Image>
                    <View style={{marginHorizontal:10}}>
                        <Text style={{fontSize:18,fontWeight:'600',color:theme.txt,marginBottom:5,fontFamily:'Itim-Regular',lineHeight:18}}>Claudia Sarah</Text>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Icons name='arrow-left-thin' color={'green'} size={25}></Icons>
                            <Text style={[style.subtxt,{lineHeight:13}]}>Finpay Card • 5318</Text>    
                        </View>
                    </View>
                    <View style={{justifyContent:'center',flex:1,alignItems:'flex-end'}}>
                       <Text style={[style.subtxt,{color:theme.txt}]}>+ $100,00</Text>
                       <Text style={[style.subtxt]}>09:39 AM</Text>
                    </View>
                </View>
                </View>
            </ScrollView>

    </View>
    </SafeAreaView>
  )
}