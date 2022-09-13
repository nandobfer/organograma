import { useState } from 'react'
import './InputContainer.css'

export const InputContainer = ({label, required, value, changeValue}) => {

    let placeholder_text = `Digite seu ${label.toLowerCase()}`
    

    const onDigit = (event) => {
        changeValue(event.target.value)
    }

    return ( 
        <div className="text-field">
            <label htmlFor="">{label}</label>
            <input value={value} onChange={onDigit} type="text" placeholder={placeholder_text} required={required}/>
        </div>
    );
}
