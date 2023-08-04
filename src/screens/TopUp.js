import { View, Text,SafeAreaView,TouchableOpacity,Modal,Dimensions,TextInput,Image,ScrollView,StatusBar} from 'react-native'
import React,{useState,useContext} from 'react'
import { AppBar} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../theme/color';
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { useNavigation } from '@react-navigation/native';

const width =Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function TopUp() {
  
    const navigation=useNavigation();
    const [visible, setVisible] = useState(false)
    const theme = useContext(themeContext);
    const [darkMode,setDarkMode] = useState(false)


    return (
        <SafeAreaView style={[style.area,{backgroundColor:theme.background,}]}>
       <StatusBar backgroundColor={theme.background} barStyle={theme.barStyle} translucent={false}/>
       <View style={{flex:0.15,marginTop:40,marginHorizontal:20}}>
           <AppBar 
         color={theme.background}
         title='Top Up'
         titleStyle={{color:Colors.secondary,fontFamily:'Itim-Regular',fontSize:26}}
         centerTitle={true}
         elevation={0}
         leading={ <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        <Icon name="arrow-back"  
        //  style={{backgroundColor:Colors.secondary,}}  
         color={Colors.secondary} size={30}
     />
     </TouchableOpacity>
     }/>
     </View>
     <View style={{flex:1,backgroundColor:theme.back,borderTopRightRadius:20,borderTopLeftRadius:20,paddingHorizontal:20}}>
        <ScrollView showsVerticalScrollIndicator={false}>
         <Image source={require('../../assets/image/finpay.png')}
         style={{width:width/4,height:height/8.5,alignSelf:'center',marginTop:20,resizeMode:'stretch'}}
         ></Image>
         <Text style={[style.title,{color:theme.txt,textAlign:'center',marginTop:10}]}>Finpay Card</Text>
         <View style={{flexDirection:'row',alignSelf:'center'}}>
            <Text style={style.title}>.... .... .... </Text>
            <View style={{marginTop:15}}>
            <Text style={style.txt1}> 5318</Text>
            </View>
         </View>
         <View style={{backgroundColor:theme.btn,padding:20,borderRadius:20}}>
            <Text style={[style.txt1,{textAlign:'center'}]}>Amount (USD)</Text>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:20}}>
                <TouchableOpacity>
                <View style={{backgroundColor:Colors.secondary,borderRadius:50,height:40,width:40,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontFamily:'Itim-Regular',fontSize:30,color:Colors.primary,lineHeight:28,}}>-</Text>
                </View>
                </TouchableOpacity>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:20,fontFamily:'Itim-Regular',color:theme.txt}}>$</Text>
                    <Text style={{fontSize:32,fontFamily:'Itim-Regular',color:theme.txt}}>500</Text>
                </View>
                <TouchableOpacity>
                <View style={{backgroundColor:Colors.secondary,borderRadius:50,height:40,width:40,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontFamily:'Itim-Regular',fontSize:30,color:Colors.primary,lineHeight:28,}}>+</Text>
                </View>
                </TouchableOpacity>
            </View>
         </View>
 
         <View style={{marginTop:20,flexDirection:'row',alignItems:'center',paddingHorizontal:15,paddingVertical:10,borderRadius:10,backgroundColor:theme.btn,borderColor:Colors.disable,borderWidth:1}}>
                    <Image source={require('../../assets/image/Mastercard.png')}
                        resizeMode='stretch'
                        style={{width:width/9,height:height/25}}
                    ></Image>
                    <View style={{marginHorizontal:10}}>
                        <Text style={style.txt1}>Debit</Text>
                    </View>
                    <View style={{justifyContent:'flex-end',flex:1,alignItems:'center',flexDirection:'row'}}>
                       <Text style={[style.subtxt,{color:theme.txt}]}>$7,124 </Text>
                       <TouchableOpacity onPress={() => setVisible(true)} >
                       <Icon name='chevron-down' size={20} color={Colors.disable}></Icon>
                       </TouchableOpacity>
                    </View>
                </View>

                <View style={{paddingTop:20,marginBottom:20,marginTop:100}}>
            <TouchableOpacity style={[style.btn1,{borderColor:Colors.disable,backgroundColor:theme.btn,paddingHorizontal:5,paddingVertical:5,borderRadius:20}]}>
               <Image source={require('../../assets/image/Slider.png')}
                resizeMode='stretch'
                style={{width:width/8.5,height:height/19}}
               ></Image>
               <Text style={[style.btntxt1,{color:theme.txt,flex:1,textAlign:'center'}]}>Swipe to top-up</Text>
            </TouchableOpacity>
          </View>
          </ScrollView>
     </View>

     <Modal transparent={true}
                visible={visible}>
                <View style={{
                    width: width,
                    flex: 1,
                    backgroundColor: '#000000aa',
                    transparent: 'true',
                }}>
                    <View style={[style.modalcontainer, { backgroundColor: theme.bg, width: width - 20, marginVertical: 190, }]}>
                        <AppBar
                        title='Confirm'
                        titleStyle={[style.subtitle,{color:theme.txt}]}
                        centerTitle={true}
                        style={{ backgroundColor: 'transparent' }}
                        elevation={0}
                        leading={<TouchableOpacity
                        onPress={() =>setVisible(false)}
                        >
                            <Icon name="close"
                                color={Colors.primary}
                                size={30}
                            />
                        </TouchableOpacity>
                        }
                    />
                    <View style={{paddingTop:10,paddingHorizontal:10}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
                            <Text style={[style.txt1,{}]}>Method</Text>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Image source={require('../../assets/image/Mastercard1.png')}
                                />
                                <Text style={[style.txt1,{color:theme.txt,marginLeft:5}]}>MasterCard</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor:Colors.disable,height:1,}}></View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:10}}>
                            <Text style={[style.txt1,{}]}>Top-up Amount</Text>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={[style.txt1,{color:theme.txt,marginLeft:5}]}>$500.00</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor:Colors.disable,height:1,}}></View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:10}}>
                            <Text style={[style.txt,{color:theme.txt}]}>Total</Text>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={[style.txt1,{color:theme.txt,marginLeft:5}]}>$500.00</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={()=>{setVisible(false),navigation.navigate('Success')}}
                        style={[style.btn]}>
                            <Text style={style.txt}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </View>

            </Modal>
    </SafeAreaView>
  )
}