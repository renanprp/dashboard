import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {getSideBar} from '../services/sidebar';

export const Sidebar = () => {
    const [menu, setMenu] = useState(null);
    useEffect(() => {
        const fetch = async () => {
            const response = await getSideBar();

            setMenu(response);
        }
        fetch();
    },[]);

    return (
        <nav>
            <ul>
                {menu && menu.map((item, index) => {
                    return(
                        <li key={index}>
                            <Link to={item.path}>
                                {item.label}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}