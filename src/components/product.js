import React from 'react'
import {Link} from 'gatsby';
import priceFormat from '../utils/priceFormat';
import { StyledProducts } from '../styles/components';

export default function products({products}) {
  console.log('products=>', products);
  
  return (
    <StyledProducts>
      <h2>Productos</h2>
      <section>
        {products.map(({node}) => {
          const price = priceFormat(node.unit_amount);
          return (
            <article key={node.id}>
              <img src={node.product.metadata.img} alt={node.product.name}></img>
              <p>{node.product.name}</p>
              <small>USD {price}</small>
              <Link to={`/${node.id}`}>Buy now <span>-></span></Link>
            </article>
          )
        }
        )}
      </section>
    </StyledProducts>
  )
}
  