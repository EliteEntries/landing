import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full bg-[var(--accent)]">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center py-16 px-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-[var(--primary)]">
                Turnkey Retail for Fitness & Wellness Spaces
            </h1>
            <p className="max-w-xl text-lg sm:text-xl mb-6">
                Elite Entries Retail connects high-demand consumer products with gyms and wellness environments—delivering curated merchandise, passive revenue, and zero operational lift for your team.
            </p>
            <Link
                href="#contact"
                className="inline-block bg-[var(--primary)] text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-[var(--primary-dark)] transition"
            >
                Get in Touch
            </Link>

        </div>
    </section>
  );
}