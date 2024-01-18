import { createContext, useState, useEffect } from "react";

// import SHOP_DATA from '../shop-data.js';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.jsx'

export const CategoryContext = createContext({
    categoriesMap:{}
});

export const CategoriesProvider = ({children}) => {

    // useEffect(() => {
    //     addCollectionAndDocument('categories', SHOP_DATA)
    // }, []);

    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            // console.log(categoryMap);
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    }, []);
    const value = {categoriesMap};

   return ( <CategoryContext.Provider value ={value}>{children}</CategoryContext.Provider> )
}