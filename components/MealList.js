import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import MealItem from "./MealItem";

const MealList = ({ items }) => {
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
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({});
