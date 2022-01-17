import React from 'react'
import { CInfoContainer } from './ContactFragElement'


export default function Card({name,department,email,phone}) {
    return (
        <CInfoContainer>
            <li><h3 style={{'fontFamily':'Poppins','fontSize':'1.3rem'}}><br/>Convenor</h3><br/></li>
            <li><p style={{'fontWeight':'bolder'}}>{name}</p></li>
            <li><p>{department}</p></li>
            <li><p>Dr. Sudhir Chandra Sur Engineering College and Sports Complex</p></li>
            <li><p>Email : {email}</p></li>
            <li><p>Phone : {phone}</p></li>
        </CInfoContainer>
    )
}