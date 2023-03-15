import React, {useState} from "react";
import {StyleSheet,TouchableOpacity, View, Appearance,useColorScheme} from "react-native";
import Cards from "./Cards";
const ContainerCards = ({navigation,recipes}) => {
    const colorScheme = useColorScheme();
    const [backgound, setBackgound] = useState(colorScheme === 'dark' ? 'dark' : 'transparent');
    Appearance.addChangeListener((scheme)=>{
        scheme.colorScheme === 'dark' ? setBackgound('black') :setBackgound('transparent')
        console.log(scheme)
    })
    function createCards() {
        const cards = []
        for (let i = 0; i < recipes.length; i++) {
            cards.push(
                <TouchableOpacity onPress={()=> navigation.navigate("RecetteDetail", {"recipe":recipes[i]})}>
                    <Cards recipe={recipes[i]} key={i}></Cards>
                </TouchableOpacity>
            );
        }
        return cards
    }
    return (
        <View style={[styles.container, {backgroundColor: backgound}]}>
            {recipes !== null && createCards()}
            {/*<FlatList data={recipes} renderItem={(item)}*/}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 20,
        flexWrap: 'wrap',
    },
})

export default ContainerCards;