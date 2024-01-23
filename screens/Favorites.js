import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import FavoritesContext from "../store/context/FavoritesContext";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const Favorites = () => {
  const favContext = useContext(FavoritesContext);

  const favMeals = MEALS.filter((meal) => favContext.ids.includes(meal.id));

  if (favMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No favorite meals added yet!</Text>
      </View>
    );
  }

  return <MealList items={favMeals} />;
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: "#3A1C71",
    fontSize: 16,
  },
});
