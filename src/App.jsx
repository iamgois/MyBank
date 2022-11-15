import React from 'react'
import CurrentValue from './components/CurrentValue'
import InsertValue from './components/InsertValue'

export default function App() {
  return (
    <div className='h-screen bg-violet-500 flex flex-col items-center justify-center'>
      <CurrentValue />
      <InsertValue />
    </div>
  )
}
