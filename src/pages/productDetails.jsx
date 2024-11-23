import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './productDetails.css'
export default function ProductDetails () {
    const params = useParams()
    const [data , setData] = useState({})
    console.log(params)

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${params.productId}`)
        .then(res => {
           return res.json()
        })
        .then(data => {
            setData(data)
        });
    },[])

    console.log(data)

    return(
        <section className="productDetails">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={data.thumbnail} alt="" />
                    </div>
                    <div className="col-md-6">
                        <p>title : {data.title}</p>
                        <p>price : {data.price}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}