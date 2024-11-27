import React from 'react';
import './Goal.css';

const interpolateColor = (color1, color2, factor) => {
    const result = color1.slice(1).match(/.{2}/g)
        .map((hex, index) => {
            return Math.round(parseInt(hex, 16) * (1 - factor) + parseInt(color2.slice(1).match(/.{2}/g)[index], 16) * factor);
        });
    return `#${result.map(value => value.toString(16).padStart(2, '0')).join('')}`;
};

const Goal = ({ goal, amount, index, totalGoals, onClick, completed }) => {
    const startColor = '#FFEB3B';
    const endColor = '#FF6347';
    const factor = index / (totalGoals - 1);
    const color = interpolateColor(startColor, endColor, factor);

    return (
        <div className={`goal ${completed ? 'completed' : ''}`} style={{ color }} onClick={() => onClick(index)}>
            <span className="goal-amount" data-amount={`${amount}€`}>{amount}€</span>
            <span className="goal-name">{goal}</span>
        </div>
    );
};

export default Goal;
