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
                    <SidebarLink to='Objective' onClick={toggle}>OBJECTIVE</SidebarLink>
                    <SidebarLink to='Tracks' onClick={toggle}>CONFERENCE TRACKS</SidebarLink>
                    <SidebarLink to='Contact' onClick={toggle}>CONTACT</SidebarLink>
                    <SidebarLink to='Download' onClick={toggle}>DOWNLOAD BROCHURE</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/Register" onClick={toggle}>REGISTER</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
} 

export default Sidebar;