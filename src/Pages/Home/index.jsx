import { useState, useEffect } from "react"
import Card from "../../Components/Card"

const Home = () => {

  const [products, setProducts] = useState(null)

  useEffect(() => {
    fetch( 'https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <>
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          products?.map((product) => <Card key={product.id} { ...product }/>)
        }
      </div>
    </>
  )
}

export default Home