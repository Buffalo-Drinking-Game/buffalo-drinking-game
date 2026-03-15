export default function Footer() {
  return (
    <footer className="bg-buffalo-dark text-white mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-bold text-lg">Buffalo Drinking Game</p>
            <p className="text-sm text-gray-400 mt-1">
              One rule. No mercy. You're in this for life.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <a href="/rules" className="hover:text-white transition-colors">
              Rules
            </a>
            <a
              href="/variations"
              className="hover:text-white transition-colors"
            >
              Variations
            </a>
            <a href="/faq" className="hover:text-white transition-colors">
              FAQ
            </a>
            <a href="/social" className="hover:text-white transition-colors">
              Social
            </a>
            <a href="/safety" className="hover:text-white transition-colors">
              Safety
            </a>
          </nav>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-700 text-center text-xs text-gray-500 space-y-1">
          <p>Drink responsibly. 21+ only. No exceptions.</p>
          <p>
            Buffalo is a social game. Respect limits. Look out for your people.
          </p>
          <p>Not affiliated with any alcohol brands. Just pure chaos.</p>
        </div>
      </div>
    </footer>
  );
}
