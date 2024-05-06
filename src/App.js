import React, { useEffect, useState } from "react";

function App() {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <GrowingButton />
    </div>
  );
}

const GrowingButton = () => {
  // KODUNUZ BURAYA GELECEK

  const [isButtonBig, setIsButtonBig] = useState(true);

  return (
    <div>
      <button
        className={`${isButtonBig ? "py-24" : "py-2"} ${
          isButtonBig ? "px-36" : "px-6"
        } ${
          isButtonBig ? " font-extralight" : "font-bold"
        } bg-blue-700 text-white rounded-xl flex justify-center items-center transition-all duration-300 ease-in-out max-w-[500px]`}
        onClick={() => setIsButtonBig((pre) => !pre)}
      >
        {isButtonBig ? "küçült" : "BÜYÜT"}
      </button>
    </div>
  );
};

export default App;
