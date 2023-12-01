import "./Directory-item.styles.scss"
import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { CategoriesContext } from "../../contexts/categories.context"
import ProductCard from "../Product-card/product-card.component"

const DirectoryItem=()=>{
    const{category}=useParams()
    const{categoriesMap}=useContext(CategoriesContext)
    const [products,SetProducts]=useState(categoriesMap[category])

    useEffect(()=>{
        SetProducts(categoriesMap[category])
    },[category,categoriesMap])

    return(
        <>
        <h2>{category.toUpperCase()}</h2>
         <div className="Directory-item-container">
            
           {products &&
            products.map((product)=><ProductCard key={product.id} product={product}/>)
           }
        </div>
        </>
       
    )
}

export default DirectoryItem