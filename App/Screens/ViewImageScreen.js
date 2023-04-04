import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.closeButton}>
          <MaterialCommunityIcons name="close" color="white" size={35} />
        </View>
        <View style={styles.secondButton}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            color="white"
            size={35}
          />
        </View>
      </View>
      <ImageBackground
        resizeMode="contain"
        style={styles.image}
        source={require("../../chair.jpg")}
      ></ImageBackground>
    </View>
  );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  image: {
    flex: 1,
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 50,
    justifyContent: "space-between",
  },
  closeButton: {
    marginLeft: 50,
  },
  secondButton: {
    marginRight: 50,
  },
});
