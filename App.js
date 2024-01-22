import { View, StyleSheet } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MealsCategories from "./screens/MealsCategories";
import MealsDetailsScreen from "./screens/MealsDetailsScreen";
import Favorites from "./screens/Favorites";
import Icon from "./components/Icon";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
export default function App() {
  const HandleBottomTabNavigation = () => {
    return (
      <BottomTab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#E8CBC0",
          },
          headerStyle: {
            backgroundColor: "#E8CBC0",
          },
          headerTintColor: "#3A1C71",
          tabBarActiveTintColor: "#3A1C71",
        }}
      >
        <BottomTab.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="list" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="star" color={color} size={size} />
            ),
          }}
        />
      </BottomTab.Navigator>
    );
  };
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HandleBottomTabNavigation}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="mealsCategories"
            component={MealsCategories}
            options={{
              headerStyle: {
                backgroundColor: "#E8CBC0",
              },
              contentStyle: {
                backgroundColor: "#E8CBC0",
              },
            }}
          />
          <Stack.Screen
            name="mealsDetailsScreen"
            component={MealsDetailsScreen}
            options={{
              headerStyle: {
                backgroundColor: "#E8CBC0",
              },
              contentStyle: {
                backgroundColor: "#E8CBC0",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
