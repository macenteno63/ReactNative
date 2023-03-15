import React from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { isEmpty } from "../util";

const CardDetail = ({ route }) => {
  const recette = route.params.recipe;
  function ingredient() {
    let ingredient = [];
    let test;
    for (let i = 1; i < 21; i++) {
      if (isEmpty(recette["strIngredient" + i])) break;
      test = "strIngredient" + i;
      ingredient.push(recette["strIngredient" + i]);
    }
    return ingredient;
  }

  return (
    <FlatList
      data={ingredient()}
      renderItem={({ item }) => <Text>- {item}</Text>}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={
        <>
          <HeaderCardDetail recipe={recette} />
          {/* <Text style={styles.title}>{recette.strMeal}</Text>
          <Image source={{uri:recette.strMealThumb}} style={styles.image} /> */}
          <Text>Categorie : {recette.strCategory}</Text>
          <Text>Origine : {recette.strArea}</Text>
          <Text>Recette : {recette.strInstructions}</Text>
          <Text style={styles.ingredient}>Liste des ingrédients : </Text>
        </>
      }
    />
  );
};

const HeaderCardDetail = (recipe) => {
  return (
    <View style={styles.topContainerImg}>
      <Text style={styles.title}>{recipe.recipe.strMeal}</Text>
      <Image
        source={{ uri: recipe.recipe.strMealThumb }}
        style={styles.image}
      />
      {/* <Text style={styles.category}>{recipe.recipe.strCategory}</Text> */}
      {/* <Text style={styles.origin}>{recipe.recipe.strArea}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    paddingVertical: 10,
  },
  image: {
    alignSelf: "center",
    marginBottom: 30,
    //Size fit to the container size
    width: "100%",
    height: "90%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
  },
  topContainerImg: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    marginVertical: 20,
    paddingHorizontal: 5,
    paddingVertical: 20,
    borderRadius: 10,
    height: 250,
  },
});

export default CardDetail;
