import { View, Text, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS } from '../data/dummy-data' ;

const MealsOverviewScreen = ({route}) => {
    
    const catId = route.params.categoryId
    
    const displayedMeals = MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId) >=0
    })

    const renderMealItem = (itemData) => {
        const item = itemData.item
        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        }
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