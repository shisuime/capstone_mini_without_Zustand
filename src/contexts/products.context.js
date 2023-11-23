import { createContext,useState } from "react";

import PRODUCTS from '../shop-data.json'

export const ProductsContext=createContext({
    products:[],
})

export const ProductsProviders=({children})=>{
    const [products,Setproducts]=useState(PRODUCTS)
    const value={products}

    return(
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}