import { useEffect, useState } from "react";
import ProductCard from "../components/productCard";

export default  function HomePage(props) {

    const [products , setProducts ] = useState()

    async function getProducts() {
        let res = await fetch('https://dummyjson.com/products')
        let data = await res.json()
       setProducts(data)
    }

    useEffect(()=>{
        getProducts()
    },[])

    return(
        <section className="home">
            <div className="container">
                total Products {products?.total}    
                <div className="row">
                    {
                        products?.products.map((product)=>{
                            return(
                                <div className="col-md-6 col-lg-3" data-aos="fade-up">

                                    <ProductCard  product={product} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}