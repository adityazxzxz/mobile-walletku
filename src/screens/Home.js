import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  TextInput,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  StatusBar,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { AppBar } from "@react-native-material/core";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "../theme/color";
import theme from "../theme/theme";
import themeContext from "../theme/themeContex";
import style from "../theme/style";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import ATMCards from "./ATMCards";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Home() {
  const navigation = useNavigation();
  const theme = useContext(themeContext);

  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    let items = [
      {
        id: 1,
        title: "Ganti Oli",
        src: theme.serviceImg1,
      },
      {
        id: 2,
        title: "Isi Bensin",
        src: theme.serviceImg2,
      },
      {
        id: 3,
        title: "Service Motor",
        src: theme.serviceImg3,
      },
      {
        id: 4,
        title: "Ganti Sparepart",
        src: theme.serviceImg4,
      },
    ];
    setDataSource(items);
  }, []);

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <View style={[style.main, { backgroundColor: theme.bg }]}>
        <View style={{ marginTop: 20, flexDirection: "row" }}>
          <View>
            <Text style={style.txt1}>Hello</Text>
            <Text style={[style.title, { lineHeight: 26, color: theme.txt }]}>
              James Lee
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../../assets/image/gold.png")}
              resizeMode="stretch"
              style={{ width: width / 3, height: height / 17 }}
            ></Image>
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
        <ATMCards/>
          
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 10,
          }}
        >
          <View>
            <TouchableOpacity onPress={() => ""}>
              <Image
                source={theme.img1}
                resizeMode="stretch"
                style={{ height: height / 10, width: width / 4.3 }}
              ></Image>
            </TouchableOpacity>
            <Text
              style={[style.txt1, { color: theme.txt, textAlign: "center" }]}
            >
              Top-up
            </Text>
          </View>

          <View>
            <TouchableOpacity>
              <Image
                source={theme.img2}
                resizeMode="stretch"
                style={{ height: height / 10, width: width / 4.3 }}
              ></Image>
            </TouchableOpacity>
            <Text
              style={[style.txt1, { color: theme.txt, textAlign: "center" }]}
            >
              Withdraw
            </Text>
          </View>

          <View>
            <TouchableOpacity onPress={() => ""}>
              <Image
                source={theme.img3}
                resizeMode="stretch"
                style={{ height: height / 10, width: width / 4.3 }}
              ></Image>
            </TouchableOpacity>
            <Text
              style={[style.txt1, { color: theme.txt, textAlign: "center" }]}
            >
              Transfer
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <Text style={[style.txt1, { color: theme.txt }]}>Services</Text>
          <Text style={[style.txt1, { color: Colors.primary }]}>See all</Text>
        </View>
        {/* <Services/> */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <FlatList
            data={dataSource}
            height={800}
            renderItem={({ item }) => (
              <View style={{ flex: 1, flexDirection: "column", margin: 1 }}>
                <Image
                  resizeMode="contain"
                  style={{ height: height / 14, width: width / 4.5 }}
                  source={item.src}
                />
                <Text style={{ color: theme.txt, textAlign:'center' }}>{item.title}</Text>
              </View>
            )}
            //Setting the number of column
            numColumns={4}
            keyExtractor={(item, index) => index}
          />
        </View>

        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <Text style={[style.txt1, { color: theme.txt }]}>Transactions</Text>
          <Text style={[style.txt1, { color: Colors.primary }]}>See all</Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}
        >
          <View
            style={{
              backgroundColor: theme.back,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 15,
                paddingVertical: 10,
                borderRadius: 10,
              }}
            >
              <Image
                source={theme.apple}
                resizeMode="stretch"
                style={{ width: width / 9, height: height / 20 }}
              ></Image>
              <View style={{ marginHorizontal: 10 }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "600",
                    color: theme.txt,
                    marginBottom: 5,
                    fontFamily: "Itim-Regular",
                    lineHeight: 18,
                  }}
                >
                  Apple Store
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Icons
                    name="arrow-right-thin"
                    color={"red"}
                    size={25}
                  ></Icons>
                  <Text style={[style.subtxt, { lineHeight: 13 }]}>
                    iPhone 12 Case
                  </Text>
                </View>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  flex: 1,
                  alignItems: "flex-end",
                }}
              >
                <Text style={[style.subtxt, { color: theme.txt }]}>
                  - $120,90
                </Text>
                <Text style={[style.subtxt]}>09:39 AM</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 15,
                paddingVertical: 10,
                borderRadius: 10,
              }}
            >
              <Image
                source={theme.iiya}
                resizeMode="stretch"
                style={{ width: width / 9, height: height / 20 }}
              ></Image>
              <View style={{ marginHorizontal: 10 }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "600",
                    color: theme.txt,
                    marginBottom: 5,
                    fontFamily: "Itim-Regular",
                    lineHeight: 18,
                  }}
                >
                  Ilya Vasil
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Icons
                    name="arrow-left-thin"
                    color={"green"}
                    size={25}
                  ></Icons>
                  <Text style={[style.subtxt, { lineHeight: 13 }]}>
                    Finpay Card • 5318
                  </Text>
                </View>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  flex: 1,
                  alignItems: "flex-end",
                }}
              >
                <Text style={[style.subtxt, { color: theme.txt }]}>
                  + $50,00
                </Text>
                <Text style={[style.subtxt]}>09:39 AM</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 15,
                paddingVertical: 10,
                borderRadius: 10,
              }}
            >
              <Image
                source={require("../../assets/image/burgerking.png")}
                resizeMode="stretch"
                style={{ width: width / 9, height: height / 20 }}
              ></Image>
              <View style={{ marginHorizontal: 10 }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "600",
                    color: theme.txt,
                    marginBottom: 5,
                    fontFamily: "Itim-Regular",
                    lineHeight: 18,
                  }}
                >
                  Burger King
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Icons
                    name="arrow-right-thin"
                    color={"red"}
                    size={25}
                  ></Icons>
                  <Text style={[style.subtxt, { lineHeight: 13 }]}>
                    Cheeseburger XL
                  </Text>
                </View>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  flex: 1,
                  alignItems: "flex-end",
                }}
              >
                <Text style={[style.subtxt, { color: theme.txt }]}>
                  - $5,90
                </Text>
                <Text style={[style.subtxt]}>09:39 AM</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 15,
                paddingVertical: 10,
                borderRadius: 10,
                marginBottom: 90,
              }}
            >
              <Image
                source={theme.iiya}
                resizeMode="stretch"
                style={{ width: width / 9, height: height / 20 }}
              ></Image>
              <View style={{ marginHorizontal: 10 }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "600",
                    color: theme.txt,
                    marginBottom: 5,
                    fontFamily: "Itim-Regular",
                    lineHeight: 18,
                  }}
                >
                  Claudia Sarah
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Icons
                    name="arrow-left-thin"
                    color={"green"}
                    size={25}
                  ></Icons>
                  <Text style={[style.subtxt, { lineHeight: 13 }]}>
                    Finpay Card • 5318
                  </Text>
                </View>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  flex: 1,
                  alignItems: "flex-end",
                }}
              >
                <Text style={[style.subtxt, { color: theme.txt }]}>
                  + $100,00
                </Text>
                <Text style={[style.subtxt]}>09:39 AM</Text>
              </View>
            </View>
          </View>
        </ScrollView> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  imageThumbnail: {
    height: 60,
  },
});
