import { useEffect, useState } from 'react';
import Layout from "../../components/layout"
import Products from "../../components/products"
import { useRouter } from "next/router";

const defaultEndpoint = "http://localhost:3000/api/data";

const Frontend = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const router = useRouter();

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

//Below saves the workout
  const saveWorkout = (e) => {
    e.preventDefault();
    router.push("/workouts");
  };

    return (
    <Layout>
      <div className="fixed right-4 sm:right-4 md:right-2 lg:right-24 xl:right-10 2xl:right-22 bottom-0 mb-24">
        <button
        onClick={ saveWorkout }
                className="w-12 md text-white text-center h-12 text-sm md:text-md lg:text-md font-bold xl:text-lg bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
          <a className=''>Save</a>
        </button>
      </div>
        <Products products={ filteredProducts } filters={ filters } setFilters={ setFilters } />

    </Layout>
    );
};

export default Frontend;