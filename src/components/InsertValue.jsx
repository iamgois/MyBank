import React, { useState } from 'react'

export default function InsertValue(props) {
  
    const [value, setValue] = useState(0)
    const [number, setNumber] = useState(0)

    function addCash(){
        let input = parseInt(document.getElementById('input').value)
        return setNumber(number + input)
    }

    /* function removeValue(){

        let inputFormated = parseInt(document.getElementById('input').value)
        let valueFormated = parseInt(localStorage.getItem('value'))

        if(valueFormated = NaN || valueFormated == null){
            valueFormated = 0
        }else{
            let currentValue = valueFormated - inputFormated
            localStorage.setItem('value', `${currentValue}`)
            document.location.reload(true);
        }        
    } */

    return (
        <div className='w-screen h-28 flex flex-col justify-center items-center bg-violet-500'>
            <input type='number' id='input' className='bg-violet-300 p-3 w-64 rounded-xl'/>
            
            <div className='mt-4'>
                <button className='bg-violet-700 text-white rounded-lg p-2 mr-2 font-bold ease-in-out duration-200 hover:bg-violet-900' onClick={addCash}>Add Value +</button>
                <button  className='bg-violet-700 text-white rounded-lg p-2 ml-2 font-bold ease-in-out duration-200 hover:bg-violet-900'>Remove Value -</button>
            </div>
        </div>
  )
}
