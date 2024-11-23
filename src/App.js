import React from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Swatch from './Swatch/Swatch.jsx'
import Home from './Home/Home.jsx'
import Calculator from './Calculator/Calculator.jsx'
import Converter from './Converter/Converter.jsx'

const App = () => {
  return (
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/stopwatch' element={<Swatch/>}/>
  <Route path='/calculator' element={<Calculator/>}/>
  <Route path='/converter' element={<Converter/>}/>
 </Routes>
 </BrowserRouter>
  )
}
export default App


