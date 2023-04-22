import React from 'react'
import Card from '../components/Card'
import { useState, useEffect } from "react";
import axios from 'axios'

const Personal = () => {

    const [doctor,setDoctor] = useState([])
 
    const getData = async()=>{
      const {data} = await axios('http://192.168.0.24:8000/api/users/')
      setDoctor(data)
      console.log(data)
    }
  
  useEffect(()=> {
    getData()
  }, [])
    
   


    return (
        <div className='personal '>
            <div className='container'>
                <div className='pesonal__wrapper'>
                    <h2 className='personal__title'>Наши специалисты</h2>
                    <div className='personal__wrapper-grid'>
                        {
                            doctor.map((el, idx) => (
                                <Card key={idx} name={el.full_name} spesialist={el.doctor?.speciality_name}/>
                            ))
                        }
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                      
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personal