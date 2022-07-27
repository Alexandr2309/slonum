import React from 'react'
import './styles/App.scss'
import Header from './components/Header/Header'
import About from './components/About/About'
import Advantages from './components/Advantages/Advantages'
import Diploma from './components/Diploma/Diploma'
import Application from './components/Application/Application'
import Questions from './components/Questions/Questions'
import SubscribeMailing from './components/SubscribeMailing/SubscribeMailing'
import Footer from './components/Footer/Footer'
import Plan from './components/Plan/Plan'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <About />
        <Advantages />
        <Plan />
        <Diploma />
        <Application />
        <Questions />
        <SubscribeMailing />
      </main>
      <Footer />
    </div>
  )
}

export default App
