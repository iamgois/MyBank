import React from 'react'

export default function CurrentValue() {
  const money = localStorage.getItem('money')

  return (
    <div className='w-screen bg-violet-500 flex justify-center items-center flex-col p-4 mt-64'>
        <p className='text-white'>Seu saldo</p>
        <h1 className='text-5xl text-white font-extrabold'>${money}</h1>
    </div>
  )
}
