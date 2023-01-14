import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          height: 100,
          width: 100,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "orange",
          height: 100,
          width: 100,

          position: "relative", // by default
          // with this property we can move the item relative to it's position without affecting the layout of other items
          // top: 20, // will move 20 independent pexels to down, since +y is downward

          bottom: 20,
          // same as
          // top: -20,

          left: 20,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "tomato",
          height: 100,
          width: 100,

          // absolute positioning --> item will move relative to it's parent, will affect the layout of other items
          position: "absolute",
          top: 20,
          left: 20,
        }}
      ></View>
      <ExpoStatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

/*

Absolute and relative positioning in react native

*/
