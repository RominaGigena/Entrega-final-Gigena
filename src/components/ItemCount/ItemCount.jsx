import { useState } from "react"
import { toast } from "react-toastify"
export const ItemCount = ({valInicial, stock, onAdd}) => {
    
    const [contador, setContador] = useState(valInicial)
            

    const sumar = () =>  (contador < stock) && setContador(contador + 1) 
    const restar = () => (contador > valInicial)  && setContador(contador - 1)  
    const agregarCarrito = () => {
      onAdd(contador)
      toast(`Agregaste ${contador} productos al carrito!`)
    } 

  return (
    <>
        <button className="btn btn-light" onClick={() => restar()}>-</button>
            {contador}
        <button className="btn btn-light" onClick={() => sumar()}>+</button>
        <button className="btn btn-primary" onClick={() => agregarCarrito()}>Agregar al carrito</button>
    </>
  )
}

