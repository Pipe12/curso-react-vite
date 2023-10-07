import { useContext } from "react"
import Card from "../../Components/Card"
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from "../../Context"

const Home = () => {
  const { products, setSearchByTitle, searchByTitle, filteredProducts } = useContext(ShoppingCartContext)

  const renderView = () => { 
    if (searchByTitle) {
      if (filteredProducts?.length > 0) {
        return  (
          filteredProducts?.map((product) => <Card key={product.id} product={product}/>)
        )
      }
      else {
        return (<div className="border col-span-full h-56 text-center">Don&apos;t have any product with that title :(</div>)
      }
    } else {
      return  (
        products?.map((product) => <Card key={product.id} product={product}/>)
      )
    }
  }

  return (
    <>
      <h1 className='font-medium text-xl mb-4'>Exclusive Products</h1>
      <input 
        type="text" 
        placeholder="Find a product"
        className="rounded border border-black w-80 p-4 mb-4"
        onChange={(event) => { setSearchByTitle(event.target.value) }}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
        <ProductDetail />
      </div>
    </>
  )
}

export default Home
