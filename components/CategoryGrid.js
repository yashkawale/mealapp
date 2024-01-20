import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ImageBackground,
} from "react-native";
import React from "react";

const CategoryGrid = ({ title, color, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "white" }}
        style={({ pressed }) =>
          pressed ? [styles.pressable, styles.pressed] : [styles.pressable]
        }
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <ImageBackground
            style={styles.imageBackground}
            source={{ uri: color }}
            resizeMode="contain"
          ></ImageBackground>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGrid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 125,
    borderRadius: 20,
    margin: 12,
    backgroundColor: "white",
    overflow: "hidden",
  },

  pressable: {
    flex: 1,
    borderRadius: 30,
  },

  pressed: {
    opacity: 0.5,
  },

  imageBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    overflow: "hidden",
  },

  innerContainer: {
    flex: 1,
  },

  titleContainer: {
    minWidth: 140,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: 3,
    marginTop: 6,
  },

  title: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    color: "#3A1C71",
  },
});
