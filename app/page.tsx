import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link className="bg-blue-500 p-2 m-2" href="/users">
        Go to users Page
      </Link>
    </>
  );
}
