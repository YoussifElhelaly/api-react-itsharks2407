import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductCard from "../components/productCard"

export default function Search() {

    const params = useParams()
    const [products,setProducts] = useState([])

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/search?q=${params.searchTitle}`)
            .then(res => res.json())
            .then(data =>{
                setProducts(data)
            });
    },[params])

    return (
       <section className="home">
            <div className="container">
                total Products {products?.total}    
                <div className="row">
                    {
                        products?.products?.map((product)=>{
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