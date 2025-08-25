import { useState, useEffect } from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import Home from "./pages/Home";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
