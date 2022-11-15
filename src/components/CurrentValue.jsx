import React from 'react'

export default function CurrentValue() {
  const value = localStorage.getItem('value')

  return (
    <div className='w-screen bg-violet-500 flex justify-center items-center flex-col p-4'>
        <p className='text-white'>Seu saldo</p>
        <h1 className='text-5xl text-white font-extrabold'>${value}</h1>
    </div>
  )
}
