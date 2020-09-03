import React from 'react';
import styled from 'styled-components';
import { BsFillGrid3X3GapFill } from "react-icons/bs";

const HeaderPage = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #81b9bf;
    height: 50px;
`;

HeaderPage.Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 50px;
        height: 40px;
    }
`;

HeaderPage.Avatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    img{
        width: 35px;
        height: 35px;
    }
    &:hover{
        cursor: pointer;
    }
`;

export const Header = () => {
    return(
        <HeaderPage>
            <BsFillGrid3X3GapFill style={{ marginLeft: 10, fontSize: 25, cursor: "pointer" }}/>
            <HeaderPage.Title>
                <img src="/assets/images/icon-header.png" alt="icone github header"/>
                <h5>Github Dashboard</h5>
            </HeaderPage.Title>
            <HeaderPage.Avatar>
                <img src="/assets/images/avatar.png" alt="icone avatar user"/>
            </HeaderPage.Avatar>
        </HeaderPage>
    ) 
}
