import React from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { isEmpty } from "../util";
import HeaderCardDetail from "./StyleForCardDetail/HeaderCardDetail";
import BodyCardDetail from "./StyleForCardDetail/BodyCardDetail";


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
      style={styles.container}
      data={ingredient()}
      renderItem={({ item }) => (
        <Text style={styles.ingredients}>- {item}</Text>
      )}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={
        <>
          <HeaderCardDetail recipe={recette} />
          <BodyCardDetail recipe={recette} />
        </>
      }
    />
  );
};

const styles = StyleSheet.create({
  ingredients: {
    fontSize: 14,
    marginHorizontal: 10,
    paddingVertical: 1,
  },
});

export default CardDetail;
