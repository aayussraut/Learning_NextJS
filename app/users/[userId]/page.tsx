type UserPageProps = {
  params: {
    userId: string;
  };
};
export default function UserPage({ params: { userId } }: UserPageProps) {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1>User Page</h1>
      <p>User ID: {userId}</p>
    </div>
  );
}
