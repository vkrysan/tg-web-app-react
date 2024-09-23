import React from 'react'

const Presentation = (props) => {

    const phone = props.phone || 'Введите номер телефона'

    const [modal, setModal] = React.useState(false)

    const handleClick = () => {
        setModal(!modal)
    }

  return (
    <div style={{padding:"20px 20px"}}>
        <h2 style={{marginTop:"20px"}}>Введите данные клиента</h2>
        <input type="tel" onChange={(e) => {e.target.value = props?.phone}} style={{marginTop:"20px", width:"100%", textAlign:"left", padding:"25px 30px", borderRadius:"10px", border:"none", cursor:"pointer", boxShadow:"0 4px 10px 0 rgba(0, 0, 0, 0.2)", background:"white"}} placeholder={phone} />
        <input type="text" style={{marginTop:"20px", width:"100%", textAlign:"left", padding:"25px 30px", borderRadius:"10px", border:"none", cursor:"pointer", boxShadow:"0 4px 10px 0 rgba(0, 0, 0, 0.2)", background:"white"}} placeholder='Имя*' required/>
        <input type="text" style={{marginTop:"20px", width:"100%", textAlign:"left", padding:"25px 30px", borderRadius:"10px", border:"none", cursor:"pointer", boxShadow:"0 4px 10px 0 rgba(0, 0, 0, 0.2)", background:"white"}} placeholder='Фамилия'/>
        <h2 style={{marginTop:"20px"}}>Выберите дом</h2>
        <select required style={{marginTop:"20px", width:"100%", textAlign:"left", padding:"25px 30px", borderRadius:"10px", border:"none", cursor:"pointer", boxShadow:"0 4px 10px 0 rgba(0, 0, 0, 0.2)", background:"white"}}>
            <option value="1" defaultValue disabled>Дом</option>
            <option value="2">Дом 1</option>
            <option value="3">Дом 2</option>
            <option value="3">Дом 3</option>
            <option value="3">Дом 4</option>
            <option value="3">Дом 5</option>
        </select>
        <h2 style={{marginTop:"20px"}}>Тип недвижимости</h2>
        <div style={{display:"flex", flexDirection:"column", position: 'relative'}}>
            <input type="checkbox" style={{position:"absolute", right:"30px", top:"48px"}} name="live" id="live" />
            <label htmlFor="live" style={{marginTop:"20px", width:"100%", textAlign:"left", padding:"25px 30px", borderRadius:"10px", border:"none", cursor:"pointer", boxShadow:"0 4px 10px 0 rgba(0, 0, 0, 0.2)", background:"white"}}>
                Жилая недвижимость
            </label>
            <input type="checkbox" style={{position:"absolute", right:"30px", bottom:"30px"}} name="rent" id="rent" />
            <label htmlFor="rent" style={{marginTop:"20px", width:"100%", textAlign:"left", padding:"25px 30px", borderRadius:"10px", border:"none", cursor:"pointer", boxShadow:"0 4px 10px 0 rgba(0, 0, 0, 0.2)", background:"white"}}>
                Коммерческая недвижимость
            </label>
        </div>
        <h2 style={{marginTop:"20px"}}>Выберите дату</h2>
        <input type="date" style={{marginTop:"20px", width:"100%", textAlign:"left", padding:"25px 30px", borderRadius:"10px", border:"none", cursor:"pointer", boxShadow:"0 4px 10px 0 rgba(0, 0, 0, 0.2)", background:"white"}}/>
        <button onChange={handleClick} style={{marginTop:"20px", width:"100%", textAlign:"left", padding:"25px 30px", borderRadius:"10px", border:"none", cursor:"pointer", boxShadow:"0 4px 10px 0 rgba(0, 0, 0, 0.2)", background:"black", color:'white', textAlign: 'center'}}>Отправить</button>
        {modal &&
        <div style={{padding:"10px 30px", position:"absolute", top:"80%", left:"50%", transform:"translate(-50%, -50%)", width:"335px", height:"230px", background:"white", borderRadius:"10px", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
            <h2 style={{textAlign:"center", marginBottom:"20px"}}>Клиент уникален</h2>
            <p style={{textAlign:"center", fontSize:"12px", color:"#7a7a7a"}}>Чтобы продолжить нажмите на кнопку "Записаться на презентацию"</p>
            <button style={{marginTop:"30px", width:"100%", textAlign:"left", padding:"20px 20px", borderRadius:"30px", border:"none", cursor:"pointer", boxShadow:"0 4px 10px 0 rgba(0, 0, 0, 0.2)", background:"black", color:"white", fontWeight:"bold", fontSize:"15px", textAlign:"center"}}>Запись на презентацию</button>
        </div>}
    </div>
    
  )
}

export default Presentation