import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <View style={styles.conatiner}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: colors.black,
    // to take the container the entire space
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    backgroundColor: colors.primary,
    top: 30,
    left: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    backgroundColor: colors.secondary,
    top: 30,
    right: 30,
  },
});
