import {
    View, Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions,
} from 'react-native'
import React, { useState, useContext } from 'react'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { Colors } from '../theme/color'
import { useNavigation } from '@react-navigation/native';
import { AppBar, darkTheme, } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons'
import CountryPicker from 'react-native-country-picker-modal'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { TextInput } from 'react-native-paper'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Country() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const [countryName, setCountryName] = useState('');
    const [withFlag, setWithFlag] = useState('');
    const [countryCode, setCountryCode] = useState('IN')
    const [showPicker, setshowPicker] = useState(false);

    const onSelectCountry = (country) => {
        setCountryName(country.name);
        // setCountryCode(country.cca2);
    };

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>
                <AppBar
                    style={{ backgroundColor: 'transparent' }}
                    elevation={0}
                    leading={<TouchableOpacity
                    onPress={() => navigation.navigate('Signup')}
                    >
                        <Icon name="arrow-back"
                            color={theme.txt}
                            size={30}
                        />
                    </TouchableOpacity>
                    }
                />
                <Text style={[style.title, { color: theme.txt }]}>Country of residence</Text>
                <Text style={[style.txt1]}>The terms and services which apply to you, will depend on your country of residence</Text>
                <TouchableOpacity style={[style.inputContainer, { backgroundColor: theme.btn, justifyContent: 'space-between', flexDirection: 'row' }]}
                >
                    <CountryPicker
                        withFlag
                        withFilter
                        onSelect={onSelectCountry}
                        visible={showPicker}
                        onClose={() => setshowPicker(false)}
                    />
                    <Text style={[style.txt1,]} >{[countryName]}</Text>
                </TouchableOpacity>
                <View style={{ justifyContent: 'flex-end', flex: 1 }}>
                    <Text style={[style.txt1]}>By pressing sign up securely, you agree to our <Text style={[style.txt1, { color: theme.txt }]}> Terms & Conditions</Text>and
                        <Text style={[style.txt1, { color: theme.txt }]}> Privacy policy.</Text></Text>
                    <View style={{ paddingVertical: 20 }}>
                        <TouchableOpacity style={[style.btn]}
                        onPress={()=>navigation.navigate('Verifyid')}
                        >
                            <Text style={[style.txt]}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}