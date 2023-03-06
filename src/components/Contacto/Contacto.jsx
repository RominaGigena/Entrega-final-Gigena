import React from 'react';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
export const Contacto = () => {

    const datosForm = React.useRef()
    let navigate = useNavigate()
    const consultarForm = (e) => {
        e.preventDefault()
        console.log(datosForm.current)
        const datForm = new FormData(datosForm.current)
        const contacto = Object.fromEntries(datForm)
        console.log(contacto)
        e.target.reset()
        toast.success("Mensaje recibido")
        navigate("/")
    }

    return (
      <div className="container">
          <form onSubmit={consultarForm} ref={datosForm}>
           <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre y apellido</label>
              <input type="text" className="form-control" name='nombre' />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" name='email'/>
            </div>
            <div className="mb-3">
              <label htmlFor="textarea" className="form-label">Consulta</label>
              <textarea className="form-control" name="textarea" rows={3} defaultValue={""}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
        
    );
}

export default Contacto;
