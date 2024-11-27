import React, { useState } from 'react';
import Goal from './Goal';
import './Goal.css';

const GoalList = () => {
    const initialGoals = [
        { goal: 'Je teste un savon "Chocolatine"', amount: 25 },
        { goal: 'Raclette live ce soir !', amount: 50 },
        { goal: 'Je lance beat saber', amount: 75 },
        { goal: 'Je fais une course de 10km', amount: 100 },
        { goal: 'Je dévoile la recette des gâteaux de mon enfance', amount: 125 },
        { goal: 'J\'affronte la STREAMBU aux échecs/othello', amount: 150 },
        { goal: 'Je m\'inscris à un tournoi d\'échec officiel', amount: 175 },
        { goal: 'Je mange des insectes', amount: 200 },
        { goal: 'Je fais un semi marathon dans l\'année', amount: 211 },
        { goal: 'Je fais un test de pureté', amount: 225 },
        { goal: 'J\'organise un karaoké live', amount: 250 },
        { goal: 'Best of pepite de comptoir d\'officine', amount: 275 },
        { goal: 'Je teins ma barbe pour Noël', amount: 300 },
        { goal: 'Création de vêtements "Le Lama"', amount: 350 },
        { goal: 'Je fais un marathon', amount: 422 },
        { goal: 'Débat salé sur les vaccins', amount: 451 },
        { goal: 'Je finis la première planète sur Factorio ce week-end', amount: 500 },
        { goal: 'Je corrige Foxgon, l\'octogone !!', amount: 2000 }

    ];

    const [goals, setGoals] = useState(initialGoals);
    const [completedIndex, setCompletedIndex] = useState(-1);

    const handleGoalClick = (index) => {
        if (index <= completedIndex) {
            setCompletedIndex(index - 1); // Débarrer les goals à partir de l'index actuel
        } else {
            setCompletedIndex(index); // Barrer jusqu'au goal actuel
        }
    };

    return (
        <div className="goal-list">
            {goals.map((goal, index) => (
                <Goal
                    key={index}
                    goal={goal.goal}
                    amount={goal.amount}
                    index={index}
                    totalGoals={goals.length}
                    onClick={handleGoalClick}
                    completed={index <= completedIndex}
                />
            ))}
        </div>
    );
};

export default GoalList;





/*
{ goal: 'Je teste un savon "Chocolatine"', amount: 25 },
{ goal: 'Raclette live ce soir !', amount: 50 },
{ goal: 'Je lance beat saber', amount: 75 },
{ goal: 'Je fais une course de 10km', amount: 100 },
{ goal: 'Je dévoile la recette des gâteaux de mon enfance', amount: 125 },
{ goal: 'J\'affronte la STREAMBU aux échecs/othello', amount: 150 },
{ goal: 'Je m\'inscris à un tournoi d\'échec officiel', amount: 175 },
{ goal: 'Je mange des insectes', amount: 200 },
{ goal: 'Je fais un semi marathon dans l\'année', amount: 211 },
{ goal: 'Je fais un test de pureté', amount: 225 },
{ goal: 'J\'organise un karaoké live', amount: 250 },
{ goal: 'Best of pepite de comptoir d\'officine', amount: 275 },
{ goal: 'Je teins ma barbe pour Noël', amount: 300 },
{ goal: 'Création de vêtements "Le Lama"', amount: 350 },
{ goal: 'Je fais un marathon', amount: 422 },
{ goal: 'Débat salé sur les vaccins', amount: 451 },
{ goal: 'Je finis la première planète sur Factorio ce week-end', amount: 500 },
{ goal: 'Je corrige Foxgon, l\'octogone !!', amount: 2000 }
 */

