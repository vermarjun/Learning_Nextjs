export default async function ({params}:any){
    const postId = (await params).subroutes;
    return (
        <div>
            hey
            {JSON.stringify(postId)}
            hello
        </div>
    )
}   