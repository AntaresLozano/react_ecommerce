import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css'
import { useContext } from 'react'
import { ProductsContext } from '../../context/products.context'
import { Link } from 'react-router-dom'
const Navbar = () => {

    const { cartProducts } = useContext(ProductsContext)
    console.log(cartProducts)
    const productsQuantity = cartProducts.length;
    return (
        <>
            <div className="navbar_container">
                <Link to="/"><span>Antares Store</span></Link>
                
                <div className="navbar_cart--container">
                    <Link to="/cart"> <FontAwesomeIcon id='cart_icon' icon={faCartShopping} />
                        <div className="navabar_cart--count">{productsQuantity}</div></Link>
                </div>
            </div>
        </>
    )
}
export default Navbar