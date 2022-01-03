import React from 'react'
import { FooterContainer, Copyright, Socials } from './FooterElements'
import {FaFacebook, FaLinkedin, FaYoutube} from 'react-icons/fa'

const Footer = () => {
    const prop = {'padding-right': '20%'}
    return (
        <>
            <FooterContainer>
                <div><p style={prop}>Dr. Sudhir Chandra Sur Institute of Technology {'&'} Sports Complex, located in Kolkata. The college is one of the top among the 30 institutions in West Bengal owned by JIS Group, the largest educational conglomerate in Eastern India.</p></div>
                <div>
                    <h3>IMPORTANT LINKS</h3>
                    <li>Downlod Brochure</li>
                    <li>Call for Papers</li>
                    <li>Paper Format</li>
                    <li>Committee</li>
                </div>
            </FooterContainer>
            <Socials>
                <li><p>Follow Us <br/></p></li>
                <li><FaFacebook/><FaLinkedin/><FaYoutube/></li>
                <li></li>
            </Socials>
            <Copyright>SURTECH © 2022 All Rights Reserved</Copyright>
        </>
        
    )
}

export default Footer