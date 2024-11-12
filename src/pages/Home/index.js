import React, { useEffect } from 'react';
import { FireTVKeyEvent } from 'react-native-fire-tv-keyevent';

const Home = () => {
    useEffect(() => {
        const handleKeyEvent = (event) => {
            if (event.keyCode === FireTVKeyEvent.KEYCODE_DPAD_CENTER) {
                alert('Bonjour');
            }
        };

        FireTVKeyEvent.addListener(handleKeyEvent);

        return () => {
            FireTVKeyEvent.removeListener(handleKeyEvent);
        };
    }, []);

  return (
    <div>
      <h1>Appuyez sur "Entrée" pour afficher un message</h1>
    </div>
  );
};

export default Home;


/* export default function Home() {
    return (
        <img src="donation-goal.png" width={"100%"} alt="La liste des sub goal"></img>
    );
} */