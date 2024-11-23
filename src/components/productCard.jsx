import { Link } from "react-router-dom";
import './poductCard.css'
import toast from "react-hot-toast";
import { useRecoilState, useSetRecoilState } from "recoil";
import cartAtom from "../atoms/cartAtom";

export default function ProductCard(props) {

    const setCart = useSetRecoilState(cartAtom)

    return(
        <div class="card">
            <img src={props.product.thumbnail} class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">{props.product.title}</h5>
            <Link to={`/productDetails/${props.product.id}`} class="btn btn-primary">Go somewhere</Link>
            <button onClick={()=>{
                toast.success("hamda")
               setCart((oldCart)=>{
                    let newCart = [...oldCart , props.product]

                   localStorage.setItem("cart" , JSON.stringify(newCart))
                return newCart
               })
            }} className="btn btn-info ms-2">add to cart</button>
            </div>
        </div>
    )
}