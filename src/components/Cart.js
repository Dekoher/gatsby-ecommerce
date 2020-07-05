import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'gatsby';
import { Button, StyledCart } from '../styles/components';
import priceFormat from '../utils/priceFormat';
import { CartContext } from '../context';

export default function Cart() {
  const {cart} = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [stripe, setStripe] = useState();
  const getTotal = () => {
    setTotal(
      cart.reduce((acc, current) => acc + (current.unit_amount * current.quantity), 0)
    )
  };
  useEffect(() => {
    setStripe(
      window.Stripe(process.env.STRIPE_PK)
    )
    getTotal()
  }, [])

  const handleSubmit = async event => {
    event.preventDefault();
    const {error} = await stripe.redirectToCheckout({
      lineItems: cart.map(({sku, quantity}) => ({price: sku, quantity})),
      mode: 'payment',
      successUrl: process.env.SUCCESS_REDIRECT,
      cancelUrl: process.env.CANCEL_REDIRECT,
    });
    if(error) {
      throw error
    }
  }

  return (
    <StyledCart>
      <h2>Carrito de compras</h2>
      <table>
        <tbody>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
          {cart.map((swag, index) => (
            <tr key={index}>
              <td>
                <img src={swag.metadata.img} alt={swag.name}/> {swag.name}
              </td>
              <td>{priceFormat(swag.unit_amount)} MXN</td>
              <td>{swag.quantity}</td>
              <td>{priceFormat(swag.unit_amount * swag.quantity)} MXN</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <div>
          <h3>Subtotal:</h3>
          <small>{priceFormat(total)} MXN</small>
        </div>
        <div>
          <Link to='/'>
            <Button type='outline'>Volver</Button>
          </Link>
          <Button onClick={handleSubmit} disabled={cart.length === 0}>Comprar</Button>
        </div>
      </nav>
    </StyledCart>
  )
}
