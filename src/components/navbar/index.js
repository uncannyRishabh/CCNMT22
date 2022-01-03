import React from 'react'
import {FaBars} from 'react-icons/fa'
import { 
    Nav,
    NavbarContainer,
    CollegeLogo,
    HamburgerMenu,
    NavItems,
    Navmenu,
    NavLinks,
    NavBtn,
    NavBtnLink } from './NavbarElements'
import SurtechLogo from '../../assets/stc_logo.png'

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <CollegeLogo to='Home'
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}>
                        <img src = {SurtechLogo} alt='none' width={45}/>
                    </CollegeLogo>
                    <HamburgerMenu onClick={toggle}>
                        <FaBars/>
                    </HamburgerMenu>
                    <Navmenu>
                        <NavItems>
                            <NavLinks to='Objective'
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}>OBJECTIVE</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to='AboutUs'
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}>ABOUT US</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to='Tracks'
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}>CONFERENCE TRACKS</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to='Contact'
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}>CONTACT</NavLinks>
                        </NavItems>
                        
                    </Navmenu>
                    <NavBtn> 
                        <NavBtnLink to='Register'
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}>REGISTER</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
