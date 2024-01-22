import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import FavoritesButton from "../components/FavoritesButton";

const MealsDetailsScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const handleFavorites = () => {
    console.log("Pressed!");
  };

  useLayoutEffect(() => {
    const mealTitle = MEALS.find((meal) => meal.id === mealId).title;
    navigation.setOptions({
      title: mealTitle,
      headerBackTitle: "Back",
      headerRight: () => <FavoritesButton onPress={handleFavorites} />,
    });
  }, [mealId, navigation]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: selectedMeal.imageUrl }}
          resizeMode="cover"
        />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.detail}>{selectedMeal.duration} mins</Text>
          <Text style={styles.detail}>
            {selectedMeal.complexity.toUpperCase()}
          </Text>
          <Text style={styles.detail}>
            {selectedMeal.affordability.toUpperCase()}
          </Text>
        </View>
        <View style={styles.ingredientsContainer}>
          <Text style={styles.titleList}>Ingredients</Text>
          {selectedMeal.ingredients.map((ingredient) => (
            <View style={styles.listContainer} key={ingredient}>
              <Text style={styles.list} key={ingredient}>
                {ingredient}
              </Text>
            </View>
          ))}
        </View>
        <View style={styles.stepsContainer}>
          <Text style={styles.titleList}>Steps</Text>
          {selectedMeal.steps.map((step) => (
            <View style={styles.listContainer} key={step}>
              <Text style={styles.list} key={step}>
                {step}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default MealsDetailsScreen;

const styles = StyleSheet.create({
  container: {
    margin: 12,
    borderRadius: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.7,
    shadowRadius: 8,
  },

  image: {
    width: "100%",
    height: 200,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },

  title: {
    fontSize: 25,
    textAlign: "center",
    padding: 10,
    textDecorationLine: "underline",
  },

  detailsContainer: {
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
  },

  detail: {
    fontSize: 14,
  },

  titleList: {
    color: "#636FA4",
    fontSize: 20,
    padding: 10,
    textDecorationLine: "underline",
  },

  ingredientsContainer: {
    alignItems: "center",
    padding: 10,
  },

  stepsContainer: {
    padding: 10,
    alignItems: "center",
  },

  listContainer: {
    backgroundColor: "#E8CBC0",
    borderRadius: 8,
    marginVertical: 4,
    minWidth: "90%",
    maxWidth: "90%",
  },

  list: {
    textAlign: "center",
    padding: 5,
  },
});
