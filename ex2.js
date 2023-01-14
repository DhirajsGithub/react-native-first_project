import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

import { StyleSheet, View, Image, Dimensions, StatusBar } from "react-native";
const viewImage = "./assets/chair.jpg";

let bgH = Dimensions.get("screen").height;
let bgW = Dimensions.get("screen").width;

export default function App() {
  console.log("Dimensions ", Dimensions.get("screen"));
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.nav}>
          <View style={styles.navItems}>
            <View style={[styles.item1, styles.item]} />
            <View style={[styles.item2, styles.item]} />
          </View>
        </View>
        <Image
          source={require(viewImage)}
          style={styles.viewImage}
          resizeMode="contain"
        />
      </View>

      <ExpoStatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  main: {
    flex: 1,
    justifyContent: "space-between",
  },
  viewImage: {
    height: "60%",
    width: bgW,
    bottom: "20%",
  },
  navItems: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    top: StatusBar.currentHeight,
  },
  item: {
    width: 50,
    height: 50,
  },
  item1: {
    backgroundColor: "#fc5c65",
    marginLeft: 20,
  },
  item2: {
    backgroundColor: "#4ECDC4",
    marginRight: 20,
  },
});
