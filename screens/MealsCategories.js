import { FlatList, StyleSheet, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsCategories = ({ route, navigation }) => {
  const categoryID = route.params.categoryID;

  const showMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryID) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryID
    ).title;

    navigation.setOptions({
      title: categoryTitle,
      headerBackTitle: "Back",
    });
  }, [navigation, categoryID]);

  const renderItem = (itemData) => {
    const item = itemData.item;
    const mealsProp = {
      id: item.id,
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
      />
    </View>
  );
};

export default MealsCategories;

const styles = StyleSheet.create({});
