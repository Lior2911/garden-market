const CURRENCY_FORMATER = new Intl.NumberFormat(undefined,{currency:"ILS",style:"currency"})
export default function formatCurrency(number){
  return CURRENCY_FORMATER.format(number)
}