import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  StatusBar,
} from "react-native";
const bgImage = "./assets/background.jpg";
const logoImage = "./assets/logo-red.png";

let bgH = Dimensions.get("screen").height;
let bgW = Dimensions.get("screen").width;

export default function App() {
  console.log("Dimensions ", Dimensions.get("screen"));
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require(bgImage)}
        style={styles.bgImg}
        resizeMode="cover"
      >
        <View style={styles.sloganlogoImg}>
          <Image style={styles.sloganImg} source={require(logoImage)} />
          <Text style={styles.slogan}>Sell What You Don't Need</Text>
        </View>
        <View style={styles.footer}>
          <View style={[styles.f1, styles.f]} />
          <View style={[styles.f2, styles.f]} />
        </View>
      </ImageBackground>
      <ExpoStatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bgImg: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    width: bgW, // we can also use %width as 100%
    height: bgH, // 100%
  },
  sloganlogoImg: {
    top: +StatusBar.currentHeight + 40,
    flex: 1,
    alignItems: "center",
  },
  slogan: {
    width: 200,
  },
  sloganImg: {
    height: 100,
    width: 100,
  },
  f: {
    width: bgW,
    height: 50,
  },
  f1: {
    backgroundColor: "#fc5c65",
  },
  f2: {
    backgroundColor: "#4ECDC4",
  },
});
