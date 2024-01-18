import './category.style.scss';
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
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-container'>
            {
                products &&
                products.map((product) => <ProductCard key={product.id} product={product} />)
            }
        </div>
        </Fragment>
    )
}

export default Category;