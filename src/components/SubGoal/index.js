import React, { useState } from 'react';

function ClickElem({children}) {

    const [isStrikethrough, setIsStrikethrough] = useState(false);

    const handleClick = () => {
        setIsStrikethrough(!isStrikethrough);
    };

    return (
        <div>
        <p
            onClick={handleClick}
            style={{ textDecoration: isStrikethrough ? 'line-through' : 'none' }}
        >
            {children}
        </p>
        </div>
    );
};

export default function SubGoal({amount, subgoal}) {
    
    return (
        <ClickElem>
            <b>{amount}</b> : {subgoal}
        </ClickElem>
    );
}