import React from 'react'
import {Link} from 'gatsby';
import priceFormat from '../utils/priceFormat';
import { StyledProducts } from '../styles/components';

export default function products({products}) {
  return (
    <StyledProducts>
      <h2>Productos</h2>
      <section>
        {products.map(({node}) => {
          const price = priceFormat(node.price);
          return (
            <article key={node.id}>
              <img src={node.product.images[0]} alt={node.product.name} style={{width: "315px", height: "290px"}}/>
              <p>{node.product.name}</p>
              <small>{price} MXN</small>
              <Link to={`/${node.id}`}>Buy now <span></span></Link>
            </article>
          )
        }
        )}
      </section>
    </StyledProducts>
  )
}
  