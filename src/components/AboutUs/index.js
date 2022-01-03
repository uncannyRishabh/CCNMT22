import React from 'react'
import {
    AboutUsContainer,
    AboutUsHeading,
    AboutUsParagraph,
} from './AboutUsElements'
import IMG from '../../assets/College_full.jpg'


const AboutUsSection = () => {
    return (
        <div id='AboutUs' className="AboutUs">
            <AboutUsHeading>ABOUT US</AboutUsHeading>
            <AboutUsContainer >
                <div>
                <img src={IMG}  alt="none" width={"100%"} height={"auto"}/>
                </div>
                <AboutUsParagraph>Dr. Sudhir Chandra Sur Institute of Technology was instituted with a vision to empower the aspiring professionals with the technological knowledge and professional expertise under the aegis of JIS Group Educational Initiatives in the year 2009. This technical campus offers undergraduate and post graduate courses under West Bengal University of Technology (WBUT now MAKAUT) and some courses are NBA Accredited. The Institute is approved by AICTE and accredited by UGC, NAAC and located in one of the prime locations in North Kolkata near Dum Dum. The Institute offers latest technology oriented courses as per industry trends and nurtures creativity, innovations and research initiatives both at faculty and student levels to enrich and enhance the teaching learning process.</AboutUsParagraph>
            </AboutUsContainer>
        </div>
    )
}

export default AboutUsSection
