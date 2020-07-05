import React, { useState, useContext } from 'react'
import priceFormat from '../utils/priceFormat';
import { Tag, SizeButton, SizeSelect, StyledProductDetail, QtySelect, Button } from '../styles/components';
import { SEO, Stars } from './';
import { CartContext } from '../context';

export default function ProductDetail({unit_amount, id, product: {images, name, metadata}}) {
  const formattedPrice = priceFormat(unit_amount);
  const [size, setSize] = useState(2);
  const [qty, setQty] = useState(1);
  const {addToCart} = useContext(CartContext);
  const handleSubmit = () => {
     addToCart({unit_amount, sku: id, name, metadata, quantity: qty})
  };
  return (
    <StyledProductDetail>
      <SEO title={name}/>
      <img src={images[0]} alt={name}></img>
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b>{formattedPrice}MXN</b>
        <Stars></Stars>
        {metadata.wear && <h3>Color: Azul</h3>}
        <small>{metadata.descripcion || metadata.description}</small>
        {metadata.wear && (
          <SizeSelect selected={size}>
            <SizeButton onClick={() => setSize(1)}>XS</SizeButton>
            <SizeButton onClick={() => setSize(2)}>S</SizeButton>
            <SizeButton onClick={() => setSize(3)}>M</SizeButton>
            <SizeButton onClick={() => setSize(4)}>L</SizeButton>
          </SizeSelect>
        )}
        <p>Cantidad:</p>
        <QtySelect>
          <button onClick={() => (qty > 1 ? setQty(qty-1) : null)}>-</button>
          <input type='text' disabled value={qty}></input>
          <button onClick={() => setQty(qty + 1)}>+</button>
        </QtySelect>
        <Button onClick={handleSubmit}>Agregar al carrito</Button>
      </div>
    </StyledProductDetail>
  )
}
