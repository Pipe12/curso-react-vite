import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import ProductDetail from '../../Components/ProductDetail'
import Card from "../../Components/Card"

const Category = () => {
  const { setSearchByCategory, filteredProducts } = useContext(ShoppingCartContext)

  const path = window.location.pathname
  const queryPath = path.slice(path.lastIndexOf('/') + 1)

  setSearchByCategory(queryPath)
  
  const renderView = () => { 
    console.log(filteredProducts)

    if (filteredProducts?.length) {
      return  (
        filteredProducts?.map((product) => <Card key={product.id} product={product}/>)
      )
    } else {
      return (<div className="col-span-full h-56 text-center">Don&apos;t have any product with that title :(</div>)
    }
  }

  return (
    <>
    <h1>{queryPath.charAt(0).toUpperCase() + queryPath.slice(1)}</h1>
    <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
      {renderView()}
      <ProductDetail />
    </div>
    </>
  )
}

export default Category
