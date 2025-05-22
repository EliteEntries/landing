export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-[var(--accent)]">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">Contact Us</h2>
            <form className="max-w-lg mx-auto bg-white dark:bg-[var(--accent)] rounded-lg shadow p-6 flex flex-col gap-4" autoComplete="off">
                <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="border rounded px-3 py-2"
                required
                />
                <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="border rounded px-3 py-2"
                required
                />
                <textarea
                name="message"
                placeholder="How can we help you?"
                className="border rounded px-3 py-2 min-h-[100px]"
                required
                />
                <button
                type="submit"
                className="bg-[var(--primary)] text-white px-6 py-2 rounded font-semibold hover:bg-[var(--primary-dark)] transition"
                >
                Send Message
                </button>
            </form>
        </div>
    </section>
  );
}