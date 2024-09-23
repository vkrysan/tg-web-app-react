import React from 'react'
import { useNavigate } from 'react-router-dom'

const UniqueForm = () => {
  
  const navigate = useNavigate()

  const uniquePage = () => {
    navigate('/unique')
  }

  const presentationPage = () => {
    navigate('/presentation')
  }

  return (
    <div style={{padding:"20px 20px"}}>
        <h1 style={{marginTop:"60px"}}>Здравствуйте</h1>
        <button onClick={uniquePage} style={{marginTop:"30px", width:"100%", textAlign:"left", padding:"25px 30px", borderRadius:"10px", border:"none", cursor:"pointer", boxShadow:"0 4px 10px 0 rgba(0, 0, 0, 0.2)", background:"white"}}>Проверьте клиента на уникальность</button>
        <button onClick={presentationPage} style={{marginTop:"10px", width:"100%", textAlign:"left", padding:"25px 30px", borderRadius:"10px", border:"none", cursor:"pointer", boxShadow:"0 4px 10px 0 rgba(0, 0, 0, 0.2)", background:"white"}}>Записаться на презентацию в дом продаж Sminex</button>
    </div>
  )
}

export default UniqueForm