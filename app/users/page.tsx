import Link from "next/link";
import getUsers from "@/lib/getUsers";

export default async function UsersPage() {
  const userData: Promise<User[]> = getUsers();
  const user = await userData;
  return (
    <div className="h-screen flex flex-col items-center justify-center ">
      <h1>Users Page</h1>
      <Link className="bg-blue-500 p-2 m-2" href="/">
        Go to Home Page
      </Link>
      {user.map((user) => (
        <Link
          className="underline text-blue-400"
          href={`/users/${user.id}`}
          key={user.id}
        >
          <div key={user.id}>
            <h2>{user.name}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
