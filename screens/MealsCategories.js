import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsCategories = ({ route }) => {
  const categoryID = route.params.categoryID;

  const showMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryID) >= 0;
  });

  const renderItem = (itemData) => {
    const item = itemData.item;
    const mealsProp = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealsProp} />;
  };
  return (
    <View>
      <FlatList
        data={showMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
};

export default MealsCategories;

const styles = StyleSheet.create({});
