import { Fragment, useContext } from "react";
import { CategoryContext } from "../../contexts/category.contexts";
import CategoryPreview from "../../component/category-preview/category-preview.component";


const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoryContext);
    return (
      <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        )

      })}
    </Fragment>
    )
}

export default CategoriesPreview;