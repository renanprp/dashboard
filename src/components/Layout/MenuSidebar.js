import React from 'react';
import styled from 'styled-components';
import { GrClose } from "react-icons/gr";

const SidebarMenu = styled.div`
    height: 100vh;
    width: 0px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;
    padding-top: 20px;
    background-color: #F5F5F6;
    left: -100%;
    animation: slide-open 1s forwards;

    @keyframes slide-open{
        100% {left: 0}
    }
`;

export const CloseMenu = styled(GrClose)`
    font-size: 20px;
    position: absolute;
    right: 0;
    margin-right: 10px;
    cursor: pointer;
`

export const MenuSidebar = () => {

    return(
        <SidebarMenu>
            <CloseMenu/>
        </SidebarMenu>
    )
}