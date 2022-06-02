import { Image, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealsDetailScreen = ({ route }) => {
    
    const selectMeal = MEALS.find((meal)=>meal.id === route.params.mealId)
    
    return (
        <ScrollView>
            <Image source={{uri: selectMeal.imageUrl}} />
            <Text>{selectMeal.title}</Text>
            <MealDetails
                duration ={selectMeal.duration}
                complexity = {selectMeal.complexity}
                affordability ={selectMeal.affordability}
                styleText = {styles.detailText}
            />
            
        </ScrollView>
    );
}

export default MealsDetailScreen;