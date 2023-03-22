import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Appearance,
  useColorScheme,
  FlatList,
} from "react-native";
import Cards from "./Cards";

const ContainerCards = ({ navigation, recipes }) => {
  const colorScheme = useColorScheme();
  const [background, setBackground] = useState(
    colorScheme === "dark" ? "dark" : "transparent"
  );
  Appearance.addChangeListener((scheme) => {
    scheme.colorScheme === "dark"
      ? setBackground("black")
      : setBackground("transparent");
    console.log(scheme);
  });

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      {recipes !== null && (
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
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 20,
    flexWrap: "wrap",
  },
});

export default ContainerCards;
