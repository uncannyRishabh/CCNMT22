import styled from "styled-components";

export const CardContainer = styled.section`
    border-radius: 5px;
    display: flex;
    width: 300px;
    flex-direction: column;
    background: #BFD7F8;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 16px;
    margin-right: 12px;
    overflow: hidden;
    
    
    &:hover{
        background: #D8DCFF;
        transition: .3s ease-in-out;
        transform: scale(1.01);
    }
`

export const Title = styled.p`
    height: 50px;
    margin: 14px;
    display: flex;
    align-self: center;
    color: #032A58;
`

export const Subtitle = styled.h4`
    height: 20px;
    margin: 14px;
    margin-bottom: 20px;
    display: flex;
    color: darkslateblue;
    align-self: flex-end;
    cursor: pointer;
    &:hover{
        font-style: italic;
        transform: scale(1.05);
    }
`

export const Image = styled.img`
    &:hover{
        transition: .3s ease-in-out;
        transform: scale(1.05);
    }
`