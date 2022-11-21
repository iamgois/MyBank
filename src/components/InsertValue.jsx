import React, { useState } from 'react'

export default function InsertValue() {

    function addCash(){
        let input = parseInt(document.getElementById('input').value)
        let money = parseInt(localStorage.getItem('money')) + input
        document.location.reload(true);
        return localStorage.setItem('money', money)
    }

    function removeValue(){
        let input = parseInt(document.getElementById('input').value)
        let money = parseInt(localStorage.getItem('money')) - input
        document.location.reload(true);
        return localStorage.setItem('money', money)
    }

    let money = localStorage.getItem('money')

    if(money == "NaN" || null){
        localStorage.setItem('money', 0)
        document.localtion.reload(true);
    } else{
        console.log('continuando...')
    }

    return (
        <div className='w-screen h-28 flex flex-col justify-center items-center bg-violet-500'>
            <input type='number' id='input' className='bg-violet-300 p-3 w-64 rounded-xl'/>
            
            <div className='mt-4'>
                <button className='bg-violet-700 text-white rounded-lg p-2 mr-2 font-bold ease-in-out duration-200 hover:bg-violet-900' onClick={addCash}>Add Value +</button>
                <button  className='bg-violet-700 text-white rounded-lg p-2 ml-2 font-bold ease-in-out duration-200 hover:bg-violet-900' onClick={removeValue}>Remove Value -</button>
            </div>
        </div>
  )
}
