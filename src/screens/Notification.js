import { View, Text,SafeAreaView,ScrollView,StatusBar,Switch,TouchableOpacity} from 'react-native'
import React,{useState,useContext} from 'react'
import { AppBar} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../theme/color';
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { useNavigation } from '@react-navigation/native';


export default function Notification() {
    const navigation=useNavigation();
    const theme = useContext(themeContext);

    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    const [ison, setIsOn] = useState(false);
    const toggle = () => setIsOn(previousState => !previousState);

    const [ison1, setIsOn1] = useState(true);
    const toggle1 = () => setIsOn1(previousState => !previousState);

    const [isEnabled1, setIsEnabled1] = useState(true);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

    const [isoff, setIsOff] = useState(true);
    const tog = () => setIsOff(previousState => !previousState);

    const [isoff1, setIsOff1] = useState(true);
    const tog1 = () => setIsOff1(previousState => !previousState);
 
  return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,}]}>
        <View style={[style.main,{backgroundColor:theme.bg}]}>
           <AppBar 
        color={theme.bg}
         elevation={0}
         leading={ <TouchableOpacity onPress={()=>navigation.navigate('Setting')}>
        <Icon name="arrow-back"  
         color={theme.txt} size={30}
     />
     </TouchableOpacity>
     }/>

    <ScrollView showsVerticalScrollIndicator={false}>

      <View style={{marginTop:20,marginBottom:20}}>
        <Text style={[style.title,{color:theme.txt}]}>Notifications</Text>
      </View>

    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginVertical:10}}>
                <Text style={[style.txt1,{color:theme.txt,}]}>Fee alert</Text>
                <Switch
                  trackColor={{false: Colors.disable, true: Colors.primary}}
                  thumbColor={isEnabled ? Colors.secondary : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
    </View>  
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginVertical:10}}>
                <Text style={[style.txt1,{color:theme.txt,}]}>Big expense alert</Text>
                 <Switch
                  trackColor={{false: Colors.disable, true: Colors.primary}}
                  thumbColor={ison ? Colors.secondary : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggle}
                  value={ison}
                />
    </View>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginVertical:10}}>
                <Text style={[style.txt1,{color:theme.txt,}]}>Credit utilization alert</Text>
                <Switch
                  trackColor={{false: Colors.disable, true: Colors.primary}}
                  thumbColor={isEnabled1 ? Colors.secondary : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch1}
                  value={isEnabled1}
                />
    </View>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginVertical:10}}>
                <Text style={[style.txt1,{color:theme.txt}]}>Low balance alert</Text>
                <Switch
                  trackColor={{false: Colors.disable, true: Colors.primary}}
                  thumbColor={ison1 ? Colors.secondary : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggle1}
                  value={ison1}
                />
    </View>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginVertical:10}}>
                <Text style={[style.txt1,{color:theme.txt}]}>Recurring paid alert</Text>
                <Switch
                  trackColor={{false: Colors.disable, true: Colors.primary}}
                  thumbColor={isoff ? Colors.secondary : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={tog}
                  value={isoff}
                />
    </View>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginVertical:10}}>
                <Text style={[style.txt1,{color:theme.txt}]}>Spending update</Text>
                <Switch
                  trackColor={{false: Colors.disable, true: Colors.primary}}
                  thumbColor={isoff1 ? Colors.secondary : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={tog1}
                  value={isoff1}
                />
    </View>
    <View style={{marginTop:100}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Setting')} 
            style={style.btn}>
               <Text style={style.btntxt}>Save Changes</Text>
            </TouchableOpacity>
    </View>
     </ScrollView>  
    </View>
    </SafeAreaView>
  )
}