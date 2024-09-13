import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p className="text-3xl">Chat bot integration</p>
      <Link href="/chating" className="bg-gray-800 p-3 rounded-md">Chat bot</Link>
    </div>
  );
}
