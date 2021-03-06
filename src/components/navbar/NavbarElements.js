import styled  from "styled-components"
import {Link as LinkS} from "react-scroll"

export const Nav = styled.nav`
    background: #14263A;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width : 960px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const CollegeLogo = styled(LinkS)`
    color: red;
    justify-self: flex-start;
    cursor:pointer;
    display: flex;
    align-items: center;
    font: 1.5rem;
    margin-left: 0px;
    text-decoration: none;
`

export const HamburgerMenu = styled.div`
    display: none;

    @media screen and (max-width:760px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%,60%);
        font-size: 1.8rem;
        cursor: pointer;
        color : #fff;
    }
`

export const Navmenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 760px){
        display:none;
    }
`

export const NavItems = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-family: Poppins;
    &.active{
        border-bottom: 3px solid #01bf71; //TODO: change to yello
    }

    &:hover{
        text-shadow: 0px 0px 8px rgba(255,255,255,0.5);
    }
`

export const NavBtn = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 760px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkS)`
    border-radius: 22px;
    background: #253C76;
    white-space: nowrap;
    padding: 10px 18px;
    color: whitesmoke;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-family: Poppins;
    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #233C76
    }
`
