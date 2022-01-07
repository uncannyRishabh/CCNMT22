import styled from "styled-components";

export const RegisterHeading = styled.h2`
    display: flex;
    padding-left: 6%;
    font-size: 1.8rem;
    color: #001345;
    background: #F9EEEE;
    padding-top: 50px;
    padding-bottom: 20px;
`

export const RegisterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-left : 6%;
    padding-top: 2%;
    padding-bottom: 10%;
    list-style: none;
    background: #F9EEEE;
    @media screen and (max-width: 760px){
        column-count: 1;
    }
`

export const TextContainer = styled.div`
    width: 45%;
    margin-bottom: 20px;
    color: #001345;
    @media screen and (max-width : 960px){
        width: 500px;
    }
`

export const FormContainer = styled.form`
    display: flex;
    width: 50%;
    padding-top: 3%;
    padding-left: 5%;
    margin-bottom: 5%;
    @media screen and (max-width : 960px){
        width: 100%;
        padding-left: 0%;
    }

`

export const RHead = styled.h3`
    display: flex;
    height: 50px;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 6x;
`

export const Clist = styled.li`
    line-height: 1.5;
    font-size: .95rem;
    color: #390011;
    border-left: 5px solid #002050;
    padding-left: 8px;
`

export const CForm = styled.form`
    display: flex;
    flex-flow: column;
    align-items: center;
    background: #fff;
    padding: 20px;
    padding-bottom: 35px;
    border-radius: 10px;
    box-shadow: 1px 1px 2px 2px #FFE4E4;
    @media screen and (max-width : 960px){
        width: 100%;
        padding-left: 6%;
        padding-right: 6%;
        margin-right: 6%;
        
    }
`

export const CFIeld = styled.input`
    height: 50px;
    width: 350px;
    padding-left: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
    ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }    

    @media screen and (max-width : 960px){
        width: 100%;
    }
`