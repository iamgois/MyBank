import React from 'react'
import CurrentValue from './components/CurrentValue'
import InsertValue from './components/InsertValue'
import { Navbar } from './components/Navbar'

export default function App() {
  return (
    <div className='h-screen bg-violet-500 flex flex-col items-center'>
      <Navbar className='top-0' />
      <CurrentValue/>
      <InsertValue />
    </div>
  )
}
