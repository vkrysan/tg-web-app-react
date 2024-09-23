import React from 'react'

const Header = () => {

    const [modal, setModal] = React.useState(false)

  return (
    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", height:"100px", borderBottom:"1px solid gray", padding:"0 20px"}}>
        <p style={{fontWeight:"bold", fontSize:"40px", color:"#1a1a1a"}}>S</p>
        <button onClick={() => setModal(!modal)} 
        style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", background:"#1a1a1a", borderRadius:"100%", padding:"5px", cursor:"pointer", color:"white", border:"none", width:"50px", height:"50px"}}>
            <i style={{background:"white", width:"25px", height:"2px", marginBottom:"5px"}} class="fa-solid fa-bars"></i>
            <i style={{background:"white", width:"25px", height:"2px", marginBottom:"5px"}} class="fa-solid fa-bars"></i>
            <i style={{background:"white", width:"25px", height:"2px"}} class="fa-solid fa-bars"></i>
        </button>
    </div>
  )
}

export default Header