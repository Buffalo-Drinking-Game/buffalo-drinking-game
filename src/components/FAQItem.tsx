import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { incrementFAQView } from '../utils/localStorage';
import type { FAQItem as FAQItemType } from '../types';

interface FAQItemProps {
  item: FAQItemType;
}

export default function FAQItem({ item }: FAQItemProps) {
  const [open, setOpen] = useState(false);
  const [viewCount, setViewCount] = useState(0);

  function handleToggle() {
    if (!open) {
      const count = incrementFAQView(item.id);
      setViewCount(count);
    }
    setOpen(!open);
  }

  const showEasterEgg = item.id === 'two-hands' && viewCount >= 100;

  return (
    <div id={item.id} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      <button
        onClick={handleToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-buffalo-dark pr-4">
          {item.question}
        </span>
        <svg
          className={`w-5 h-5 text-buffalo-gray flex-shrink-0 transition-transform ${
            open ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-4 pt-0">
              <p className="text-buffalo-gray text-sm leading-relaxed">
                {item.answer}
              </p>
              {showEasterEgg && (
                <p className="mt-3 text-xs text-buffalo-primary bg-buffalo-primary/10 px-3 py-1.5 rounded-lg inline-block">
                  You've checked this {viewCount} times. We get it — two hands is confusing.
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
