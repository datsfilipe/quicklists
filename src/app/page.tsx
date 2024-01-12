import { UserButtons } from "@/components/userButtons";
import { currentUser } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();

  return (
    <main className="container py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">QuickLists</h1>
        <UserButtons />
      </div>

      <div className="flex flex-col h-[calc(100vh-5rem)] justify-center items-center">
        {user?.username ? (
          <p className="text-lg font-normal brightness-50 hover:brightness-100 hover:font-medium transition-all duration-300">Here&apos;s your lists, {user?.username}!</p>
        ) : (
          <>
            <p className="text-lg pb-4 font-normal brightness-50 hover:brightness-100 hover:font-medium transition-all duration-300">Manage your lists with QuickLists!</p>
            <p className="text-lg font-normal brightness-50 hover:brightness-100 hover:font-medium transition-all duration-300">Please sign in to see your lists!</p>
          </>
        )}
      </div>
    </main>
  )
}
