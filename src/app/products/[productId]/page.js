export default async function productdetails({params}) {
    const {productId} = await params;
    return (
        <div>
            <h1>Product Details Page {productId}</h1>
        </div>
    );
}