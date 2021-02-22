import React, {useState, useEffect} from 'react'
import {crearUsuario} from '../Services/usuarioServices'

export default function MiFormulario(){
  const [value, setValue] = useState({
    firstName:"",
    lasttName:"",
    userName:"",
    email:"",
    address:"",
    address2:"",
    country:"",
    state:"",
    zip:""

  })

  const actualizarInput = (e)=>{
    setValue({
      ...value,[e.target.name]:e.target.value
    })
    
  }


  useEffect((e)=>{
    let data =  localStorage.getItem("usuario")
    if(data!=null){
      setValue(JSON.parse(data))
    } else{
      setValue({
        ...value,[e.target.name]:e.target.value
      })
    }
  },[])
    

  const manejarSubmit = async (e) => {
    e.preventDefault()
    localStorage.setItem("usuario",JSON.stringify({...value}))
    
  }


  const regitrarUsuario = async (e)=>{
    e.preventDefault()
    let response = await crearUsuario({...value})  
    alert("Usuario Creado")
  }

return(
  <div>
    <form className="mb-3" onSubmit={(e) => {regitrarUsuario(e)}}>  
    <div className="row g-3">        
        <div className="col-md-6">
          <label className="form-label">First Name</label>
          <input type="text" className="form-control" name="firstName" 
          value={value.firstName} 
          onChange={(e) =>{actualizarInput(e)}} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Last Name</label>
          <input type="text" className="form-control" name="lasttName"
          value={value.lasttName}
          onChange={(e) =>{actualizarInput(e)}} />
        </div>
        <div className="col-md-12">
          <label className="form-label">Username</label>
          <div className="input-group mb-3">        
            <span className="input-group-text" id="basic-addon1">@</span>        
            <input type="text" className="form-control" name="userName" 
            value={value.userName}
            onChange={(e) =>{actualizarInput(e)}}
             placeholder="Username" aria-describedby="basic-addon1" />
          </div>
        </div>
        <div className="col-md-12">         
            <label className="form-label">Email (optional)</label>
            <input type="email" className="form-control" name="email" 
            value={value.email}
            onChange={(e) =>{actualizarInput(e)}}
            placeholder="you@example.com" />
         
        </div>
        <div className="col-md-12">
          <label className="form-label">Address</label>
          <input type="text" className="form-control" name="address"
          value={value.address}
          onChange={(e) =>{actualizarInput(e)}}
          placeholder="1234 Main St" />     
        </div>
        <div className="col-md-12">
          <label className="form-label">Address 2 (Optional)</label>
          <input type="text" className="form-control" name="address2"
          value={value.address2}
          onChange={(e) =>{actualizarInput(e)}}
           placeholder="Apartment or suite" />
        </div>       
        <div className="col-md-6">
        <label className="form-label" >Country</label>
        <select className="form-select" name="country" value={value.country}
        onChange={(e) =>{actualizarInput(e)}}
        >
          <option value="x" selected>Choose...</option>
          <option value="Country 1">Country 1</option>
          <option value="Country 2">Country 2</option>
          <option value="Country 3">Country 3</option>
        </select>
      </div>
      <div className="col-md-4">
        <label className="form-label" >State</label>
        <select className="form-select" name="state" value={value.state}
        onChange={(e) =>{actualizarInput(e)}}>
          <option value="x" selected>Choose...</option>
          <option value="State 1">State 1</option>
          <option value="State 2">State 2</option>
          <option value="State 3">State 3</option>
        </select>
      </div>
      <div className="col-md-2">
        <label className="form-label">Zip</label>
        <input type="text" className="form-control" name="zip" 
        value={value.zip} onChange={(e) =>{actualizarInput(e)}} />
      </div>
      <div className="col-10">
      <button className="btn btn-primary" onClick={(e) => {manejarSubmit(e)}}>Guardar para Después</button> 
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success">Enviar</button>  
        </div>
      </div> 

    </form>
  </div>
)

}

