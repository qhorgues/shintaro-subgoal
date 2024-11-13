import React from 'react';
import SubGoal from '../../components/SubGoal';


const Goal = [
    {
        amount: "1€",
        subgoal: "J'allume mon micro"
    },
    {
        amount: "5€",
        subgoal: "J'allume ma caméra"
    }
  ];

const Home = () => {
  return (
    <article>  {/*className="list_content margin-top--lg"*/}
      <section> {/* className="list-item row" */}
        {Goal.map((props, idx) => (
          <SubGoal key={idx} goal={{...props, index: idx, total: Goal.length}} />
        ))}
      </section>
    </article>
  );
};

export default Home;


/* export default function Home() {
    return (
        <img src="donation-goal.png" width={"100%"} alt="La liste des sub goal"></img>
    );
} */