import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-[var(--header-bg)] text-[var(--header-fg)] py-4 px-6 flex justify-between items-center shadow-md">
      <Link href="/" className="flex items-center gap-2">
        <img
          src="/favicon.ico"
          alt="Elite Entries Retail Logo"
          className="w-8 h-8"
        />
      </Link>
      <nav className="space-x-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/services" className="hover:underline">Services</Link>
        <Link href="#about" className="hover:underline">About</Link>
        <Link href="#contact" className="hover:underline">Contact</Link>
      </nav>
    </header>
  );
}