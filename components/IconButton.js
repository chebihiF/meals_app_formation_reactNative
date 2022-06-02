import { Ionicons } from '@expo/vector-icons'
import { Pressable, StyleSheet, View } from 'react-native';

const IconButton = ({onPress, size, color, name}) => {
    return (
        <Pressable 
            onPress={onPress}
            style={({pressed})=> pressed && styles.pressed}
            >
            <Ionicons name='star' size={size} color={color} />
        </Pressable>
    );
}

export default IconButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
})