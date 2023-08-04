import React from "react";
import {
  Image,
  ImageBackground,
  Text,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function ATMCards() {
  const ecardLayout = [
    {
      rightCornerIcon: require("../../assets/image/visa_mask_logo.png"),
      backgroundImage: require("../../assets/image/background_purple.png"),
      logo: require("../../assets/image/brijago.png"),
      logoCard: require("../../assets/image/mastercard_logo.png"),
      limit: "Rp.1.000.000",
      cardNumber: "**** ****  **** 1990",
      cardMembership: "Platinum Plus",
      cardExp: "04/22",
      cardHolderName: "Sunny Aveiro",
    },
    // {
    //   rightCornerIcon: require("../../assets/image/visa_mask_logo.png"),
    //   backgroundImage: require("../../assets/image/background_black.png"),
    //   logo: require("../../assets/image/logo_bank.png"),
    //   logoCard: require("../../assets/image/visa_logo.png"),
    //   cardNumber: "**** ****  **** 1690",
    //   cardMembership: "Platinum",
    //   cardExp: "01/22",
    //   cardHolderName: "Sunny Aldevco",
    // },
  ];
  return (
    <ScrollView
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      nestedScrollEnabled={true}
    >
      {ecardLayout.map((data, index) => {
        return (
          <ImageBackground
            key={index}
            style={styles.card}
            source={data.backgroundImage}
          >
            <ImageBackground
              style={styles.cardMask}
              source={data.rightCornerIcon}
            />
            <View style={styles.cardContent}>
              <Image source={data.logo} style={styles.cardLogo} />
              <View style={styles.cardMembership}>
                {/* <Text style={{ color: "#fff" }}>{data.cardMembership}</Text> */}
                <Text
                  style={{ color: "#fff", fontSize: 16, fontWeight: "700" }}
                >
                  Limit: {data.limit}
                </Text>
                <Text style={{ color: "#fff" }}>{data.cardNumber}</Text>
              </View>
              <View style={styles.cardMembership}>
                <Text
                  style={{ color: "#fff", fontSize: 16, fontWeight: "700" }}
                >
                  {data.cardHolderName}
                </Text>
                <Text style={{ color: "#fff" }}>Exp {data.cardExp}</Text>
                {/* <Image source={data.logoCard} /> */}
              </View>
            </View>
          </ImageBackground>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "Montserrat",
    paddingHorizontal: 10,
  },
  textStyles: {
    color: "#2F394E",
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "700",
  },
  textSeeAll: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 26,
  },
  card: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    height: 200,
    width: 340,
    borderRadius: 20,
    margin: 10,
    position: "relative",
    zIndex: 10,
    padding: 20,
  },
  cardMask: {
    height: 200,
    width: 327,
    zIndex: 11,
    position: "absolute",
    top: 10,
    right: 5,
  },
  cardContent: {
    width: "100%",
    paddingHorizontal: 5,
    position: "relative",
    zIndex: 12,
  },
  cardLogo: {
    marginTop: 0,
    marginBottom: 30,
  },
  cardMembership: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
});
