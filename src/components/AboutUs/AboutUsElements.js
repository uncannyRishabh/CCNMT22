import styled from "styled-components";

export const AboutUsContainer = styled.div`
    display: grid;
    grid-template-columns: 3fr 5fr;
    column-gap: 20px;
    align-items: center;
    align-content: center;
    background: #DADCEB;
    padding: 4%;
`

export const AboutUsHeading = styled.h2`
    display: flex;
    padding-left: 6%;
    padding-top: 3%;
    font-size: 1.8rem;
    color: #173058;
    background: #DADCEB;
    font-family: 'Poppins';
`

export const AboutUsParagraph = styled.p`
    display: flex;
    font-size: 1.0rem;
    color: #173058;
    @media screen and (max-width:768px) {
        font-size: .9rem
    }
`

export const AboutUsImage = styled.img`

`