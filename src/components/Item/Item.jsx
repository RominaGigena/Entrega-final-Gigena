import {Link} from 'react-router-dom'



export const Item = ({item}) => {
    
    
    return (
      <div className="card" style={{width: '18rem'}}>
      <img src={item.img} className="card-img-top imgcircle" alt={"producto"} />
      <div className="card-body">
        <h5 className="card-title">{item.nombre}</h5>
        <p className="card-text">{item.subtitulo}</p>
        <p className="card-text">$ {new Intl.NumberFormat('de-DE').format (item.precio)}</p>
        <button className="btn btn-primary"><Link className="nav-link" to={`/item/${item.id}`}>Ver mas</Link></button>
      </div>
    </div> 
    )
}

export default Item;
