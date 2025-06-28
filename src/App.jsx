import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { useAuth } from './context/AuthProvider'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Search from './components/Search'
import PlayingVideo from './components/PlayingVideo'
import Loading from './loader/Loading'

const App = () => {
  const {loading} = useAuth()


    // start git upload from git remote add origin
  return (
    <div>
      {loading && <Loading/>}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/search/:searchQuery' element={<Search />}></Route>
        <Route path='/video/:id' element={<PlayingVideo />}></Route>



      </Routes>
    </div>
  )
}

export default App
