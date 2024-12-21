import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <p>
          <Link href="/about">About</Link>
        </p>
        <p>
          <Link href="/meals">Meals</Link>
        </p>
        <p>
          <Link href="/meals/share">Share Meals</Link>
        </p>
        <p>
          <Link href="/community">Community</Link>
        </p>
      </main>
    </div>
  );
}
