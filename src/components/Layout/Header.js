import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import { BsList } from "react-icons/bs";
import { Popover, ListGroup, ListGroupItem } from 'reactstrap';
import {getUser} from '../../services/header';

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
        border-radius: 50%;
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

export const Header = withRouter(props => {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const toggle = () => setPopoverOpen(!popoverOpen);

    const [user, setUser] = useState({});
    useEffect(() => {
        const requestUser = async () => {
            const response = await getUser();
            setUser(response.data);
        }
        requestUser();
    },[])

    const handleClick = (rota) => {
        props.history.push(rota);
    }

    return(        
        <HeaderPage>
            <MenuButton/>
                <HeaderPage.Title>
                    <img src="/assets/images/icon-header.png" alt="icone github header"/>
                    <h5>Github Dashboard</h5>
                </HeaderPage.Title>
                <HeaderPage.Avatar id="Popover1">
                    <img src={user.avatar_url} alt="icone avatar user"/>  
                </HeaderPage.Avatar>
                    <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
                        <ListGroup>
                            <ListGroupItem tag="button" href="#" action onClick={() => {handleClick('/user-details')}}>
                                Detalhes
                            </ListGroupItem>
                            <ListGroupItem tag="button" href="#" action onClick={() => {}}>
                                Configurações
                            </ListGroupItem>
                            <ListGroupItem tag="button" href="#" action onClick={() => {handleClick('/login')}}>
                                Sair
                            </ListGroupItem>
                        </ListGroup>
                    </Popover>
        </HeaderPage>
    ) 
})
