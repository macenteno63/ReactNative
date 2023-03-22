import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Categorie = ({ name, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "black",
    padding: 5,
  },
  text: {
    color: "white",
  },
});
export default Categorie;
