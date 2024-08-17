import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../category-preview.component.js/category-preview.component";

const CategoriesPreviewPage = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  console.log(categoriesMap, "categoriesMap");
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];

        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreviewPage;
