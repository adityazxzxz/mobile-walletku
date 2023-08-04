import {
    View, Text,
    FlatList,
    SafeAreaView,
    Dimensions,
    TouchableOpacity,
} from 'react-native'
import React, { useState, useContext } from 'react'
import Slides from './Slides'
import IntroItem from './IntroItem'
import { useNavigation } from '@react-navigation/native';
import style from '../theme/style'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import { Colors } from '../theme/color';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Introduction() {
    const ref = React.useRef(null);
    const navigation = useNavigation();
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const theme = useContext(themeContext);

    const Footer = () => {
        return <View style={{paddingHorizontal:20}}>
            <View style={{ flexDirection: 'row',justifyContent:'center',}}>
                {Slides.map((_, index) =>
                (
                    <View key={index}
                        style={[style.indicator, currentSlideIndex === index && {
                            borderColor: Colors.primary,
                            borderWidth: 1,
                            paddingHorizontal: 15,
                            borderRadius: 10,
                            backgroundColor: Colors.primary
                        },
                        ]}
                    />

                ))}

            </View>
            {currentSlideIndex == 0 ?(
                <View style={{}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}
                style={[style.btn,{backgroundColor:Colors.primary,marginTop:70}]}>
                    <Text style={[style.txt1,{color:Colors.secondary}]}>Login</Text>
                </TouchableOpacity>
                 <TouchableOpacity onPress={()=>navigation.navigate('Signup')}
                 style={[style.btn,{marginVertical:10,alignItems:'center',backgroundColor:theme.btn}]}>
                    <Text style={[style.txt,{color:Colors.primary}]}>Create an account</Text>
                 </TouchableOpacity>
                </View>
            ):(
                <View>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')} 
                style={[style.btn,{backgroundColor:Colors.primary,marginTop:70}]}>
                    <Text style={[style.txt1,{color:Colors.secondary, }]}>Login</Text>
                </TouchableOpacity>
                 <TouchableOpacity onPress={()=>navigation.navigate('Signup')}
                 style={[style.btn,{marginVertical:10,alignItems:'center',backgroundColor:theme.btn}]}>
                    <Text style={[style.txt,{color:Colors.primary}]}>Create an account</Text>
                 </TouchableOpacity>
                </View>
            )}
            <View>
            </View>
        </View>

    }
    const updateCurrentSlideIndex = (e) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != Slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current?.scrollToOffset({ offset });
            setCurrentSlideIndex(nextSlideIndex);
        }

    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList data={Slides}
                ref={ref}
                renderItem={({ item }) => <IntroItem item={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.id}
            onMomentumScrollEnd={updateCurrentSlideIndex}


            />
            <Footer />
        </SafeAreaView>
    )
}