import React from 'react'
import Pizza from '../component/pizza'
// import pizzas from '../pizzadata'
import "./homescreen.css"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllPizzas } from '../actions/pizzaActions'
import { useSelector } from 'react-redux'



function Homescreen() {

  const dispatch = useDispatch()
  const pizzasstate = useSelector((state) => state.getAllPizzasReducer)
  const { pizzas, error, loading } = pizzasstate;

  useEffect(() => {
    dispatch(getAllPizzas())
  },[]);


  return (
    <div className='row'>


      { loading? (<h1>loading......</h1>) : error? (<h1>something went wrong</h1>) : (

        
          pizzas.map(pizza => {

            return <div className='col-md-4' key={pizza._id}>
              <div>
                <Pizza pizza={pizza} />
              </div>
            </div>
          })
        


      )}


    </div>
  )
}

export default Homescreen
