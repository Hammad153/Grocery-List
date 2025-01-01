import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
        <li className='item'>
            <input
             type="checkbox" 
             onChange={() => handleCheck(item.id)}
             checked={item.checked}
             />
             <label
                 style={(item.checked) ? { textDecoration: "line-through" } : null}
                 onDoubleClick={() => handleCheck(item.id)}
             >{item.item}</label>
             <FaTrashAlt
                role='button'
                aria-label='Delete Item'
                onClick={() => handleDelete(item.id)} 
             ></FaTrashAlt>
          </li>
  )
}

export default LineItem