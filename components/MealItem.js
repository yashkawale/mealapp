import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("mealsDetailsScreen", {
      mealId: id,
    });
  };

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? [styles.pressed] : null)}
        onPress={handlePress}
      >
        <View style={styles.imageContainer}>
          <ImageBackground
            source={{ uri: imageUrl }}
            style={styles.image}
            resizeMode="cover"
          ></ImageBackground>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detail}>{duration} mins</Text>
          <Text style={styles.detail}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detail}>{affordability.toUpperCase()}</Text>
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
    backgroundColor: "white",
    margin: 12,
    borderRadius: 16,
  },

  pressed: {
    opacity: 0.9,
  },

  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 16,
  },

  image: {
    width: "100%",
    height: 175,
  },

  title: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "600",
    minWidth: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 3,
    color: "white",
  },

  detailsContainer: {
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
  },

  detail: {
    fontSize: 14,
  },
});
