import React from "react";
import {StyleSheet, Text, View, Image } from "react-native";
import HeaderCardDetailCategoryAndLocation from "./HeaderCardDetailCategoryAndLocation";

const HeaderCardDetail = (recipe) => {
  const recette = recipe.recipe;
  return (
    <View style={styles.topContainerImg}>
      <Text style={styles.title}>{recette.strMeal}</Text>
      <Image source={{ uri: recette.strMealThumb }} style={styles.image} />
      <HeaderCardDetailCategoryAndLocation recipe={recipe} />
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
    width: "100%",
    height: "90%",
    marginBottom: 10,
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
    paddingVertical: 30,
    borderRadius: 10,
    height: 250,
  },
});


export default HeaderCardDetail;