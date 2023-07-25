import { createSlice } from "@reduxjs/toolkit";
import ProductsJSON from "../../Data/products.json"
import CategoriesJSON from "../../Data/categories.json"

export const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        value: {
            categorySelected: '',
            idSelected: '',
            allProducts: ProductsJSON,
            allCategories: CategoriesJSON,
            productsSelected: [],
            productSelected: {},
            nameProductSelected: ''
        }
    },
    reducers: {
        setCategorySelected: (state, action) => {
            state.value.categorySelected = action.payload
            state.value.productsSelected = state.value.allProducts.filter(product => product.category === state.value.categorySelected)
        },
        setIdSelected: (state, action) => {
            state.value.idSelected = action.payload
            state.value.productSelected = state.value.allProducts.find(product => product.id === state.value.idSelected)
            state.value.nameProductSelected = state.value.productSelected.title
        }
    }
})

export const { setCategorySelected, setIdSelected } = shopSlice.actions

export default shopSlice.reducer