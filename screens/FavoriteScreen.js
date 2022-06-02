import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";

const FavoriteScreen = () => {

    const favoriteMealsIds = useSelector(state => state.favoriteMeals.ids);
    const favoriteMeals = MEALS.filter((meal) => favoriteMealsIds.includes(meal.id))

    return (
        <MealsList items={favoriteMeals} />
    );
}

export default FavoriteScreen;