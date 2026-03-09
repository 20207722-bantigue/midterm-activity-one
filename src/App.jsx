import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router';
import Home from './pages/Home';
import Students from './pages/Students';
import Navigation from './components/Navigation';

function App() {

  return (
    <>
   {/*temporary*/}
     <Navigation />
      <div>
        <div>
          <Routes>
            <Route path='/Home' element={<Home />}>Home</Route>
            <Route path='/Students' element={<Students />}>Students</Route>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
