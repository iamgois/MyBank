import React, { useState } from 'react'

export default function InsertValue() {
  
    const [value, setValue] = useState(0)

    function addValue(){
        let input = document.getElementById('input')
        let inputFormated = input.value

        let value = localStorage.getItem('value')

        let previousValue = parseInt(value)

        console.log(previousValue)
        let currentValue = previousValue += inputFormated

        localStorage.setItem('value', `${currentValue}`)
    }

    return (
        <>
            <input type='number' id='input' className='border-solid border-black'/>
            <button onClick={addValue}>Add Value +</button>
            <button onClick={addValue}>Remove Value -</button>
        </>
  )
}
