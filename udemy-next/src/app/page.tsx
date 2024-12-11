import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <p>
          <Link href="/about">About</Link>
        </p>
      </main>
    </div>
  );
}
