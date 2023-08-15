import React, { useEffect, useState } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';


function App() {

  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  },[theme]);

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className='min-h-screen w-full bg-[#f5f5f5] dark:bg-[#343b3e]'>
      <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home theme={theme} switchTheme={switchTheme} />} />
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App