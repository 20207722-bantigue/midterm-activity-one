import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router';
import Home from './pages/Home';
import Navigation from './components/Navigation';

function App() {

  return (
    <>
   {/*temporary*/}
     <Navigation />
      <div>
        <div>
          <Routes>
            <Route path='/' element={<Home />}>Home</Route>
          </Routes>
        </div>
        <Home />
      </div>
    </>
  )
}

export default App
