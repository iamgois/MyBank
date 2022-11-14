import React from 'react'

export default function CurrentValue() {
  const value = localStorage.getItem('value')

  return (
    <div>
        <p>Seu Saldo</p>
        <h1>{value}</h1>
    </div>
  )
}
