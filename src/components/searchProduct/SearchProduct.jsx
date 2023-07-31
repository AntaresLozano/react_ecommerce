import { ProductsContext } from '../../context/products.context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import './SearchProduct.css';

const SearchProduct = () => {
    const { setTerm, searchTerm } = useContext(ProductsContext);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setTerm(value);
    }

    return (
        <div className="search-container">
            <input
                type="text"
                className="search-input"
                placeholder="Buscar tu producto"
                value={searchTerm}
                onChange={handleInputChange}
            />
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
    );
}

export default SearchProduct;
