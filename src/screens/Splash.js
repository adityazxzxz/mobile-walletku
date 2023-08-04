import { View, Text ,
    SafeAreaView,
    Image,
    Dimensions,
    ImageBackground
} from 'react-native'
import React,{useState,useContext} from 'react'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { Colors } from '../theme/color'
import { useNavigation } from '@react-navigation/native';



const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Splash() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);

  return (
    <SafeAreaView style={{flex:1}}>
        <ImageBackground source={theme.bgsplash}
        style={{height:height,width:width,resizeMode:'stretch'}}
        >
        <View style={{alignItems:'center',flex:0.9,justifyContent:'flex-end',bottom:20}}>
            <Text style={[style.txt,{color:Colors.disable,textAlign:'center'}]}>FinPay is a financial platform to manage</Text>
            <Text style={[style.txt,{color:Colors.disable,textAlign:'center'}]}>your business and money.</Text>
        </View>
        </ImageBackground>
    </SafeAreaView>
  )
}