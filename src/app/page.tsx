import { Button } from "@/components/ui/button"

export default function Home() {
  const username = null // "dtsf"

  return (
    <main className="container py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">QuickLists</h1>
        <div className="flex items-center space-x-2">
          {username ? (
            <Button>
              Sign out
            </Button>
          ) : (
            <Button>Sign in</Button>
          )}
        </div>
      </div>

      <div className="flex flex-col h-[calc(100vh-5rem)] justify-center items-center">
        {username ? (
          <p className="text-lg font-normal brightness-50 hover:brightness-100 hover:font-medium transition-all duration-300">Here&apos;s your lists, {username}!</p>
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
