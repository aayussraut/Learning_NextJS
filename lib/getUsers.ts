export default async function getUsers(){
    const users = await fetch("https://jsonplaceholder.typicode.com/users")

    if( !users.ok ){
        throw new Error("Error fetching users")
    }

    return users.json();
}