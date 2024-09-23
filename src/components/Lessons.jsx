import React from 'react'
import { lessons } from '../api'

const Lessons = () => {

    const [curses, setCurses] = React.useState(lessons)

    const filterInput = (e) => {
        const value = e.target.value
        const filteredLessons = lessons.filter((lesson) => lesson.title.toLowerCase().includes(value.toLowerCase()))
        setCurses(filteredLessons)
    }

  return (
    <div style={{padding:"0 20px", marginTop:"30px"}}>
        <h1 style={{textAlign:"center", color:"#1a1a1a"}}>Академия брокеров <br/> Sminex</h1>
        <input type="text" onChange={filterInput} placeholder='Найти курс...' style={{width:"100%", height:"60px", borderRadius:"30px", border:"1px solid #1a1a1a", padding:"0 20px", marginTop:"30px", marginBottom:"10px"}} />
        {curses.map((lesson) => (
            <div style={{display:"flex", marginTop:"30px", background:"white", borderRadius:"10px", flexDirection:"column", justifyContent:"space-between", alignItems:"center", padding:"5px"}}>
                {lesson.img && <img style={{width:"100%", height:"250px", objectFit:"cover", borderRadius:"10px"}} src={lesson.img} alt=""/>}
                <div style={{background:"#f3f3f3", marginTop:"10px", padding:"20px", borderRadius:"10px", width:"100%"}}>
                    <h2 style={{fontWeight:"bold", textAlign:"left", marginBottom:"20px", fontSize:"30px", color:"#1a1a1a"}}>
                        {lesson.title}
                    </h2>
                    <p style={{textAlign:"left", color:"#7a7a7a", marginBottom:"30px"}}>
                        {lesson.describe}
                    </p>
                    <p style={{textAlign:"left", color:"#1a1a1a"}}>
                        Ваш прогресс:
                    </p>
                    <p style={{textAlign:"left", fontWeight:"bold", color:"black", fontSize:"35px"}}>
                        {lesson.process}%
                    </p>
                    <div className='progress'></div>
                    <button style={{width:"100%", marginTop:"20px", background:"#1a1a1a", color:"white", padding:"20px", borderRadius:"30px", border:"none", cursor:"pointer", fontSize:"20px", fontWeight:"bold"}}>
                        Начать обучение
                    </button>
                </div>
                
            </div>
        ))}
    </div>

  )
}

export default Lessons