import React, { useState } from 'react'
import data from '../utils/mockData'




const Accordion = () => {

    const [select, setSelect] = useState(null);

    const handleSingle = (id) => {
        setSelect(id === select ? null : id)
        
    }

  return (
    <div className='bg-gray-400 w-[80%] h-[900px] m-20 rounded-xl p-4 flex-col '>
        <h2 className='text-black font-extrabold text-4xl text-center m-4'>Accordion</h2>
        <div className='flex justify-center'>
            <button className='bg-black text-white p-4 rounded-2xl cursor-pointer'>
                Enable Multi Selection
            </button>
        </div>

        <div className='accordion'>

            {
                data && data.length > 0 ?  
                    data.map((item) => 
                        <div className=''>
                            <div onClick={() => handleSingle(item.id)}
                            className='m-10 flex justify-between cursor-pointer text-xl font-bold '>
                            <h3>{item.question}</h3>
                            <span>+</span>
                            </div>
                            {
                                select === item.id  ?
                                <h3 className='m-10 text-center'>{item.answer}</h3>
                                : null
                            }
                        </div>
                    )
                
                : <div>No data found</div>
            }

        </div>

    </div>
  )
}

export default Accordion