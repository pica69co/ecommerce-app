import Link from "next/link"


const NotFound = () => {
  return (
    <div className="mt-24">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <p>View <Link href="/">All Products</Link></p>
    </div>
  )
}

export default NotFound