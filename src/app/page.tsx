export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold text-blue-900 mb-6">
          BharatAssist AI
        </h1>

        <p className="text-xl text-slate-600 mb-8">
          India's Smart Government Scheme Guide
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSestNLySfi9uLQNQSJS11G8bHqyNUiNdZVQti6Rx_qRQA_t5w/viewform"
          target="_blank"
          className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Check Eligibility
        </a>
      </section>
    </main>
  );
}