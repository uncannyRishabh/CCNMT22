import styled from "styled-components";

export const FooterContainer = styled.div`
    display: grid;
    flex-direction: row;
    grid-template-columns: 5fr 3fr ;
    height: 300px;
    background: #081728;
    color: #fff;
    list-style: none;
    padding-top: 50px;
    padding-bottom: 30px;
    padding-left: 12%;
    padding-right: 12%;
    justify-content: center;
`

export const Copyright = styled.div`
    display: flex;
    justify-content: center;
    background: #081728;
    color: #fff;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: .8rem;
`

export const Socials = styled.div`
    display: flex;
    color: #fff;
    background: #081728;
    list-style: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`