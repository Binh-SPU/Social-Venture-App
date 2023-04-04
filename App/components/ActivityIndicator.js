import React from "react";
import AnimatedLottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <View style={styles.overplay}>
      <AnimatedLottieView
        autoPlay
        loop
        source={require("../assets/animations/loading.json")}
      />
    </View>
  );
}

export default ActivityIndicator;

const styles = StyleSheet.create({
  overplay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    zIndex: 1,
    opacity: 0.8,
  },
});
