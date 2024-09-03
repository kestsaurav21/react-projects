import React, { useState } from 'react'
import data from '../utils/mockData'

const Accordion = () => {

    const [select, setSelect] = useState(null);

    const handleSingle = (id) => {
        setSelect(id);
        
    }
  return (
    <div className='w-[80%] min-h-[900px] bg-gray-400 m-20 p-2 rounded-xl'>
        
            <h3 className='text-black font-extrabold text-4xl text-center p-4'>Accordion</h3>
            {
                data && data.length > 0 
                ? (data.map((item) => 
                <div onClick={()=>handleSingle(item.id)}
                className='flex justify-between p-4'>
                    <h3>{item.question}</h3>
                    <span className='cursor-pointer'>+</span>
                </div>
                ) )
                : <div>No Data Found</div>
            }
        
    </div>
  )
}

export default Accordion