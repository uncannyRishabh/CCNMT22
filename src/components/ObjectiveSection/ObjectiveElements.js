import styled from "styled-components";

export const ObjectiveContainer = styled.div`
    display: grid;
    grid-template-columns: 5fr 3fr;
    column-gap: 20px;
    align-items: center;
    align-content: center;
    background: #fff;
    padding: 4%;
`

export const ObjHeading = styled.h2`
    display: flex;
    padding-left: 6%;
    padding-top: 3%;
    font-size: 1.8rem;
    color: #001345;
    background: #fff;
`

export const ObjParagraph = styled.p`
    display: flex;
    font-size: 1.0rem;

    @media screen and (max-width:768px) {
        font-size: .9rem
    }
`

export const ObjImage = styled.img`

`