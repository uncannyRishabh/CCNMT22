import styled from "styled-components";

export const ObjectiveContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    column-gap: 20px;
    align-items: center;
    background: #fff;
    padding-left: 6%;
    padding-top: 6%;
    padding-bottom: 6%;

    @media screen and(max-width:680px){
        justify-content: center;
    }
`

export const ObjHeading = styled.h2`
    display: flex;
    padding-left: 6%;
    padding-top: 3%;
    font-size: 1.8rem;
    color: #001345;
    background: #fff;
    font-family: 'Poppins';
`

export const ObjParagraph = styled.p`
    display: flex;
    font-size: 1.0rem;
    max-width:480px;
    width: 45%;

    @media screen and (max-width:680px) {
        width: 420px;
        font-size: .9rem
    }
`

export const CarouselContainer = styled.div`
    display: flex;
    justify-self: center;
    width: 350px;
    
`