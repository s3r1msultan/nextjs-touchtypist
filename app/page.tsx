// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-background text-dark min-h-screen flex items-center">
      <div className="container">
        <h1 className="text-4xl font-bold text-secondary">
          Touch Typing Trainer
        </h1>
        <p className="mt-4 text-lg">Boost your typing speed and accuracy.</p>
        <Link href="/typing">
          <button className="mt-6 px-6 py-3 bg-primary text-white rounded hover:bg-secondary">
            Start Typing
          </button>
        </Link>
      </div>
    </main>
  );
}
