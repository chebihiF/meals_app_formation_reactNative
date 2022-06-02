import { Text, View, StyleSheet } from "react-native";

const MealDetails = ({duration, complexity, affordability, styleText, style}) => {
    return (
      <View style={[styles.details, style]}>
          <Text style={[styles.detailItem, styleText]}>{duration}</Text>
          <Text style={[styles.detailItem, styleText]}>{complexity}</Text>
          <Text style={[styles.detailItem, styleText]}>{affordability}</Text>
      </View>  
    );
}

export default MealDetails;

const styles = StyleSheet.create({
    details: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 8,
    },
    detailItem: {
      marginHorizontal: 4,
      fontSize: 12,
    },
  });