import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsCategories from "./screens/MealsCategories";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient style={styles.container} colors={["#E8CBC0", "#636FA4"]}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="categoriesScreen"
              component={CategoriesScreen}
            />
            <Stack.Screen name="mealsCategories" component={MealsCategories} />
          </Stack.Navigator>
        </NavigationContainer>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
