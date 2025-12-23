export default async function DocsPage({params}) {
    const {slug} = await params;
    if(slug.length===1){
        return (
                <h1>Welcome to the documentation feature {slug[0]}.</h1>        
        );
    } 
    else if(slug.length===2){
        return (
            <h1>Welcome to the documentation feature {slug[0]} and subfeature {slug[1]}.</h1>
        );
    }
    return (
            <h1>Documentation Home Page</h1>
    );
}