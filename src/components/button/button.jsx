import React from 'react'
import './button.css'
const Button = (props) => {
    return (
        <div className='container'>
        <button className='btn' onClick={() => alert(`A label desse botao é ${props.label} `)}>{props.label}</button>
        </div>
    )
}

export default Button