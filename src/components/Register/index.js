import React from 'react'
import { Button } from '../ButtonElement'
import {RegisterContainer,
    RegisterHeading,
    TextContainer,
    FormContainer,
    RHead,Clist,CForm, CFIeld } from './RegisterElements'

const Register = () => {
    return (
        <div id='Register' className="Register">
            <RegisterHeading>REGISTER</RegisterHeading>
            <RegisterContainer>
                <TextContainer>
                    <li>
                        <RHead>When ?</RHead>
                        <p style={{color:'#390011', borderLeft:"5px solid #002050", paddingLeft:'8px'}}> Wednesday, March 09, 2022 | 2:00 PM - 5:30 PM | (GMT+05:30)</p>
                    </li>
                    <li>
                        <RHead>Where ?</RHead>
                        <p style={{'maxWidth':'400px', color:'#390011', borderLeft:"5px solid #002050", paddingLeft:'8px'}} > Dr. Sudhir Chandra Sur Institute of Technology 540, Dum Dum road, Near Surer Math Kolkata - 700074  </p>
                    </li>
                    <li>
                        <RHead>Who can Join ?</RHead>
                        <Clist>PG/Ph. D. Scholar</Clist>
                        <Clist>Teachers from Academic Institute</Clist>
                        <Clist>Scientists from R{'&'}D Establishment</Clist>
                        <Clist>Participants (Without Presentation)</Clist>
                    </li>
                </TextContainer>
                <FormContainer>
                    <CForm id='Form'>
                    <h4 style={{marginBottom:'10px', marginTop:'15px',
                                color:'#390011'}}>Fill this form to Register for this Event</h4>
                    <CFIeld 
                        type={'text'}
                        id='FullName'
                        name='Full Name'
                        placeholder='Enter Name in Full'
                    />
                    <CFIeld 
                        type={'email'}
                        id='EmailAddress'
                        name='Email Address'
                        placeholder='Enter Email Address'
                    />
                    <CFIeld 
                        type={'number'}
                        id='Phone'
                        name='Phone'
                        placeholder='Enter Phone Number'
                    />
                    {/* TODO : CREATE A SEPERATE BUTTON COMPONENT */}
                    <Button 
                        type={'submit'}
                        id='submit'
                        name='Submit'
                        placeholder='REGISTER NOW'
                        cursor='pointer'
                        offset={-100}
                        to='Form'
                    >REGISTER NOW</Button>
                    </CForm>
                </FormContainer>
            </RegisterContainer>
        </div>
    )
}

export default Register