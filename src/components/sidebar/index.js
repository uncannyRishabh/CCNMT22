import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarWrapper,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute } from './SidebarElem'

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='Home' onClick={toggle}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}>HOME</SidebarLink>
                    <SidebarLink to='Objective' onClick={toggle}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}>OBJECTIVE</SidebarLink>
                    <SidebarLink to='AboutUs' onClick={toggle}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}>ABOUT US</SidebarLink>
                    <SidebarLink to='Tracks' onClick={toggle}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}>CONFERENCE TRACKS</SidebarLink>
                    <SidebarLink to='Contact' onClick={toggle}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}>CONTACT</SidebarLink>
                    <SidebarLink to='Download' onClick={toggle}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}>DOWNLOAD BROCHURE</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/Register" onClick={toggle}>REGISTER</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
} 

export default Sidebar;