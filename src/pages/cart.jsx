import { useRecoilState } from "recoil"
import cartAtom from "../atoms/cartAtom"

export default function CartPage(props) {

    const [cart , setCart ] = useRecoilState(cartAtom)


    function removeItemAtIndex(arr, index) {
        return [...arr.slice(0, index), ...arr.slice(index + 1)];
    }

    console.log(cart)

    return (
        <section className="cart">
            <div className="container">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>image</th>
                            <th>title</th>
                            <th>price</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        cart.map((product,index)=>{
                            return (
                                  <tr>
                                    <td><img src={product.thumbnail} alt="" /></td>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td><button onClick={()=>{
                                      setCart(removeItemAtIndex(cart , index))
                                    }} className="btn btn-danger">DELETE</button></td>
                                </tr>
                            )
                        })
                      }
                    </tbody>
                </table>
            </div>
        </section>
    )
}