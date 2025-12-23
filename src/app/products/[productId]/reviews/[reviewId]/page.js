import {notFound} from "next/navigation";

export default async function ReviewPage({params}) {
    const {productId, reviewId} = await params;
    if(parseInt(reviewId)>100){
            notFound();
        
    }
    return (
        <div>
            <p>This is the review {reviewId} for the product {productId}.</p>
        </div>
    );
}