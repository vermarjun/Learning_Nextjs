export default async function ({params}:any){
    const postId = (await params).all;
    return (
        <div>
            all components {JSON.stringify(postId)}
        </div>
    )
}