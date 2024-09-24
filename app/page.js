import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const linkStyle="underline bg-sky-500 hover:bg-sky-700"

  return (
    <main className="h-screen">
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li><Link href="./week-2" className={linkStyle}>week 2 assignment</Link></li>
      </ul>
    </main>
  );
}
