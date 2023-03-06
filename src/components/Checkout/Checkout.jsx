import { useCarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import  React  from "react"
import { useNavigate } from "react-router-dom"
import {toast} from 'react-toastify'
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto } from "../../firebase/firebase"
import { useState } from "react"





export const Checkout = () => {
  const {carrito, emptyCart, totalPrice} = useCarritoContext()
  const datosForm = React.useRef()
  let navigate = useNavigate()

const [inputValue1, setInputValue1] = useState('');
const [inputValue2, setInputValue2] = useState('');
const [error, setError] = useState('');

const handleInputChange1 = (e) => {
    setInputValue1(e.target.value);
    setError('');
}

const handleInputChange2 = (e) => {
    setInputValue2(e.target.value);
    setError('');
}
 
const consultarFormulario = (e) => {
    e.preventDefault()
    const datForm = new FormData(datosForm.current)
    const cliente = Object.fromEntries(datForm)
    
    const aux = [...carrito]

    aux.forEach(prodCarrito => {
      getProducto(prodCarrito.id).then(prodBDD => {
          prodBDD.stock -= prodCarrito.cant 
          updateProducto(prodCarrito.id, prodBDD)
      })
  })




  if (inputValue1 === inputValue2) {




  createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra =>{
    toast.success(`¡Muchas gracias por tu compra, la orden ${ordenCompra.id
    } por $ ${new Intl.NumberFormat('de-DE').format(totalPrice())} fue exitosa!`)
    emptyCart()
    e.target.reset()
    navigate("/")
})

    }else {
        setInputValue2('')
        setError('Los emails son distintos, por favor repita el email ingresado')
    }
}

return (
  <>
      {carrito.length === 0 
       ? 
        <>
              <h2>Todavia no hay productos en tu carrito</h2>
              <Link className="nav-link" to={'/'}><button className="btn btn-dark">Seguir comprando</button></Link> 
        </>
        :
          <div className="container" style={{marginTop:"10px"}}>
          <form onSubmit={consultarFormulario} ref={datosForm}>
              <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre y apellido</label>
              <input type="text" className="form-control" name="nombre" required/>
          </div>
              <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" value={inputValue1} onChange={handleInputChange1} className="form-control" name="email" required/>
          </div>
          <div className="mb-3">
              <label htmlFor="repEmail" className="form-label">Repetir Email</label>
              <input type="email" value={inputValue2} onChange={handleInputChange2} className="form-control" name="repEmail" required/>
                {error
                    &&
                    <p style={{color: 'red'}}>Los datos no coinciden, intente de nuevo</p>
                }

          </div>
          <div className="mb-3">
              <label htmlFor="direccion" className="form-label">Direccion</label>
              <input type="text" className="form-control" name="direccion" />
          </div>

          <button type="submit" className="btn btn-primary">Finalizar</button>
          </form>
      </div>
      }
  
  </>
        
 )
}


