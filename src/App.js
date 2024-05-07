import React, { useEffect, useState } from "react";

function App() {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <GrowingButton />
    </div>
  );
}

const GrowingButton = () => {
  const [size, setSize] = useState(100);
  const [growing, setGrowing] = useState(true);

  const maxSize = 300; // Maximum size of the button
  const minSize = 100; // Minimum size of the button

  useEffect(() => {
    const interval = setInterval(() => {
      setSize((currentSize) => {
        if (growing) {
          return currentSize + 10 <= maxSize ? currentSize + 10 : maxSize;
        } else {
          return currentSize - 10 >= minSize ? currentSize - 10 : minSize;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, [growing]);

  const toggleGrowing = () => {
    setGrowing(!growing);
  };

  return (
    <button
      className="bg-blue-700 text-white rounded-xl flex justify-center items-center transition-all duration-300 ease-in-out"
      style={{ padding: `${size}px ${size * 1.5}px` }}
      onClick={toggleGrowing}
    >
      {growing ? "Küçült" : "Büyüt"}
    </button>
  );
};

export default App;
