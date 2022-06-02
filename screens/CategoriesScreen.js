import { CATEGORIES } from '../data/dummy-data';
import { FlatList } from 'react-native'

const renderCategoryItem = (itemData) => {
    return itemData.item.title;
}

const CategoriesScreen = () => {
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor = {(item) => item.id}
            numColumns={2}
            renderItem={renderCategoryItem}
        />
    );
}

export default CategoriesScreen;