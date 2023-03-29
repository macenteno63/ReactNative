import { View, Image, StyleSheet, Text } from "react-native";
import Time from "./Time";

const CategoryAndLocation = (recipe) => {
  const recette = recipe.recipe;

  return (
    <View style={styles.categoryAndLocationContainer}>
      <Text style={styles.category}>{recette.strCategory}</Text>
      <Text style={styles.origin}>{recette.strArea}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryAndLocationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  category: {
    fontSize: 12,
    fontStyle: "italic",
    color: "#000",
  },
  origin: {
    fontSize: 12,
    fontStyle: "italic",
    color: "#000",
  },
});

export default CategoryAndLocation;
