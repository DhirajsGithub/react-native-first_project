import { StyleSheet, Text, View } from "react-native";
import React from "react";
import WelcomeScreen from "./screens/WelcomeScreen";
import ViewImageScreen from "./screens/ViewImageScreen";

// rnsf
export default function Index() {
  // dont' trap it in a View
  //   return <WelcomeScreen />;
  return <ViewImageScreen />;
}

const styles = StyleSheet.create({});
