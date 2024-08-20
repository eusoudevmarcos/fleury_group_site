//import react rooks
import React, {useState, useEffect} from 'react'

//importe styled components
import './App.css'

//import components jsx
import Header from './components/Header/Header'
import About from './components/UI/About'
import Counter from './components/UI/Counter'
import Hero from './components/UI/Hero'
import Services from './components/UI/Services'
import Team from './components/UI/Team'
import Blog from './components/UI/Blog'
import Testmonial from './components/UI/Testmonial'
import Newsletter from './components/UI/Newsletter'
import Footer from './components/Footer/Footer'


function App() {  

  const [theme, setTheme] = useState('')

  const toggleTheme = () => {
    theme === '' ? setTheme('light-theme') : setTheme('')
  }

  useEffect(()=>{
    document.body.className = theme
  },[theme])

  return (    
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <Counter />
      <Services />
      <About />
      <Team />
      <Blog />
      <Testmonial />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
