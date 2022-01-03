import React from 'react'
import { CInfoContainer } from './ContactFragElement'


export default function Card({name,department,email,phone}) {
    const prop = {color:'#001345'}
    return (
        <CInfoContainer style={prop}>
            <li><h3><br/>Convenor</h3><br/></li>
            <li><p >{name}</p></li>
            <li><p>{department}</p></li>
            <li><p>Dr. Sudhir Chandra Sur Engineering College and Sports Complex</p></li>
            <li><p>Email : {email}</p></li>
            <li><p>Phone : {phone}</p></li>
        </CInfoContainer>
    )
}