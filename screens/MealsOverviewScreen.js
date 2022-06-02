import { View, Text, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from '../data/dummy-data' ;
import { useEffect } from "react";

const MealsOverviewScreen = ({route, navigation}) => {
    
    const catId = route.params.categoryId
    
    const displayedMeals = MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId) >=0
    })

    useEffect(()=>{
        const categoryTitle = CATEGORIES.find((category)=> category.id === catId).title
        navigation.setOptions({
            title:  categoryTitle
        })
    },[catId, navigation])

    const renderMealItem = (itemData) => {
        const item = itemData.item
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        };
        console.log(mealItemProps);
        return  <MealItem {...mealItemProps} /> ;
    }

    return (
        <View style={style.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor = {(item)=>item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

export default MealsOverviewScreen;

const style = StyleSheet.create({
    container: {
        flex: 1 ,
        padding : 16
    }
})