import { CategoryContainer, CategoryTitle } from './category.style';
import {useParams} from 'react-router-dom';
import { useContext, useState, useEffect, Fragment } from 'react';
import { CategoryContext } from '../../contexts/category.contexts';
import ProductCard from '../../component/product-card/product-card.component';

const Category =() => {
    const { category } = useParams();
    const {categoriesMap} = useContext(CategoryContext);
    // console.log(categoryMap[category]);
    const[products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
            {
                products &&
                products.map((product) => <ProductCard key={product.id} product={product} />)
            }
        </CategoryContainer>
        </Fragment>
    )
}

export default Category;