import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: ${({isOpen}) => (isOpen ? '999' : '0')};
    width: 100%;
    height: 100%;
    background: #14263A;
    display: ${({isOpen}) => (isOpen ? 'grid' : 'none')};
    align-items: center;
    left: 0;
    transition: 0.3ms ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top:${({isOpen}) => (isOpen ? '0' : '100')};
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const Icon = styled.div`
    position: absolute;
    top : 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #fff;

`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(7,60px);
    text-align: center;

    @media screen and (max-width:480px){
        grid-template-rows: repeat(8,50px); 
    }
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:1.5rem;
    list-style: none;
    text-decoration: none;
    transition: 0ms.2s ease-in-out;
    color: #fff;
    cursor: pointer;
    font-family: Poppins;
    &:hover{
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display: flex ;
    justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #253C76;
    white-space: nowrap;
    padding: 16px 84px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2 ease-in-out;
    text-decoration: none;
    font-family: Poppins;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #253C76;
    }
`