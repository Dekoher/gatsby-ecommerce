import React from 'react'
import { SEO } from '../components';
import { Button, Purchase } from '../styles/components';
import { Link } from 'gatsby';

export default function thanks() {
  return (
    <>
      <SEO title='Successful buy'/>
      <Purchase>
        <h2>Compra exitosa!!</h2>
        <p>Disfruta y cuida mucho a tu gecko</p>
        <p>¡Te esperamos de vuelta muy pronto!</p>
        <span role='img' aria-describedby='emoji'></span>
        <Link to='/'>
          <Button>Volver al catálogo</Button>
        </Link>
      </Purchase>
    </>
  )
}
