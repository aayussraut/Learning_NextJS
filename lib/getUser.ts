export default async function getUser(id: string){
    const user=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

    if(!user.ok){
        throw new Error("Error fetching user")
    }

    return user.json();
}