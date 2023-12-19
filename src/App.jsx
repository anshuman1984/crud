import { useState } from 'react'
import './App.css'
import Company from './CRUDcomponent/Company'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import comstore from './Redux/Store'
import { ToastContainer } from 'react-toastify'


function App() {


  return (
    <>
      <Provider store={comstore}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Company />}></Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer position='top-right'></ToastContainer>
      </Provider>
    </>
  )
}

export default App
