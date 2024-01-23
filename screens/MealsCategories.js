import React, { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";

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

  return <MealList items={showMeals} />;
};

export default MealsCategories;
