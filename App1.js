import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
  Alert,
  Platform,
  // StatusBar,
} from "react-native";

// View will be translate natively to UIView to ios device and androidView on android, while compiling
// we are skipping the xocode and android simulator to run the app on desktop will be directly using the mobile devie
// shake your device to debug the app and open remote debugging it will open a new tab on you desktop
export default function App() {
  const [noOfLines, setNoOfLines] = useState(3);
  const [blur, setBlur] = useState(5);
  console.log("second");
  const handleNumberOfLines = () => {
    if (noOfLines == 3) {
      setNoOfLines(0);
    } else {
      setNoOfLines(3);
    }
  };
  const handleImgOnPress = () => {
    setBlur(0);
    setTimeout(() => {
      setBlur(5);
    }, 2000);
  };
  return (
    <SafeAreaView style={[styles.container, bgColor]}>
      <Text>My first app! 😎</Text>
      <Text onPress={handleNumberOfLines} numberOfLines={noOfLines}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        minima architecto molestiae fugiat error deserunt voluptate, ipsum quo!
        Voluptates sint nisi quasi, omnis reiciendis modi atque, eaque dolore ab
        aliquam totam cumque eveniet corrupti! Architecto similique blanditiis
        ad sunt? Quaerat numquam laudantium provident saepe aspernatur! Incidunt
        quas quaerat rerum culpa corrupti sapiente repudiandae a ipsa doloribus,
        magnam aperiam omnis deleniti, eligendi voluptate, hic voluptatem totam.
        Earum nostrum eius qui, consectetur minus esse mollitia ratione illo
        praesentium officia sapiente in quod sint dignissimos odit hic,
        aspernatur totam nihil? Aspernatur, harum. Reiciendis ducimus ullam rem
        accusamus numquam, est earum aperiam laborum fugit!
      </Text>
      {/* <Image source={require("./assets/favicon.png")}/> */}
      <View style={styles.img}>
        <TouchableWithoutFeedback onPress={handleImgOnPress}>
          <Image
            blurRadius={blur}
            resizeMode="contain"
            source={{
              uri: "https://crowdbotics.ghost.io/content/images/2020/10/React-Native-Featured-Image.png",
              width: 300,
              height: 200,
            }}
          />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.btn}>
        <Button
          color="blue"
          title="Click Me"
          onPress={() =>
            Alert.alert("My title", "My Message", [
              { text: "YES", onPress: () => console.log("Yes") },
              { text: "NO", onPress: () => console.log("NO") },
            ])
          }

          // onPress={() =>
          //   Alert.prompt("My Title", "My message", (text) => console.log(text))
          // }
        />
      </View>

      {/* <StatusBar style="auto" /> */}
      {/* why is this component over here ??  */}
    </SafeAreaView>
  );
}

// It looks like css but it's not css, the spelling are inspired by css in javasript
// StyleSheet.create will validate the properties inside it and give error if the property is not valid
// if we pass style = {{colorr: "red"}} --> color won't change as well no error will be shown
// we can pass a array of object to style as like multiple classes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
    // alignContent: "center",
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  img: {
    backgroundColor: "#111",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 10,
  },
  btn: {
    flex1: 1,
    padding: 10,
    width: 100,
    justifyContent: "center",
    alignContent: "center",
  },
});

const bgColor = StyleSheet.create({
  backgroundColor: "orange",
});

/*

View to SafeAreaView will add  a padding to the top to avoid component hiding behind the notch, valid only for ios
Text --> use for displaying text
Text component important props:   https://reactnative.dev/docs/text#numberoflines
numberOfLines --> used to truncate the text with the provided lines
onPress --> triggers a funciton on press to the text

Image --> <Image /> if we don't want to include anything in between the images tag
has a source props which has require function which takes a path to the LOCAL image url 
require function returns integers 
to pass the uri pass it as an object

Image component don't have onPress props hence we use Touchable : A wrapper for making views respond properly to touches


Alert --> onPress
Alert function 
onPress={() => {
            alert("Alert function");
          }}


Alert API need to import from React-native
wit couple of parameters
 onPress={() =>
            Alert.alert("My title", "My Message", [
              { text: "YES", onPress: () => console.log("Yes") },
              { text: "NO", onPress: () => console.log("NO") },
            ])
          }

this property of ALert only works on ios device
onPress={() =>
            Alert.prompt("My Title", "My message", (text) => console.log(text))
          }

platform specific code
Platform Api form React-native --> will show which device you are using
StatusBar Api from React-native --> will show properties of status bar


Layouts

*/
