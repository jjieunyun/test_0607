import React from 'react';
import {  NavLink, Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
    const navigation = useNavigate();

    const goBack = () => {
        navigation(-1)
    }

    const nomalStyle = {
        textDecoration: 'none',
        color : 'black',
        fontWeight : 'bold'
    }

    const activeStyle = {
        textDecoration: 'none',
        color : 'green',
        fontWeight : 'bold'
    }

    return (
        <div>
            <NavLink 
                style={({isActive}) => (isActive? activeStyle : nomalStyle)}
                to='/'>Home</NavLink>{'     |'}
            <NavLink
                style={({isActive}) => (isActive? activeStyle : nomalStyle)}
                to='/about'>About</NavLink>{'     |'}
            <NavLink 
                style={({isActive}) => (isActive? activeStyle : nomalStyle)}
                to='/board'>Board</NavLink>
            <Outlet></Outlet>
            <button onClick={goBack}>뒤로가기</button>
        </div>
    );
};


export default Layout;