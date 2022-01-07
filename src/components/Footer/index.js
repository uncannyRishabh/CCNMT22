import React from 'react'
import { FooterContainer, Copyright, Links, Socials } from './FooterElements'
import {FaFacebook, FaLinkedin, FaYoutube} from 'react-icons/fa'
import {Link as LinkR} from 'react-router-dom';

const Footer = () => {
    const paraS = {'maxWidth': '370px',
        'padding-right': '12%',
        'line-height': '25px',
        'margin-bottom': '25px',
        'display':'flex',
        'justify-contents':'flex-start'}
    // const listS = {'line-height':'35px', 'margin-bottom':'5%'}
    const listS2 = {'line-height':'30px'}
    
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
                <li style={{'font-size':'1.2rem'}}>
                    <a target="_blank" href="https://www.facebook.com/SurTechCollege/" rel="noreferrer"><FaFacebook/></a> &nbsp;&nbsp;
                    <a target="_blank" href="https://www.linkedin.com/company/dr-sudhir-chandra-sur-institute-of-technology-sports-complex/" rel="noreferrer"><FaLinkedin/></a>&nbsp;&nbsp;
                    <a target="_blank" href="https://www.youtube.com/channel/UCXtDx43W4KtIlSIjbrXMx-A" rel="noreferrer"><FaYoutube/></a></li>
            </Socials>
            <Copyright >SURTECH © 2022 All Rights Reserved</Copyright>
        </>
        
    )
}

export default Footer