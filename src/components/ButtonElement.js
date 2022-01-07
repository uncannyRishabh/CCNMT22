import styled from "styled-components";
import {Link} from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 10px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #253C76;
    height: 56px;
    width: 230px;
    margin-top: 12px;
    padding: 14px;
    color: #fff;
    font-size: 1.0rem;
    text-decoration: none;
    cursor: pointer;
    
    &:hover {
        font-size: 1.1rem;
        /* box-shadow: darkblue  2px 2px; */
    }
`