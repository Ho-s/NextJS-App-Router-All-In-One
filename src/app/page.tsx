import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Link href={'/cars'}>Go to cars page</Link>
    </main>
  );
}
