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
                <img src={SurtechLogo} alt='none' width={185} />
                <img src={JISGRPLogo} alt='none' width={65}/>
            </HLogoContainer>

            <HomeContent>
                <h1>International Conference on Communication and Nano-Microwave Technology (CCNMT - 2022)</h1>
                <STCH1>Organized By : Department of Computer Science and Engineering <br/>
                Venue : Dr. Sudhir Chandra Sur Degree Engineering College Kolkata, India <br/>
                Date {'&'} Time : 9th March 2022  |  6:30 PM (GMT +5:30)</STCH1>
                <Button to='Register'
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}>
                    <h3>REGISTER</h3>
                </Button>

            </HomeContent>
            
        </HomeContainer>

        
    )
}

export default HomePage