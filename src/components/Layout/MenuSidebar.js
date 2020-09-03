import React, {useState} from 'react';
import styled from 'styled-components';

const SidebarMenu = styled.div`
    height: 100vh;
    width: 50px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;
    padding-top: 20px;
    background-color: red;
    animation: slide-open 1s forwards;
`;

export const MenuSidebar = () => {
    return(
        <SidebarMenu/>
    )
}