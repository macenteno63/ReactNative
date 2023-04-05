import React, {useEffect, useState} from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Appearance,
  useColorScheme,
  FlatList,
} from "react-native";
import Cards from "./Cards";
import {fetchRecette} from "../actions/actionsRecette";
import {useDispatch} from "react-redux";

const ContainerCards = ({ navigation, recipes }) => {
  const colorScheme = useColorScheme();
  const dispatch = useDispatch()
  const [cpt,setCpt] = useState(0)
  const [background, setBackground] = useState(
    colorScheme === "dark" ? "dark" : "transparent"
  );
  Appearance.addChangeListener((scheme) => {
    scheme.colorScheme === "dark"
      ? setBackground("black")
      : setBackground("transparent");
    console.log(scheme);
  });
  function loadMore(){
    console.log("test")
    setCpt(cpt+1)
    console.log(cpt)
    console.log(String.fromCodePoint('a'.charCodeAt(0)+cpt))
    dispatch(fetchRecette(String.fromCodePoint('a'.charCodeAt(0)+cpt)))
  }

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
        <FlatList
          data={recipes}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RecetteDetail", { recipe: item })
              }
              style={styles.card}
            >
              <Cards recipe={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(_item, index) => index.toString()}
          onEndReachedThreshold={0.5}
          onEndReached={()=>loadMore()}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display:'flex',
    alignItems: 'center',
    margin: 20,
  },
});

export default ContainerCards;
