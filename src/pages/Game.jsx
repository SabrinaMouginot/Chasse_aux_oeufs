import { useState } from "react";
import Egg from "../components/Egg";

function Game() {
  const [eggsFound, setEggsFound] = useState(0);
  const [eggs, setEggs] = useState(() => generateEggs(10)); // Généré une seule fois

  function handleFindEgg(index) {
    if (eggsFound >= eggs.length) return; // Ne rien faire si tous les œufs sont trouvés
  
    const updatedEggs = eggs.map((egg, i) =>
      i === index ? { ...egg, found: true } : egg
    );
    setEggs(updatedEggs);
    setEggsFound(eggsFound + 1);
  }

return (
    <div>
      <h1>Chasse aux œufs</h1>
      <p>Œufs trouvés : {eggsFound}/{eggs.length} 🥚</p>
      {eggsFound === eggs.length ? (
        <p>🎉 Bravo ! Vous avez trouvé tous les œufs !</p>
      ) : (
        <div className="garden">
          {/* Les œufs */}
          {eggs.map((egg, index) =>
            !egg.found ? (
              <Egg
                key={index}
                position={egg}
                onFind={() => handleFindEgg(index)}
              />
            ) : null
          )}
        </div>
      )}
    </div>
  );
  
}

// Fonction pour générer des positions aléatoires
function generateEggs(count) {
  return Array.from({ length: count }, () => ({
    top: Math.random() * 90 + "%",
    left: Math.random() * 90 + "%",
    found: false, // Nouvel attribut pour marquer les œufs trouvés
  }));
}

export default Game;
