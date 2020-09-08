import React, { useState } from 'react';
import styled from 'styled-components';
import { BsList } from "react-icons/bs";
import { Popover, ListGroup, ListGroupItem } from 'reactstrap';

const HeaderPage = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #81b9bf;
    height: 50px;
`;
const MenuButton = styled(BsList)`
    margin-left: 10px;
    font-size: 20px;
    cursor: pointer;
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

HeaderPage.Avatar.Menu = styled.div`
    width: 150px;
    height: 100px;
    position: absolute;
    z-index: 999;
    background-color: red;
    right: 0;
    animation-delay: 2s;
`;

export const Header = () => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

    return(        
        <HeaderPage>
            <MenuButton/>
                <HeaderPage.Title>
                    <img src="/assets/images/icon-header.png" alt="icone github header"/>
                    <h5>Github Dashboard</h5>
                </HeaderPage.Title>
                <HeaderPage.Avatar id="Popover1">
                    <img src="/assets/images/avatar.png" alt="icone avatar user"/>  
                </HeaderPage.Avatar>
                    <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
                        <ListGroup>
                            <ListGroupItem tag="a" href="#" action>
                                Detalhes
                            </ListGroupItem>
                            <ListGroupItem tag="a" href="#" action>
                                Configurações
                            </ListGroupItem>
                            <ListGroupItem tag="a" href="#" action>
                                Sair
                            </ListGroupItem>
                        </ListGroup>
                    </Popover>
        </HeaderPage>
    ) 
}
