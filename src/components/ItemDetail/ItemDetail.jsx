import {ItemCount} from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';

import { useCarritoContext } from '../../context/CarritoContext';

export const ItemDetail = ({item}) => {
    const {addItem} = useCarritoContext()

    const onAdd = (cantidad) => {
        addItem(item,cantidad)
    }

    return (
        <div className='row g-0'>
            <div className='col-md-4'>
                <img src={item.img} className='imagenchica imagenround' alt={`Imagen de ${item.nombre}`}/>
            </div>
            <div className='col-md-8'>
                <div className='card-body'>
                    <h5 className='card-title'>{item.nombre}{item.subtitulo}</h5>
                    <p className='card-text'>Marca: {item.marca}</p>
                    <p className='card-text'>Precio: ${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                    <p className='card-text'>Stock: {item.stock}</p>
                    <ItemCount valInicial={1} stock={item.stock} onAdd={onAdd}/>
                    <Link className='nav-link' to={"/cart"}><button className='btn btn-primary'>Finalizar compra</button></Link>    
                </div>
            </div>
        </div>
    );
}


