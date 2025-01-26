export default async function User (){
    await new Promise(r=> setTimeout(r, 5000));
    return (
        <div>
            user page
        </div>
    )
}