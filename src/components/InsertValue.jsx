import React, { useState } from 'react'

export default function InsertValue() {
  
    const [value, setValue] = useState(0)

    function addValue(){

        let input = document.getElementById('input')
        let inputFormated = parseInt(input.value)

        let value = localStorage.getItem('value')
        let valueFormated = parseInt(value)

        let currentValue = valueFormated + inputFormated
        localStorage.setItem('value', `${currentValue}`)
        document.location.reload(true);
    }

    function removeValue(){

        let input = document.getElementById('input')
        let inputFormated = parseInt(input.value)

        let value = localStorage.getItem('value')
        let valueFormated = parseInt(value)

        let currentValue = valueFormated - inputFormated
        localStorage.setItem('value', `${currentValue}`)
        document.location.reload(true);
    }

    return (
        <div className='w-screen h-28 flex flex-col justify-center items-center bg-violet-500'>
            <input type='number' id='input' className='bg-violet-300 p-3 pl-12 pr-12'/>
            
            <div className='mt-4'>
                <button className='bg-violet-700 text-white rounded-lg p-2 mr-2 font-bold ease-in-out duration-200 hover:bg-violet-900' onClick={addValue}>Add Value +</button>
                <button  className='bg-violet-700 text-white rounded-lg p-2 ml-2 font-bold ease-in-out duration-200 hover:bg-violet-900'onClick={removeValue}>Remove Value -</button>
            </div>
        </div>
  )
}
