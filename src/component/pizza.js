import React from 'react'
import { useState } from 'react'
import './pizza.css'
import  {Modal, Button } from 'react-bootstrap'
import { useDispatch , useSelector } from 'react-redux'
import { addToCart } from '../actions/cartActions';
function Pizza({ pizza }) {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()
  function addtocart()
  {
     dispatch(addToCart(pizza,quantity,varient));
  }
  return (
    <>
      <div class="shadow p-3 mb-5 bg-white rounded">
        <div onClick={handleShow} className="nameimg">
        <h6>{pizza.name}</h6>
        <img src={pizza.image} className="img-fluid" alt=''></img>
        </div>

        <div className='flex-container'>
          <div className='varient'>
            <p>varients</p>
            <select className='form-control' value={varient} onChange={(e) => { setVarient(e.target.value) }}>
              {pizza.varients.map(varient => {
                return <option value={varient}>{varient}</option>
              })}
            </select>
          </div>
          <div className='quantity'>
            <p>Quantity</p>
            <select className='form-control' value={quantity} onChange={(e) => { setQuantity(e.target.value) }} >
              {[...Array(10).keys()].map((x, i) => {
                return <option value={i + 1}>{i + 1}</option>
              })}
            </select>
          </div>
        </div>
        <div className='flex-container'>
          <div>
            <h6 className='price' >Price: {pizza.prices[0][varient] * quantity}</h6>
          </div>
          <div className='cart'>
            <button className='btn' onClick={addtocart}>Add to Cart</button>
          </div>
        </div>

        <Modal show={show} onHide={handleClose}>  
          <Modal.Header  closeButton>
            <Modal.Title>{pizza.name}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <img src={pizza.image} alt="" style={{width:'240px', height:'220px', display: "block" , marginLeft: "auto" , marginRight: "auto"}}/>
            <p>{pizza.description}</p>
          </Modal.Body>

          <Modal.Footer>
            <Button className='btn' onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}
export default Pizza
