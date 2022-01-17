import styled from "styled-components";
import {Link} from 'react-scroll';
import HeroSVG from '../../assets/herosvg.svg'

export const HomeContainer = styled.div`
    background-image: url(${HeroSVG});
    background-repeat: no-repeat;
    background-color: #DADCEB;
    background-position: 96% 100%;
    background-size: 50%;
    display: flex;
    flex-direction: column;
    z-index: 1;
    transition: 'background' 0.3s ease-in-out;

    @media screen and (max-width:960px){
        background: #DADCEB;
    }

    @media screen and (max-width:680px){
        align-items:center
    }

`

export const HLogoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top:3%;
    padding-left: 6%;
    padding-right: 6%;
    @media screen and (max-width: 410px){
        display: none;
    }
`

export const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding-left: 6%;
    padding-right: 35%;
    padding-bottom: 8%;

    @media screen and (max-width:960px) {
        padding-right: 15%;
    }
    
    @media screen and (max-width:680px) {
        padding-right: 5%;
    }
`

export const EventIC = styled.div`
    display: flex;
    flex-direction: column;
`

export const CSpan = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 30px;
    height: 30px;
    width: 30px;
    margin-right: 6px;
    background-color: rgba(105,145,255,0.5);
    border-radius: 20px;
`

export const Button = styled(Link)`
    display: flex;
    height: 60px;
    width: 50%;
    align-items: center;
    justify-content: center;
    margin-top: 3%;
    border-radius: 10px;
    padding-left: 14px;
    padding-right: 14px;
    background: #253C76;
    color: white;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    font-size: 1.2rem;
    box-shadow: 1px 2px 10px 0px #253C76;
    &:hover {
        background: #2C4EA5;
        font-size: 1.25rem;        
    }

    &:active {
        margin-top: 2px;
    }

    @media screen and (max-width:680px) {
        width: 100%;
    }
`