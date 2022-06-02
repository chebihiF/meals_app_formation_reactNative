import { configureStore } from '@reduxjs/toolkit'
import favoriteReducer from './favotites'

export const store = configureStore({
    reducer: {
        favoriteMeals: favoriteReducer
    }
})