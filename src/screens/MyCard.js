import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Dimensions,
  TextInput,
  Image,
  ScrollView,
  StatusBar,
  ImageBackground,
} from "react-native";
import React, { useState, useContext } from "react";
import { AppBar } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "../theme/color";
import themeContext from "../theme/themeContex";
import style from "../theme/style";
import { useNavigation } from "@react-navigation/native";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import ATMCards from "./ATMCards";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function MyCard() {
  const navigation = useNavigation();
  const theme = useContext(themeContext);

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <View style={[style.main, { backgroundColor: theme.bg }]}>
        <AppBar
          color={theme.bg}
          title="My cards"
          titleStyle={[style.title, { color: theme.txt }]}
          centerTitle={true}
          elevation={0}
        />

        <View style={{ marginTop: 20 }}>
          <ATMCards />
        </View>

        <View style={{ marginTop: 20 }}>
          <Image
            source={theme.card4}
            resizeMode="stretch"
            style={{ height: height / 7.5, width: width - 40 }}
          ></Image>
        </View>

        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("NewCard")}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: Colors.primary,
              alignItems: "center",
              paddingVertical: 13,
              borderRadius: 15,
              paddingHorizontal: 15,
            }}
          >
            <Text style={[style.txt1, { color: Colors.secondary }]}>
              Add card
            </Text>
            <Icon name="md-add-sharp" size={30} color={Colors.secondary}></Icon>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
