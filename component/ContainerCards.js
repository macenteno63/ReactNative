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
  const [backgound, setBackgound] = useState(
    colorScheme === "dark" ? "dark" : "transparent"
  );
  Appearance.addChangeListener((scheme) => {
    scheme.colorScheme === "dark"
      ? setBackgound("black")
      : setBackgound("transparent");
    console.log(scheme);
  });

  return (
    <View style={[styles.container, { backgroundColor: backgound }]}>
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
