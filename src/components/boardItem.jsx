import React from 'react';
import { useParams } from 'react-router-dom';

const BoardItem = () => {
    const {id} = useParams();

    return (
        <div>
            <h2>{id}페이지입니다.</h2>
        </div>
    );
};

export default BoardItem;