import React from 'react'
import { useShoppingCart } from '../../../contexts/useShoppingCatContext'
import StoreItemsJson from '../../../services/store.json'
import { Button, Stack } from 'react-bootstrap'
import formatCurrency from '../../../utilities/formatCurrency'

export const CarteItem = ({id , quantity}) => {
  const {removeFromCart} = useShoppingCart()
  const item = StoreItemsJson.find(i=>i.id===id)
  if(item == null )return null
  return (
    <Stack direction="horizontal" gap={2}>
      <img src={item.imgUrl} style={{width:"125px" , height:"75px",objectFit:"cover"}}/>
      <div className="me-auto">
        {item.name}{" "}
        {quantity >1 && (
          <span className='text-muted' style={{fontSize:".65"}}>{quantity} x</span>
        )}

      </div>
      <div className='text-muted' style ={{fontSize:".75rem"}}>
        {formatCurrency(item.price)}

      </div>
      <div>{formatCurrency(item.price*quantity)}</div>
      <Button variant='outline-danger' size='sm' onClick={()=> removeFromCart(item.id)}>&times;
      </Button>

    </Stack>
  )
}
