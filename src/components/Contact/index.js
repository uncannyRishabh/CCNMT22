import React from 'react'
import { ContactHeading, ContactUList,ContactContainer } from './ContactElements'
import ContactFragment from './ContactFragment';

const Contact = () => {
    const prop = {border:"0" , };
    return (
        <div id='Contact' className="Contact">
            <ContactUList>
                <ContactContainer>
                    <li><ContactHeading>CONTACT US</ContactHeading></li>
                    <li><ContactFragment name={'Dr. Shefalika Ghosh Samaddar'}
                        department={'Department of Computer Science and Engineering'}
                        email={'shefalika.ghoshsamaddar@dsec.ac.in'}
                        phone={'+91 8902686525'}/></li>
                    <li><ContactFragment name={'Alt'}
                        department={'Department of Computer Science and Engineering'}
                        email={'alt'}
                        phone={'+alt'}/></li>
                </ContactContainer>
                <ContactContainer>
                    <li><ContactHeading>HOW TO REACH</ContactHeading><br/><br/><br/></li>
                    <li><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1302.1202872068393!2d88.40465621560766!3d22.618254863259647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89e06cfaa32d1%3A0x64c6461b0e5573a8!2sSur%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1641236964817!5m2!1sen!2sin"
                         width="250px" height="250px" style={prop} loading="lazy" 
                         title='Gmap' samesite='None'>
                    </iframe><br/><br/><br/><br/></li>
                </ContactContainer>
            </ContactUList>
        </div>
    )
}

export default Contact