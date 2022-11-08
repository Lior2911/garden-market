import React from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../../../contexts/useShoppingCatContext';
import formatCurrency from '../../../utilities/formatCurrency';
import { CarteItem } from '../CartItem/CarteItem';
import storeItemJson from '../../../services/store.json'

export const ShoppingCart = ({isOpen}) => {
  const {closeCart,cartItem } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItem.map(item =>(
            <CarteItem key={item.id} {...item}/>
          ) )}
          <div className='ms-auto fw-bold fs-5'>Total {formatCurrency(cartItem.reduce((total , cartItem)=>{
            const item = storeItemJson.find(i => i.id=== cartItem.id)
            return total + (item.price || 0 ) * cartItem.quantity


          },0))}


          </div>

        </Stack>
      </Offcanvas.Body>

    </Offcanvas>
   
  )
}
