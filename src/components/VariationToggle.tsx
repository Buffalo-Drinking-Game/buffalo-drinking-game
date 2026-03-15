import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variation } from '../types';

interface VariationToggleProps {
  variation: Variation;
}

const popularityColors: Record<string, string> = {
  high: 'bg-buffalo-success/10 text-buffalo-success',
  medium: 'bg-buffalo-warning/10 text-buffalo-warning',
  low: 'bg-gray-100 text-buffalo-gray',
};

export default function VariationToggle({ variation }: VariationToggleProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <span className="font-semibold text-buffalo-dark truncate">
            {variation.title}
          </span>
          {variation.popularity && (
            <span
              className={`flex-shrink-0 text-xs font-medium px-2 py-0.5 rounded-full ${popularityColors[variation.popularity]}`}
            >
              {variation.popularity}
            </span>
          )}
        </div>
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
                {variation.description}
              </p>
              {variation.mustAgreeBeforehand && (
                <p className="mt-3 text-xs font-medium text-buffalo-warning bg-buffalo-warning/10 px-3 py-1.5 rounded-lg inline-block">
                  Must be agreed upon before the game starts
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
