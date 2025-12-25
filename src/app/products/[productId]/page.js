import Link from "next/link";
export default async function productdetails({params}) {
    const {productId} = await params;
    return (
        <>
            <h1>Product Details Page</h1>
            <p>Product ID: <Link href={`/products/${productId}`}>{productId}</Link></p>
        </>
        
    );
}