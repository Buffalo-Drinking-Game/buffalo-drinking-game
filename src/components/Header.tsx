import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/rules', label: 'Rules' },
  { href: '/variations', label: 'Variations' },
  { href: '/faq', label: 'FAQ' },
  { href: '/social', label: 'Social' },
  { href: '/safety', label: 'Safety' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <img
            src="/images/logo-transparent-small.png"
            alt="Buffalo Drinking Game"
            className="h-8 w-auto"
          />
          <span className="font-bold text-lg text-buffalo-dark hidden sm:inline group-hover:text-buffalo-primary transition-colors">
            Buffalo
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-buffalo-gray hover:text-buffalo-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 -mr-2 text-buffalo-dark"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-gray-100 bg-white animate-slide-down">
          <div className="max-w-5xl mx-auto px-4 py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 text-base font-medium text-buffalo-gray hover:text-buffalo-primary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
