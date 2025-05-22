import Link from "next/link";

export default function Services() {
  return (
    <div>
      <header className="w-full bg-[var(--header-bg)] text-[var(--header-fg)] py-4 px-6 flex justify-between items-center shadow-md">
        <span className="text-xl font-bold tracking-tight">Elite Entries Retail</span>
        <nav className="space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/services" className="hover:underline">Services</Link>
          <a href="/#about" className="hover:underline">About</a>
          <a href="/#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-[var(--primary)]">Our Services</h1>
        <ul className="space-y-6 text-lg">
          <li>
            <span className="font-semibold text-[var(--primary)]">Curated Product Sourcing:</span>
            <br />
            We handpick premium, high-demand merchandise tailored to your gym’s brand and member preferences.
          </li>
          <li>
            <span className="font-semibold text-[var(--primary)]">Turnkey Retail Management:</span>
            <br />
            From inventory to display, we handle every aspect of your retail footprint—no staff training or oversight required.
          </li>
          <li>
            <span className="font-semibold text-[var(--primary)]">Revenue Optimization:</span>
            <br />
            Generate passive ancillary income with zero operational risk or workload for your internal team.
          </li>
          <li>
            <span className="font-semibold text-[var(--primary)]">Flexible Partnership Models:</span>
            <br />
            Rent retail space to us or let us fully manage your in-gym retail as a third-party provider.
          </li>
          <li>
            <span className="font-semibold text-[var(--primary)]">End-to-End Logistics:</span>
            <br />
            We manage procurement, restocking, and quality control—ensuring consistency and reliability.
          </li>
        </ul>
      </section>
    </div>
  );
}