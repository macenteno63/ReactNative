import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BodyCardDetail = (recipe) => {
  const recette = recipe.recipe;

  return (
    <View style={styles.bodyCardDetailContainer}>
      <Text style={styles.instructions}>
        Steps : {"\n\n" + recette.strInstructions}
      </Text>
      <Text style={styles.ingredient}>Ingredients : </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FCF8F8",
  },
  bodyCardDetailContainer: {
    marginHorizontal: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  ingredient: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 10,
    paddingTop: 30,
  },
  ingredients: {
    fontSize: 14,
    marginHorizontal: 10,
    paddingVertical: 1,
  },
  instructions: {
    fontSize: 14,
    backgroundColor: "#fff",
    padding: 10,
  },
});

export default BodyCardDetail;
