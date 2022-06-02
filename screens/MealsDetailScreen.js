import { Image, ScrollView, View, StyleSheet,Text } from "react-native";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from '../store/redux/favotites'

const MealsDetailScreen = ({ route, navigation }) => {

    const mealId = route.params.mealId
    const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids)
    const dispatch = useDispatch();
    const mealsFavorite = favoriteMealsIds.includes(mealId)

    const headerButtonPressedHandler = () => {
        
        console.log(mealsFavorite)
        console.log(favoriteMealsIds)
        console.log(mealId);
        if(mealsFavorite){
            dispatch(removeFavorite({id: mealId}))
        }else{
            dispatch(addFavorite({id: mealId}))
        }
    }
    
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: ()=>{
                return <IconButton name={mealsFavorite? 'star' : 'star-outline'} size={24} color='white' onPress={headerButtonPressedHandler} />
            }
        });
    },[navigation, headerButtonPressedHandler])


    
    const selectMeal = MEALS.find((meal)=>meal.id === route.params.mealId)
    
    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{uri: selectMeal.imageUrl}} style={styles.image} />
            <Text style={styles.title}>{selectMeal.title}</Text>
            <MealDetails
                duration ={selectMeal.duration}
                complexity = {selectMeal.complexity}
                affordability ={selectMeal.affordability}
                styleText = {styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectMeal.steps} />
                </View>
            </View>

        </ScrollView>
    );
}

export default MealsDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
      marginBottom: 32
    },
    image: {
      width: '100%',
      height: 350,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 24,
      margin: 8,
      textAlign: 'center',
      color: 'white',
    },
    detailText: {
      color: 'white',
    },
    listOuterContainer: {
      alignItems: 'center',
    },
    listContainer: {
      width: '80%',
    },
  });