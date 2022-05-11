import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import './cartscreen.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { addToCart } from '../actions/cartActions';
import { deleteFromCart } from '../actions/cartActions';

function CartScreen() {
    const cartstate = useSelector((state) => state.cartReducer)
    const cartItems = cartstate.cartItems
    const dispatch = useDispatch()
    var subtotal = cartItems.reduce((x,item)=>x+item.price,0)
    return (
        <>
          <div className="row justify-content-center">
           
            <div className="col-md-6">     
              <h1 style={{ textAlign:"center"}}>MY CART</h1>
                    {cartItems.map(item => {
                        return <div className="flex-container">
                            <div className='details'>
                                <h4> {item.name}  [{item.varient}] </h4>
                                <h6>Price:  {item.quantity} * {item.prices[0][item.varient]}  =  {item.price}</h6>
                                <h6>Quantity:<i className='iconadd' onClick={()=>{dispatch(addToCart(item, item.quantity+1 , item.varient))}}> {<AddIcon />}</i> {item.quantity}  <i className='iconmin'onClick={()=>{dispatch(addToCart(item, item.quantity-1 , item.varient))}}>{<RemoveIcon />}</i></h6>
                                <br/>
                                <br/>
                            </div>
                            
                            <div className='image m-1 w-100'>
                                <img className='img' src={item.image} alt='' />
                            </div>
                            
                            <div className='delete'>
                                  <button className='del'><i onClick={()=>{dispatch(deleteFromCart(item))}}><DeleteIcon/></i></button>
                            </div>
                        </div>
                    })}
            </div>

            <div className="col-md-6">
                <h1 style={{ marginTop:"20px" }} >Total Bill :</h1><br/>
                <h2 style={{ marginLeft:"50px" }}>{subtotal}</h2><br/>
                <button className="btn" style={{border:"none"}}>PayNow</button>

                
            </div>
            </div>
        </>
    )
}


export default CartScreen
