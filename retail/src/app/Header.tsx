import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-[var(--header-bg)] text-[var(--header-fg)] shadow-md">
        <div className="max-w-7xl mx-auto py-2 px-6 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
                <Image
                src="/favicon.ico"
                alt="Elite Entries Retail Logo"
                width={32}
                height={32}
                className="w-8 h-8"
                />
            </Link>
            <nav className="space-x-4">
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/services" className="hover:underline">Services</Link>
                <Link href="#about" className="hover:underline">About</Link>
                <Link href="#contact" className="hover:underline">Contact</Link>
            </nav>

        </div>
    </header>
  );
}