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
import { Avatar } from 'react-native-elements';


const width =Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function History() {

    const navigation=useNavigation();
    const theme = useContext(themeContext);

  return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,}]}>
        <View style={[style.main,{backgroundColor:theme.bg}]}>
           <AppBar 
         color={theme.bg}
          title='History'
          titleStyle={[style.title,{color:theme.txt}]}
          centerTitle={true}
         elevation={0}
         leading={ <TouchableOpacity onPress={()=>navigation.navigate('TransferProof')}>
        <Icon name="arrow-back"  
         color={theme.txt} size={30}
     />
     </TouchableOpacity>
     }/>

 

     <View style={[style.inputContainer,{marginTop:20,backgroundColor:theme.input}]}>
        <Icon name='search' size={30} color={Colors.primary}></Icon>
                    <TextInput placeholder='Search'
                    selectionColor={Colors.primary}
                    placeholderTextColor={Colors.disable}
                    style={[{paddingHorizontal:10,color:theme.txt,fontFamily:'Itim-Regular',}]}
                    />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={{paddingTop:20,marginTop:10,backgroundColor:theme.back,
            borderTopLeftRadius:20,
            borderTopRightRadius:20,
            }}>
                <View style={{marginHorizontal:10}}>
                <Text style={style.txt1}>TODAY</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:15,paddingVertical:10,borderRadius:10}}>
                    <Image source={require('../../assets/image/W2.png')}
                        resizeMode='stretch'
                        style={{width:width/9,height:height/20}}
                    ></Image>
                    <View style={{marginHorizontal:10}}>
                        <Text style={{fontSize:18,fontWeight:'600',color:theme.txt,marginBottom:5,fontFamily:'Itim-Regular',lineHeight:18}}>Transfer to Phillip</Text>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Icons name='arrow-right-thin' color={'red'} size={25}></Icons>
                            <Text style={[style.subtxt,{lineHeight:13}]}>Wise • 5318</Text>    
                        </View>
                    </View>
                    <View style={{justifyContent:'center',flex:1,alignItems:'flex-end'}}>
                       <Text style={[style.subtxt,{color:theme.txt}]}>- $75,00</Text>
                       <Text style={[style.subtxt]}>07:36 AM</Text>
                    </View>
                </View>

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
                       <Text style={[style.subtxt]}>09:39 AM</Text>
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
                       <Text style={[style.subtxt]}>09:39 AM</Text>
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
                       <Text style={[style.subtxt]}>09:39 AM</Text>
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

                <View style={{backgroundColor:theme.btn,padding:20,borderRadius:20,marginVertical:20}}>
                    <Text style={style.txt1}>Save more money up to 50% using your </Text>
                    <View style={{flexDirection:'row'}}>
                    <Text style={style.txt1}>Finpay debit card.</Text>
                    <Text style={[style.txt1,{color:Colors.primary}]}>Learn more</Text>
                    </View>
                </View>

                <View style={{marginHorizontal:10}}>
                <Text style={style.txt1}>LAST 7 DAY</Text>
                </View>

                <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:15,paddingVertical:10,borderRadius:10}}>
                    <Image source={require('../../assets/image/dianne.png')}
                        resizeMode='stretch'
                        style={{width:width/9,height:height/20}}
                    ></Image>
                    <View style={{marginHorizontal:10}}>
                        <Text style={{fontSize:18,fontWeight:'600',color:theme.txt,marginBottom:5,fontFamily:'Itim-Regular',lineHeight:18}}>Transfer to Dianne</Text>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Icons name='arrow-right-thin' color={'red'} size={25}></Icons>
                            <Text style={[style.subtxt,{lineHeight:13}]}>dianxxx@gmail.com</Text>    
                        </View>
                    </View>
                    <View style={{justifyContent:'center',flex:1,alignItems:'flex-end'}}>
                       <Text style={[style.subtxt,{color:theme.txt}]}>- $120,90</Text>
                       <Text style={[style.subtxt]}>09:39 AM</Text>
                    </View>
                </View>
           
                <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:15,paddingVertical:10,borderRadius:10}}>
                    <Image source={require('../../assets/image/starbucks.png')}
                        resizeMode='stretch'
                        style={{width:width/9,height:height/20}}
                    ></Image>
                    <View style={{marginHorizontal:10}}>
                        <Text style={{fontSize:18,fontWeight:'600',color:theme.txt,marginBottom:5,fontFamily:'Itim-Regular',lineHeight:18}}>Starbucks</Text>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Icons name='arrow-right-thin' color={'red'} size={25}></Icons>
                            <Text style={[style.subtxt,{lineHeight:13}]}>Yuzu Cold Brew</Text>    
                        </View>
                    </View>
                    <View style={{justifyContent:'center',flex:1,alignItems:'flex-end'}}>
                       <Text style={[style.subtxt,{color:theme.txt}]}>- $4,20</Text>
                       <Text style={[style.subtxt]}>09:39 AM</Text>
                    </View>
                </View>
            

            <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:15,paddingVertical:10,borderRadius:10}}>
                    <Image source={require('../../assets/image/walmart.png')}
                        resizeMode='stretch'
                        style={{width:width/9,height:height/20}}
                    ></Image>
                    <View style={{marginHorizontal:10}}>
                        <Text style={{fontSize:18,fontWeight:'600',color:theme.txt,marginBottom:5,fontFamily:'Itim-Regular',lineHeight:18}}>Walmart</Text>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Icons name='arrow-right-thin' color={'red'} size={25}></Icons>
                            <Text style={[style.subtxt,{lineHeight:13}]}>Hyper Bicycle 26</Text>    
                        </View>
                    </View>
                    <View style={{justifyContent:'center',flex:1,alignItems:'flex-end'}}>
                       <Text style={[style.subtxt,{color:theme.txt}]}>- $164,00</Text>
                       <Text style={[style.subtxt]}>09:39 AM</Text>
                    </View>
                </View>

                <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:15,paddingVertical:10,borderRadius:10}}>
                    <Image source={theme.iiya}
                        resizeMode='stretch'
                        style={{width:width/9,height:height/20}}
                    ></Image>
                    <View style={{marginHorizontal:10}}>
                        <Text style={{fontSize:18,fontWeight:'600',color:theme.txt,marginBottom:5,fontFamily:'Itim-Regular',lineHeight:18}}>Julia Hoffmann</Text>
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
     <View style={{backgroundColor:'transparent',position:'absolute',bottom:30,alignSelf:'center'}}>
             <TouchableOpacity onPress={() => navigation.navigate('DetailHistory')}>
             <Avatar source={require('../../assets/image/Button.png')}
            size={60}
            >
            </Avatar>
             </TouchableOpacity>
          </View>
    </View>
    </SafeAreaView>
  )
}