import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const MealItem = ({ title, imageUrl, duration, complexity, affordability }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.pressable}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: imageUrl }}
            style={styles.image}
            resizeMode="center"
          />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detail}>{duration}</Text>
          <Text style={styles.detail}>{complexity}</Text>
          <Text style={styles.detail}>{affordability}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "cyan",
    margin: 12,
  },

  imageContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 150,
  },

  title: {
    textAlign: "center",
    fontSize: 15,
  },
});
