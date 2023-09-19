export const sumPriceAllItems = (items, initialValue = 0) => {
  return items.reduce((acc, item) => acc + item.price, initialValue )
}