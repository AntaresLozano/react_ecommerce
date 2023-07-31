import { useContext } from 'react'
import ProductCard from '../productCard/ProductCard'
import { ProductsFilter } from '../productsFilter'
import SearchProduct from '../searchProduct/SearchProduct'
import './ProductsList.css'
import { ProductsContext } from '../../context/products.context'

const ProductsList = () => {
    const { products, activeCategory, searchTerm } = useContext(ProductsContext)
    const filteredProducts = products.filter((product) => {
        const categoryMatch = activeCategory === 'all' || product.category === activeCategory;
        const titleMatch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
        return categoryMatch && titleMatch;
    });

    return (
        <>
            <div className="product_list--title">
                <h1>Productos</h1>
            </div>
            <div className="product_filter--container">
                <ProductsFilter />
                <SearchProduct />
            </div>
            <div className="product_list--container">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    )
}
export default ProductsList