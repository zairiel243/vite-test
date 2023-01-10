import { useState, useContext, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Switch from './components/Switch'
import { GlobalContextProvider, GlobalContext } from './context/GlobalContext'
import './App.css'
import Layout from './pages/Layout'
import Home from './pages/Home'

function App() {

  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  )
}

export default App
