import { useEffect, useState } from 'react';
import Layout from "../components/layout"
import Products from "../components/search_products"

const defaultEndpoint = "https://wildcat.plus/api/data";
//const defaultEndpoint = "http://localhost:3000/api/data";

const Frontend = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filters, setFilters] = useState({
        s: ''
    });

    useEffect( () => {
        (
            async () => {
                const response = await fetch(defaultEndpoint);
                const content = await response.json();
                setAllProducts(content);
                setFilteredProducts(content);
            }
        )()
    }, []);

    useEffect( () => {
        let products = allProducts.filter(p => p.target.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0)

        setFilteredProducts(products);
    }, [filters]);

    return (
    <Layout>
        <Products products={ filteredProducts } filters={ filters } setFilters={ setFilters } />
    </Layout>
    );
};

export default Frontend;