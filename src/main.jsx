import React from 'react'
import  {createRoot}  from 'react-dom/client'
import MeuParagrafo from './components/paragrafo/paragrf'
import Button from './components/button/button'


createRoot(document.getElementById('root')).render(
  <>
    <MeuParagrafo paragrafo="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis aut voluptatibus consequatur aspernatur at, iure alias maxime iste odio." cor="purple"/>
    <Button label= "Baixar CV"/>
  </>,
)
