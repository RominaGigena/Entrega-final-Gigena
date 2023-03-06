import { FaCartPlus } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useCarritoContext } from '../../context/CarritoContext';

const CartWidget = () => {
    const {getItemQuantity} = useCarritoContext()
    return (
        <>
            <Link className='nav-link' to={'/cart'}>
                <button className='btn'>Carrito</button>
                {getItemQuantity() > 0 && <span className='cantCarrito'>{getItemQuantity()}</span>}
        </Link>
        <FaCartPlus size={'40px'} color={'white'}/>
        </>
    );
}

export default CartWidget;
