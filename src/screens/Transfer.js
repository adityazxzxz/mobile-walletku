import { View, Text,SafeAreaView,TouchableOpacity,Modal,Dimensions,TextInput,Image,ScrollView,StatusBar, ImageBackground} from 'react-native'
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

export default function Transfer() {
       
    const navigation=useNavigation();
    const [visible, setVisible] = useState(false)
    const theme = useContext(themeContext);

  return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.background,}]}>
        <StatusBar backgroundColor={theme.background} barStyle={theme.barStyle} translucent={false}/>
        <View style={{flex:0.15,marginTop:40,marginHorizontal:20}}>
            <AppBar 
          color={theme.background}
          title='Transfer'
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
           
            <View style={{marginTop:20}}>
                <Text style={[style.txt1,{color:theme.txt,textAlign:'center',fontSize:24}]}>Where do you want to transfer?</Text>
            </View>
            <View style={{marginTop:20,flexDirection:'row',alignItems:'center',paddingLeft:15,paddingRight:15,paddingVertical:10,borderRadius:10,backgroundColor:theme.btn,
                // borderColor:Colors.disable,borderWidth:1
                }}>
                    <Image source={require('../../assets/image/bank.png')}
                        resizeMode='stretch'
                        style={{width:width/11,height:height/25}}
                    ></Image>
                    <View style={{marginHorizontal:10}}>
                        <Text style={[style.txt1,{fontSize:18,}]}>Select Bank</Text>
                    </View>
                    <View style={{justifyContent:'center',flex:1,alignItems:'flex-end',}}>
                       <TouchableOpacity onPress={() => setVisible(true)} >
                       <Icon name='chevron-down' size={20} color={Colors.disable}></Icon>
                       </TouchableOpacity>
                    </View>
                </View>

                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
                    <Text style={[style.txt1,{color:theme.txt}]}>Transfer to</Text>
                    <Text style={[style.txt1,{color:Colors.primary}]}>See all</Text>
                </View>

                <View>
                    <ScrollView horizontal
                    showsHorizontalScrollIndicator={false}
                    nestedScrollEnabled={true}>
                         <View>
                        <ImageBackground source={require('../../assets/image/blank.png')}
                         resizeMode='contain'
                         style={{width:width/4.5,height:height/13,alignSelf:'center',marginTop:20}}>
                         <Icon name='person-add' size={30} color={Colors.primary} style={{alignSelf:'center',marginTop:18}}></Icon>
                        </ImageBackground>
                        <Text style={[style.txt1,{color:theme.txt,textAlign:'center'}]}>Add</Text>
                        </View>

                        <View>
                         <Image source={require('../../assets/image/Avatar.png')}
                          resizeMode='contain'
                          style={{width:width/5,height:height/13,alignSelf:'center',marginTop:20}}
                         ></Image>
                         <Text style={[style.txt1,{color:theme.txt,textAlign:'center'}]}>Phillip</Text>
                        </View>

                        <View>
                        <Image source={require('../../assets/image/Avatar1.png')}
                          resizeMode='contain'
                          style={{width:width/5,height:height/13,alignSelf:'center',marginTop:20}}
                         ></Image>
                        <Text style={[style.txt1,{color:theme.txt,textAlign:'center'}]}>Brandon</Text>
                        </View>

                        <View>
                         <Image source={require('../../assets/image/Avatar2.png')}
                          resizeMode='contain'
                          style={{width:width/5,height:height/13,alignSelf:'center',marginTop:20}}
                         ></Image>
                         <Text style={[style.txt1,{color:theme.txt,textAlign:'center'}]}>Julia</Text>
                        </View>

                        <View>
                         <Image source={require('../../assets/image/Avatar3.png')}
                          resizeMode='contain'
                          style={{width:width/5,height:height/13,alignSelf:'center',marginTop:20}}
                         ></Image>
                         <Text style={[style.txt1,{color:theme.txt,textAlign:'center'}]}>Dianne</Text>
                        </View>
                    </ScrollView>
                </View>

                <View style={{backgroundColor:theme.btn,padding:20,borderRadius:20,marginTop:20}}>
            <Text style={[style.txt1,{textAlign:'center'}]}>Amount (USD)</Text>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:20}}>
                <TouchableOpacity>
                <View style={{backgroundColor:Colors.secondary,borderRadius:50,height:40,width:40,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontFamily:'Itim-Regular',fontSize:30,color:Colors.primary,lineHeight:28,}}>-</Text>
                </View>
                </TouchableOpacity>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:20,fontFamily:'Itim-Regular',color:theme.txt}}>$</Text>
                    <Text style={{fontSize:32,fontFamily:'Itim-Regular',color:theme.txt}}>75</Text>
                </View>
                <TouchableOpacity>
                <View style={{backgroundColor:Colors.secondary,borderRadius:50,height:40,width:40,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontFamily:'Itim-Regular',fontSize:30,color:Colors.primary,lineHeight:28,}}>+</Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>

        <View style={{marginTop:50}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Transferdetail')} 
            style={style.btn}>
               <Text style={style.btntxt}>Continue</Text>
            </TouchableOpacity>
        </View>

        </ScrollView>
        </View>
      </SafeAreaView>
  )
}