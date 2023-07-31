import { ProductsContext } from '../../context/products.context';
import { useContext } from 'react';
import './ProductCard.css'

const ProductCard = ({ product }) => {
    const { id, title, image, price } = product;

    const { AddProductToCart } = useContext(ProductsContext)

    const handleAddProductToCart = (product) => {
        AddProductToCart(product)
    }

    return (
        <div key={id} className="product_card--container">
            <div className="imagen_container">
                <img src={image} alt={title} />
            </div>
            <h1 className='product_card--title' >{title}</h1>
            <div className="price_container">
                <p className='product_card--price' >${price}</p>
                <button className='product_card--button' onClick={() => handleAddProductToCart(product)} >add to cart</button>
            </div>
        </div>
    )
}
export default ProductCard