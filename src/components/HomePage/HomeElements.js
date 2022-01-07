import styled from "styled-components";

export const HomeContainer = styled.div`
    background: #DADCEB;
    display: flex;
    flex-direction: column;
    z-index: 1;
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
    padding-top:3%;
    padding-bottom: 10%;

    @media screen and (max-width:980px) {
        padding-right: 15%;
    }
    
    @media screen and (max-width:680px) {
        padding-right: 5%;
        align-items: center;
    }
`

export const STCH1 = styled.p`
    line-height: 1.5;
`

export const RegisterBtn = styled.div`
    border-radius: 10px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #253C76;
    height: 52px;
    width: 160px;
    margin-top: 12px;
    padding: 14px;
    color: #fff;
    font-size: .8rem;
    text-decoration: none;
    cursor: pointer;
`
