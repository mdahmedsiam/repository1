import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Card from './component/Card'
import Footer from './component/Footer'
import Carosual from './component/Carosual'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Carosual></Carosual>
      <Card></Card>
      <Footer></Footer>
    </>
  )
}

export default App

