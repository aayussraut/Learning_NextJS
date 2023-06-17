type UserPageProps = {
  params: {
    userId: string;
  };
};
export default function UserPage({ params: { userId } }: UserPageProps) {
  return (
    <>
      <h1>User Page</h1>
      <p>User ID: {userId}</p>
    </>
  );
}
