import React from 'react'
import { useForm } from 'react-hook-form';
import Presentation from './Presentation';

const UniquePage = () => {

    const [modal, setModal] = React.useState(false)
    const [phone, setPhone] = React.useState("")
    const [newPage, setNewPage] = React.useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    setModal(!modal); 
    
    setPhone(JSON.stringify(Number(data['Mobile number'])))
}

    const handlePage = () => {
        setNewPage(!newPage)
    }

  console.log(errors);
  return (
    !newPage ?
    <div style={{padding:"20px 20px"}}>
        
        <h1 style={{marginTop:"60px"}}>Проверить клиента на уникальность</h1>
        <p style={{marginTop:"30px", fontSize:"15px"}}>Если номер клиента уникален вы сможете записать его на презентацию и зафиксировать за собой</p>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
            style={{marginTop:"30px", width:"100%", textAlign:"left", padding:"25px 30px", borderRadius:"10px", border:"none", cursor:"pointer", boxShadow:"0 4px 10px 0 rgba(0, 0, 0, 0.2)", background:"white"}} 
            type="tel" 
            placeholder="Номер телефона клиента" 
            {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} 
            />

            <input style={{marginTop:"30px", width:"100%", textAlign:"left", padding:"25px 30px", borderRadius:"10px", border:"none", cursor:"pointer", boxShadow:"0 4px 10px 0 rgba(0, 0, 0, 0.2)", background:"black", color:"white", fontWeight:"bold", fontSize:"20px", textAlign:"center"}} type="submit" value="Проверить" />
        </form>
        {modal &&
        <div style={{padding:"10px 30px", position:"absolute", top:"80%", left:"50%", transform:"translate(-50%, -50%)", width:"335px", height:"230px", background:"white", borderRadius:"10px", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
            <h2 style={{textAlign:"center", marginBottom:"20px"}}>Клиент уникален</h2>
            <p style={{textAlign:"center", fontSize:"12px", color:"#7a7a7a"}}>Чтобы продолжить нажмите на кнопку "Записаться на презентацию"</p>
            <button onClick={handlePage} style={{marginTop:"30px", width:"100%", textAlign:"left", padding:"20px 20px", borderRadius:"30px", border:"none", cursor:"pointer", boxShadow:"0 4px 10px 0 rgba(0, 0, 0, 0.2)", background:"black", color:"white", fontWeight:"bold", fontSize:"15px", textAlign:"center"}}>Запись на презентацию</button>
        </div>}

    </div>
    : <Presentation phone={phone} />
    
    
        
  )
}

export default UniquePage