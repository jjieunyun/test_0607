import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';


const Board = () => {
    const numbers = [1, 2, 3, 4, 5];

    const nomalStyle = {
        textDecoration: 'none',
        color : 'black',
        fontWeight : 'bold'
    }


    return (
        <div>
            <h1>Board</h1>
            <p>파라미터 및 중첩라우터를 사용하여 아래 Board의 내용이 보입니다.</p>
            
            <ul style={{padding : 0}}>
                {
                    numbers.map((num,index) => (
                        <span style={{listStyle:'none'}} key={index}>
                            <NavLink style={nomalStyle} to={`/board/${num}`} 
                            >
                                {num}
                            </NavLink>
                        </span>
                    ))
                }
            </ul>

            <Outlet/>
        </div>
    );
};

export default Board;