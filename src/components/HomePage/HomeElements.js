import styled from "styled-components";

export const HomeContainer = styled.div`
    background: #DADCEB;
    display: flex;
    padding: 0 30px;
    height: 600px;
    z-index: 1;
    align-content: flex-start;
    
`

export const HomeBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width:100%;
    height: 100%;
    overflow: hidden;
`

export const HLogoContainer = styled.div`
    width: 95%;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const HomeContent = styled.div`
    position: absolute;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 120px 100px 90px;
    justify-content: space-between;
    flex-direction: column;
    padding-right: 30%;
    top: 30%;
    left: 5%;
    right: 5%;

    @media screen and (max-width:980px) {
        padding-right: 10%;
        grid-template-rows: 150px 120px 70px;
    }

    @media screen and (max-width:545px) {
        padding-right: 5%;
        grid-template-rows: 180px 120px;
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
