import { View, Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions
} from 'react-native'
import React, { useState, useContext } from 'react'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { Colors } from '../theme/color'
import { useNavigation } from '@react-navigation/native';
import { AppBar, } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons'
import OtpInputs from 'react-native-otp-inputs'
import Clipboard from '@react-native-clipboard/clipboard'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Pin() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
  return (
<SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={[style.main,{backgroundColor:theme.bg}]}>
                <AppBar
                    style={{ backgroundColor: 'transparent' }}
                    elevation={0}
                    leading={<TouchableOpacity
                        onPress={() => navigation.navigate('ProofResidency')}
                    >
                        <Icon name="arrow-back"
                            // style={{ marginLeft: 20 }}
                            color={theme.txt}
                            size={30}
                        />
                    </TouchableOpacity>
                    }
                />
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 70 }}>
                    <Text style={[style.title, { color: theme.txt }]}>Create New Pin</Text>
                    <Text style={[style.txt1]}>Add a pin number to make your wallet</Text>
                    <Text style={[style.txt1,]}>more secure</Text>
                </View>
                <View style={{ paddingTop: 20 }}>
                    <OtpInputs
                        Clipboard={Clipboard}
                        numberOfInputs={6}
                        selectionColor={theme.txt}
                        style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}
                        inputStyles={{

                            borderColor: theme.btn,
                            backgroundColor: theme.btn,
                            borderRadius: 10,
                            textAlign: 'center',
                            height: 50,
                            width: 50,
                            fontSize: 22,
                            borderWidth: 1,
                            color: theme.txt,
                            fontWeight: '600',
                            fontFamily: 'Itim-Regular',
                        }}
                    />
                </View>
                <View style={{ paddingTop: 30 }}>
                    <TouchableOpacity style={[style.btn]}
                    onPress={() => navigation.navigate('BottomNavigator')}
                    >
                        <Text style={[style.txt]}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
  )
}