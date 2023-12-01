import { createContext,useState,useEffect } from "react";


import { getCollectionAndDocuments } from "../utils/Firebase/Firebase.utils";

export const CategoriesContext=createContext({
    categoriesMap:{},
})

export const CategoriesProviders=({children})=>{
    const [categoriesMap,SetCategoriesMap]=useState({})
    useEffect(()=>{
        const getCategoryMap= async () =>{
            const categoryMap= await getCollectionAndDocuments()
            
            SetCategoriesMap(categoryMap)
        }
        getCategoryMap()
        
    },[])

    const value={categoriesMap}

    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}