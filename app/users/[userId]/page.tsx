import getUser from "@/lib/getUser";
import getUserPost from "@/lib/getUserPosts";
import Link from "next/link";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import { Metadata } from "next";
type UserPageProps = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({
  params: { userId },
}: UserPageProps): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;

  return {
    title: user.name,
    description: `this is the user page for ${user.name}`,
  };
}

export default async function UserPage({ params: { userId } }: UserPageProps) {
  const userData: Promise<User> = getUser(userId);
  const userPostData: Promise<Post[]> = getUserPost(userId);

  // const [user, userPost] = await Promise.all([userData, userPostData]);
  const user = await userData;

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Link className="bg-blue-500 p-2 m-2" href="/users">
        Go to Users Page
      </Link>
      <br />
      <h2>{user.name}</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <UserPosts userPost={userPostData} />
      </Suspense>
    </div>
  );
}
