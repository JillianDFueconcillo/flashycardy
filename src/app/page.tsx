export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex flex-1 w-full max-w-7xl flex-col items-center justify-center gap-8 py-12 px-16 text-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Welcome to FlashyCardy Course
          </h1>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Master any subject with our interactive flashcard learning system.
            <br />
            Create, study, and track your progress all in one place.
          </p>
        </div>

        <div className="rounded-xl bg-zinc-100 dark:bg-zinc-900 p-8 flex flex-col gap-4 max-w-lg mx-auto w-full">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Get Started Today
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            Sign up or sign in to start creating your personalized flashcard decks.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
            Click the button in the header above to get started ☝️
          </p>
        </div>
      </main>
    </div>
  );
}
