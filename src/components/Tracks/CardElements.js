import styled from "styled-components";

export const CardContainer = styled.section`
    border: 1px solid rgba(0,0,0,0.15);
    border-radius: 5px;
    display: flex;
    width: 340px;
    flex-direction: column;
    background: #fff;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 16px;
    margin-right: 16px;
    overflow: hidden;
    transition: box-shadow .2s ease-in-out;
    cursor: pointer;
    &:hover{
        /* transform: scale(1.01); */
        border: none;
        box-shadow: 1px 1px 12px rgba(0,0,0,0.3);

    }
`

export const Image = styled.img`
    transition: 2s cubic-bezier(0.11, 1.49, 0.39, 1.28);
    &:hover{
        transform: scale(1.05);
    }
`

export const Title = styled.p`
    display: flex;
    align-self: center;
    color: #032A58;
    font-family: 'Roboto';
    font-size: 1.1rem;
    padding-top: 8px;
    padding-bottom: 6px;
`

export const Description = styled.p`
    height: 150px;
    padding-right: 4px;
    padding-top: 12px;
    font-size: .9rem;
    overflow: hidden;
    
`

export const LearnMore = styled.p`
    font-size: .9rem;
    padding-top: 8px;
    margin-top: 2px;
    margin-bottom: 12px;
    display: flex;
    color: darkslateblue;
    align-self: flex-end;
    cursor: pointer;
    /* &:hover{
        
    } */
`

