import { Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const FavoritesButton = ({ onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => (pressed ? styles.pressed : null)}
    >
      <Ionicons name="star" size={24} color="#3A1C71" />
    </Pressable>
  );
};

export default FavoritesButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
