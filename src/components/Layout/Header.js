import React from 'react';
import styled from 'styled-components';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';

const HeaderPage = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #81b9bf;
    height: 50px;
`;

HeaderPage.Menu = styled.span`
    margin-left: 10px;
    font-size: 20px;
    &:hover{
        cursor: pointer;
    }
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
    margin-right: 5px;
    img{
        width: 40px;
        height: 40px;
    }
    &:hover{
        cursor: pointer;
    }
`;

export const Header = () => {
    return(
        <HeaderPage>
            <HeaderPage.Menu>
                <i class="fas fa-bars"></i>
            </HeaderPage.Menu>
            <HeaderPage.Title>
                <img src="/assets/images/icon-header.png" alt="icone github header"/>
                <span>Github Dashboard</span>
            </HeaderPage.Title>

            
            <HeaderPage.Avatar>
                <img src="/assets/images/avatar.png" alt="icone avatar user"/>
            </HeaderPage.Avatar>
        </HeaderPage>
    ) 
}
