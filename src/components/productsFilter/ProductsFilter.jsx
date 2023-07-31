import { useContext } from 'react';
import './ProductsFilter.css';
import { ProductsContext } from '../../context/products.context';

const ProductsFilter = () => {
    const { categories, selectedCategory } = useContext(ProductsContext)

    const handleCategoryChange = (event) => {
        const selectedCategoryValue = event.target.value;
        selectedCategory(selectedCategoryValue);
    }

    return (
        <div className='filter_container'>
            <select onChange={handleCategoryChange}>
                {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                ))}
            </select>
        </div>
    );
}

export default ProductsFilter;
