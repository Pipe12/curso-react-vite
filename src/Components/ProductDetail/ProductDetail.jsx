import { XMarkIcon } from "@heroicons/react/24/outline"

const ProductDetail = () => {
  return (
    <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white top-[68px] w-[360px] h-[calc(100vh-68px)]">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div><XMarkIcon className="w-6 h-6"/></div>
      </div>
    </aside>
  )
}

export default ProductDetail
