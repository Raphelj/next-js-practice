import Link from 'next/link';
export default function Products() {
    return (
        <>
            <h1>Products Page</h1>
            <Link href="/">Go to Home</Link>
            <Link href={"/products/1"}>Go to Product 1</Link>
            <Link href={"/products/2"}>Go to Product 2</Link>
        </>       
    );
}