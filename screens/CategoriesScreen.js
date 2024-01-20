import { View, Text, FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGrid from "../components/CategoryGrid";

const CategoriesScreen = ({ navigation }) => {
  const renderCategories = (itemData) => {
    const handlePress = () => {
      navigation.navigate("mealsCategories", { categoryID: itemData.item.id });
    };
    return (
      <CategoryGrid
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={handlePress}
      />
    );
  };
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategories}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;
