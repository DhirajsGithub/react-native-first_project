import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Dimensions,
} from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  // console.log(Dimensions.get("window"));
  // console.log(Dimensions.get("screen"));
  console.log(useDimensions());
  console.log(useDeviceOrientation());

  const { landscape, portrait } = useDeviceOrientation();

  return (
    <View style={[styles.container]}>
      <View>
        <Text>APP</Text>
        <View
          style={{
            backgroundColor: "orange",
            width: "100%",
            height: landscape ? "100%" : "30%",
          }}
        ></View>
      </View>
      <ExpoStatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

/*
Layouts : 
  Dimensions : 
  without any units the numbers are DIPs Density Independent Pexels 
  Physical Pexels = DIPs*scale_factor

  e.g. iphoe 4, 4s 
  points = 320 x 480
  scale factor = 2x (number of pexel per point)
  pexels = 640 x 960  screen resolution 
  View width = 150 x scale factor = 300

to find size of a component according to the size of the screen : 
  Dimensions.get("screen" or "window")
  for android screen(whole screen) and window(visible screen) are different sizes on ios they are same

detecting orientation changes : 
  change orientation to default, so that it can support both portratit and landscape view
  to overcome the dimensions api in react-native the useDimensions hooks helps to provide updated dimension in portrati and landscape
  $ npm install @react-native-community/hooks

% unit still holds with respect to the parent

*/
