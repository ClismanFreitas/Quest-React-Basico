import React from 'react'
import "./paragrf.css"

const MeuParagrafo = (props) => {
   return (
      <div className='paragrafo'>
         <p style = {{color: props.cor}}>{props.paragrafo.toLocaleUpperCase()}</p>
      </div>
   )
}
export default MeuParagrafo