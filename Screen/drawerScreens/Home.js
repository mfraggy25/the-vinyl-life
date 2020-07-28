import React from "react";

//Import all required component
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const Home = () => {
  global.currentScreenIndex = "Home";
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>THE VINYL LIFE</Text>
        <Image
          source={require("../../assets/VinylLogo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>
          A community for Vinyl collectors of all kinds!
        </Text>
        <Text style={styles.text}>
          Buy, sell, trade, discuss, and discover!
        </Text>
      </View>
    </View>
  );
};
export default Home;
const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edbbf6",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    marginTop: 5,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});
