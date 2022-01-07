import React from 'react'
import {
    HomeContainer,
    HomeContent,
    HLogoContainer,
    STCH1
} from  './HomeElements'
import {Button} from '../ButtonElement'
import SurtechLogo from '../../assets/dscsdec logo.png'
import JISGRPLogo from '../../assets/jis-logo.png'

const HomePage = () => {
    return (
        <HomeContainer id='Home'>
            <HLogoContainer>
                <img src={SurtechLogo} alt='none' /*width='185px'*/ height='40px' />
                <img src={JISGRPLogo} alt='none' /*width='65px'*/ height='55px'/>
            </HLogoContainer>

            <HomeContent>
                <li><h1><br/><br/>International Conference on Communication and Nano-Microwave Technology (CCNMT - 2022)</h1></li>
                <li><STCH1><br/>Organized By : Department of Computer Science and Engineering <br/>
                Venue : Dr. Sudhir Chandra Sur Degree Engineering College Kolkata, India <br/>
                Date {'&'} Time : 9th March 2022  |  6:30 PM (GMT +5:30)</STCH1><br/><br/></li>
                <li><Button to='Register'
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}>
                    <h3>REGISTER</h3>
                </Button>
                <br/><br/></li>
            </HomeContent>
        </HomeContainer>
        
    )
}

export default HomePage