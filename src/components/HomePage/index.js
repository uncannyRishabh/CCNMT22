import React from 'react'
import {
    HomeContainer,
    HomeContent,
    HLogoContainer,
    EventIC,
    CSpan, Button
} from  './HomeElements'
import SurtechLogo from '../../assets/dscsdec logo.png'
import JISGRPLogo from '../../assets/jis-logo.png'
import {GiMaterialsScience as OrganizedBy} from 'react-icons/gi'
import {BsCalendar2Check as Calendar} from 'react-icons/bs'
import {ImLocation as Location} from 'react-icons/im'
import '../../App.css'

const HomePage = () => {
    const prop = {
        display:'flex',
        alignItems:'center',
        marginBottom:'6px',
        maxLine:'1'
    }

    return (
        <HomeContainer id='Home'>
            <HLogoContainer>
                <img src={SurtechLogo} alt='none' /*width='185px'*/ height='40px' />
                <img src={JISGRPLogo} alt='none' /*width='65px'*/ height='55px'/>
            </HLogoContainer>

            <HomeContent>
                <li><h1 style={{"fontFamily":"Poppins"}}><br/>International Conference on Communication and Nano-Microwave Technology (CCNMT - 2022)</h1></li>
                <br/> 
                
                <EventIC>
                    <div style={prop}>
                        <CSpan>
                            <OrganizedBy style={{color:'#14263A'}}/>
                        </CSpan>Organized By : Department of Computer Science and Engineering <br/>
                    </div>
                    <div style={prop}>
                        <CSpan>
                            <Location style={{color:'#14263A'}}/>
                        </CSpan>Venue : Dr. Sudhir Chandra Sur Institute of Technology<br/>
                    </div>
                    <div style={prop}>
                        <CSpan>
                            <Calendar style={{color:'#14263A'}}/>
                        </CSpan>Date {'&'} Time : 9th March 2022  |  6:30 PM (GMT +5:30)<br/>
                    </div>    
                </EventIC>    
            
                <li><Button to='Register'
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}>
                    <p style={{"fontFamily":"Poppins"}}>REGISTER</p>
                </Button>
                <br/><br/></li>
            </HomeContent>
        </HomeContainer>
        
    )
}

export default HomePage