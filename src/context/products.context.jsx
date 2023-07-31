import { createContext, useEffect, useState } from "react";
import { getProductsService } from "../services/products.service";

export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [activeCategory, setactiveCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [cartProducts, setcartProducts] = useState([]);

    const getProducts = async () => {
        try {
            const response = await getProductsService();
            const productos = response.data;
            setProducts(productos);
        } catch (e) {
            console.log(e);
        }
    };

    const getCategories = () => {
        const uniqueCategories = [...new Set(products.map((product) => product.category))];
        const defaultCategory = "all";
        const categoriesWithDefault = [defaultCategory, ...uniqueCategories];
        setCategories(categoriesWithDefault);
    }

    const setTerm = (term) => {
        setSearchTerm(term)
    }

    const selectedCategory = (category) => setactiveCategory(category)

    const AddProductToCart = (product) => {
        setcartProducts([...cartProducts, product])
    }

    useEffect(() => {
        getCategories();
    }, [products]);

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <ProductsContext.Provider value={{ products, categories, selectedCategory, activeCategory, setTerm, searchTerm, AddProductToCart, cartProducts }}>
            {children}
        </ProductsContext.Provider>
    );
}
