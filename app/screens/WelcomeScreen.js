import React from "react";
import { ImageBackground, StyleSheet, View, Text, Image } from "react-native";

// rnsf  --> react native functional component with stylesheet and auto import BEST
function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/logo-red.png")}
        />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginBtn}></View>
      <View style={styles.registerBtn}></View>
    </ImageBackground>
  );
}

export default WelcomeScreen;

// comes from reactnative react snippet extension
// rnss --> react native style sheet
// unfortunately it should be imported maually from react-native
const styles = StyleSheet.create({
  background: {
    // it will set the entire image on a screen
    flex: 1,
    justifyContent: "flex-end", // since default main axis is vertical
    alignItems: "center",
  },
  loginBtn: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerBtn: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    // View is not set to flex still the items will start from flex-start hence for this conatiner we need to align items to the center
    alignItems: "center",
  },
});
