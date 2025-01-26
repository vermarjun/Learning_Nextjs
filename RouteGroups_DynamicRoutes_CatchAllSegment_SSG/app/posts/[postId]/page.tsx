import axios from "axios"

export default async function Posts({params}:any){
    const postId = (await params).postId 
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const data = response.data
    return (
        <div>
            <p>
                Post {postId}
            </p>
            <p>
                Title: {data.title}
            </p>
            <p>
                Body: {data.body}
            </p>
        </div>
    )
}