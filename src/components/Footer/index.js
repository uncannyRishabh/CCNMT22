import React from 'react'
import { FooterContainer, Copyright, Links, Socials, IHolder } from './FooterElements'
import {FaFacebook, FaLinkedin, FaYoutube} from 'react-icons/fa'
// import {Link as LinkR} from 'react-router-dom';

const Footer = () => {
    const paraS = {'maxWidth': '370px',
        'paddingRight': '12%',
        'lineHeight': '25px',
        'marginBottom': '25px',
        'display':'flex',
        'justifyContents':'flex-start'}

    const listS2 = {'lineHeight':'30px'}
    
    return (
        <>
            <FooterContainer>
                <div><p style={paraS}>Dr. Sudhir Chandra Sur Institute of Technology {'&'} Sports Complex, located in Kolkata. The college is one of the top among the 30 institutions in West Bengal owned by JIS Group, the largest educational conglomerate in Eastern India.</p></div>
                <Links >
                    <h3>IMPORTANT LINKS</h3>
                    <li id='Download'>Downlod Brochure</li>
                    <li>Call for Papers</li>
                    <li>Paper Format</li>
                    <li>Committee</li>
                </Links>
            </FooterContainer>
            <Socials style={listS2}> 
                <IHolder target="_blank" href="https://www.youtube.com/channel/UCXtDx43W4KtIlSIjbrXMx-A" rel="noreferrer">
                    <FaYoutube color='fff'/></IHolder> &nbsp;&nbsp;
                <IHolder target="_blank" href="https://www.facebook.com/SurTechCollege/" rel="noreferrer">
                    <FaFacebook color='fff'/></IHolder> &nbsp;&nbsp;
                <IHolder target="_blank" href="https://www.linkedin.com/company/dr-sudhir-chandra-sur-institute-of-technology-sports-complex/" rel="noreferrer">
                    <FaLinkedin color='fff'/></IHolder>
            </Socials>
            <Copyright >SURTECH © 2022 All Rights Reserved</Copyright>
        </>
        
    )
}

export default Footer