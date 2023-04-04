import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <Image
        style={styles.icon}
        source={require("../assets/logo-red.png")}
      ></Image>
      <Text style={styles.text}>Sell What You Don't Need</Text>
      <View style={styles.buttonStyle}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  buttonStyle: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 60,
  },
  icon: {
    top: 100,
    width: 100,
    height: 100,
    alignSelf: "center",
    position: "absolute",
  },
  text: {
    alignSelf: "center",
    top: 210,
    position: "absolute",
    fontSize: 25,
    fontWeight: 600,
    paddingVertical: 20,
  },
});
