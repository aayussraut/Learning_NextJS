export default async function getUserPost(id: string){
    const posts=await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)

    if(!posts.ok){
        throw new Error("Error fetching user posts")
    }

    return posts.json();
}