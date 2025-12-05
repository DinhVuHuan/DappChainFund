import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(false); // quản lý dark mode toàn app

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* Nền chung */}
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">

        {/* Header nhận props để toggle */}
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />

      </div>
    </div>
  );
};

export default App;
