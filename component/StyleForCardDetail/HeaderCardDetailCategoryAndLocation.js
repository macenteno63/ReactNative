import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HeaderCardDetailCategoryAndLocation = (recipe) => {
  const recette = recipe.recipe.recipe;
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

export default HeaderCardDetailCategoryAndLocation;
