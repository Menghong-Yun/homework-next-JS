import ProductsDetailCardComponent from "@/components/products/ProductsDetailCardComponent";



export default async function page({
  params
}: {
  params: Promise<{id: string | number}>
}) {

  const {id} = await params;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`).then(product => product.json())

  return (
    <div>
    <ProductsDetailCardComponent product={response}/>
    </div>
  )
}