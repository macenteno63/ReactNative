import React, {useState} from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import TopLayer from "./TopLayer";
import ContainerCards from "./ContainerCards";
import { useSelector } from "react-redux";
import Categorie from "./Categorie";

const Home = ({ navigation }) => {
  const recipes = useSelector((state) => state.recette.recettes) || [];
  const [selectedCategory, setSelectedCategory] = useState(null);


  const filteredRecipes = recipes.filter(
    (recipe) => !selectedCategory || recipe.strCategory === selectedCategory
  );

  return (
    <ScrollView>
      <TopLayer />
      <View style={styles.container}>
        <Categorie name="All" onPress={() => setSelectedCategory(null)} />
        <Categorie
          name="Vegetarian"
          onPress={() => setSelectedCategory("Vegetarian")}
        />
        <Categorie
          name="Dessert"
          onPress={() => setSelectedCategory("Dessert")}
        />
        <Categorie name="Beef" onPress={() => setSelectedCategory("Beef")} />
      </View>
      <ContainerCards navigation={navigation} recipes={filteredRecipes} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
});
export default Home;
