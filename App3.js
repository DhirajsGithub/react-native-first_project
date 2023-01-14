import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        // flexDirection: "row-reverse",
        // flexDirection: "column-reverse",
        flexDirection: "row", // default
        // flexDirection: "column",  // default
        // justifyContent: "center",
        // justifyContent: "space-around",
        // justifyContent: "space-between",
        justifyContent: "space-evenly", // space will be evenly distributed to the number of items

        alignItems: "center",
        // alignItems: "flex-end",
        // alignItems: "baseline", // will align all items to the base of largest height item

        // alignItems: "stretch", // default, item without height will take entite cross axis

        // if items overflow across the main axis one or more items get shrunk to fit the space default behaviour
        flexWrap: "nowrap", // default
        flexWrap: "wrap",

        // NOTE: alignItems property determines the alignment of items within each line
        // If you wanna put all the items of cotainer at the center we use aligContent
        alignContent: "center",
        // NOTE: If we don't have wraping alignContent has no effect
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          // flex: 2,
          // height: 300,
          height: 100,
          width: 100,

          // alignSelf: "flex-start",     // individual alignment

          // if our main axis is horizontal axis then flexBasis is same as width
          flexBasis: 200, // width or height

          // flexGrow is similar to flex
          flexGrow: 1, // will take all the available space

          // flexShrink --> opposite of flexGrow or flex:-1/-2
          // if a item not necessary this one is overflowing and other items get shrink due to it

          // flexShrink: 1, // we are shrinking this item to minimum possible to get other items fit as possible
          // similar to flex: -1
          // not work if content is set to flexWrap: wrap
        }}
      ></View>
      <View
        style={{
          backgroundColor: "orange",
          // flex: 1,
          // height: 200,
          height: 100,
          width: 100,

          // for flex shrink
          // width: 400,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "tomato",
          // flex: 1,
          height: 100,
          width: 100,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "grey",
          // flex: 1,
          height: 100,
          width: 100,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "green",
          // flex: 1,
          height: 100,
          width: 100,
        }}
      ></View>
      <ExpoStatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 0.5,
    flex: 1,
    backgroundColor: "#fff",
  },
});

/*

Flex box :
  flex : 1 --> taking entire screen and aligning children inside the conatainer

  parent flex 1 :
    child_1 flex 2 
    child_2 flex 1
    child_3 flex 1 
    entire screen is taken by parent since it's flex 1
    screen is divided into 2 + 1 + 1 = 4 parts 
    half is taken by child_1 and 1/4 by child 2 and 3

setting width and height of the child : 
  without removing flex: 1/2/3/.. of the child we cannot set it's height, if flex direction is column and vice versa for flex direction to row

*/
