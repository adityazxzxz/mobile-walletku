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
  Switch,
} from "react-native";
import React, { useState, useContext } from "react";
import { AppBar } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "../theme/color";
import theme from "../theme/theme";
import themeContext from "../theme/themeContex";
import style from "../theme/style";
import { useNavigation } from "@react-navigation/native";
import { EventRegister } from "react-native-event-listeners";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Profile() {
  const navigation = useNavigation();
  const theme = useContext(themeContext);
  const [darkMode, setDarkMode] = useState("false");
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  // const [visible, setVisible] = useState(false)

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.background }]}>
      <StatusBar
        backgroundColor={theme.background}
        barStyle={theme.barStyle}
        translucent={false}
      />

      <View style={{ marginTop: 20, marginHorizontal: 20 }}></View>

      <View
        style={{
          flex: 1,
          backgroundColor: theme.back,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          paddingHorizontal: 20,
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}
        >
          <View style={{ alignItems: "flex-end", marginTop: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
              <Icon name="md-settings-sharp" size={27} color={theme.txt}></Icon>
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}
          >
            <Image
              source={require("../../assets/image/daniel.png")}
              resizeMode="stretch"
              style={{ width: width / 4.5, height: height / 10 }}
            ></Image>
            <View style={{ marginHorizontal: 10 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "600",
                  color: theme.txt,
                  marginBottom: 5,
                  fontFamily: "Itim-Regular",
                }}
              >
                Daniel Travis
              </Text>
              <Image
                source={require("../../assets/image/member.png")}
                resizeMode="stretch"
                style={{ width: width / 3, height: height / 25 }}
              ></Image>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <TouchableOpacity onPress={() => navigation.navigate("Account")}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "600",
                    color: Colors.primary,
                    marginBottom: 5,
                    fontFamily: "Itim-Regular",
                  }}
                >
                  Edit Profile
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={[style.txt1, { color: theme.txt }]}>Owerview</Text>
          </View>

          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <View
              style={{
                backgroundColor: theme.btn,
                width: width / 2.5,
                height: height / 8,
                paddingLeft: 15,
                justifyContent: "center",
                borderRadius: 20,
              }}
            >
              <Text style={[style.txt1, { color: theme.txt }]}>Net Income</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../../assets/image/Vector.png")}
                  resizeMode="stretch"
                  style={{ height: height / 35, width: width / 15 }}
                ></Image>
                <Text
                  style={[
                    style.title,
                    { color: theme.txt, paddingHorizontal: 10 },
                  ]}
                >
                  $4,500
                </Text>
              </View>
            </View>

            <View style={{ padding: 10 }}></View>

            <View
              style={{
                backgroundColor: theme.btn,
                width: width / 2.5,
                height: height / 8,
                justifyContent: "center",
                borderRadius: 20,
                paddingLeft: 15,
              }}
            >
              <Text style={[style.txt1, { color: theme.txt }]}>Expense</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../../assets/image/Outcome.png")}
                  resizeMode="stretch"
                  style={{ height: height / 28.5, width: width / 12 }}
                ></Image>
                <Text
                  style={[
                    style.title,
                    { color: theme.txt, paddingHorizontal: 10 },
                  ]}
                >
                  $1,691
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              marginVertical: 20,
              backgroundColor: theme.btn,
              padding: 15,
              borderRadius: 20,
            }}
          >
            <Text style={[style.txt1, { color: theme.txt }]}>
              Spend this week
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/image/Bar.png")}
                resizeMode="stretch"
                style={{ height: height / 55, flex: 1 }}
              ></Image>
              <Text
                style={[
                  style.title,
                  { color: theme.txt, paddingHorizontal: 10 },
                ]}
              >
                $124
              </Text>
            </View>
            <Text style={style.txt1}>$124 left to spend</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 10,
              backgroundColor: theme.btn,
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Text style={[style.txt1, { color: theme.txt }]}>Dark Mode</Text>
            {/* <Switch
                            
                            value={darkMode}
                            onValueChange={
                                (value) => {
                                    setDarkMode(value);
                                    EventRegister.emit('ChangeTheme', value)
                                }
                            }
                        /> */}
            <Switch
              trackColor={{ false: Colors.disable, true: Colors.primary }}
              thumbColor={isEnabled ? Colors.secondary : "#f4f3f4"}
              value={darkMode}
              onValueChange={(value) => {
                setDarkMode(value);
                EventRegister.emit("ChangeTheme", value);
              }}
            />
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 15,
              paddingVertical: 10,
              backgroundColor: theme.txt,
              borderRadius: 20,
            }}
          >
            <Image
              source={theme.message}
              resizeMode="stretch"
              style={{ width: width / 9, height: height / 20 }}
            ></Image>
            <View style={{ marginHorizontal: 10 }}>
              <Text style={[style.subtxt, { color: theme.btn }]}>
                Got any questions for Finpay?
              </Text>
              <Text
                style={[style.subtxt, { lineHeight: 13, color: theme.btn }]}
              >
                Our CS are ready 24/7 to help!
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
                <Icon name="chevron-forward" size={25} color={theme.btn}></Icon>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ paddingHorizontal: 10, marginTop: 30 }}>
            <Text style={[style.txt1, { textAlign: "center" }]}>
              You joined Finpay on September 2021. It's been 1 month since then
              and our mission is still the same, help you better manage your
              finance.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={{ paddingTop: 20, alignItems: "center", marginBottom: 120 }}
          >
            <Text style={[style.txt, { color: "#FB4E4E" }]}>Log Out</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
