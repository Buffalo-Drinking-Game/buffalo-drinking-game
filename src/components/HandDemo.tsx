import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type HandSide = 'left' | 'right';

interface HandDemoProps {
  dominantHand?: HandSide;
}

export default function HandDemo({ dominantHand = 'right' }: HandDemoProps) {
  const [activeHand, setActiveHand] = useState<HandSide>('left');

  const isCorrect =
    (dominantHand === 'right' && activeHand === 'left') ||
    (dominantHand === 'left' && activeHand === 'right');

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 max-w-md mx-auto">
      <p className="text-sm text-buffalo-gray text-center mb-4">
        Your dominant hand:{' '}
        <strong className="text-buffalo-dark capitalize">{dominantHand}</strong>
      </p>

      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setActiveHand('left')}
          className={`relative rounded-xl p-4 border-2 transition-all ${
            activeHand === 'left'
              ? 'border-buffalo-primary bg-buffalo-primary/5 scale-105'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <img
            src="/images/buffalo-left-hand.png"
            alt="Left hand"
            className="w-24 h-24 object-contain"
          />
          <span className="block text-xs font-medium mt-2 text-buffalo-gray">
            Left Hand
          </span>
        </button>

        <button
          onClick={() => setActiveHand('right')}
          className={`relative rounded-xl p-4 border-2 transition-all ${
            activeHand === 'right'
              ? 'border-buffalo-primary bg-buffalo-primary/5 scale-105'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <img
            src="/images/buffalo-right-hand.png"
            alt="Right hand"
            className="w-24 h-24 object-contain"
          />
          <span className="block text-xs font-medium mt-2 text-buffalo-gray">
            Right Hand
          </span>
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeHand}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={`text-center rounded-lg p-3 ${
            isCorrect
              ? 'bg-buffalo-success/10 text-buffalo-success'
              : 'bg-buffalo-error/10 text-buffalo-error'
          }`}
        >
          <span className="text-2xl">{isCorrect ? '\u2713' : '\u2717'}</span>
          <p className="font-bold text-sm mt-1">
            {isCorrect ? 'Correct! Drink with this hand.' : 'BUFFALO! Wrong hand.'}
          </p>
        </motion.div>
      </AnimatePresence>

      <p className="text-xs text-gray-400 text-center mt-4">
        Tap each hand to see which one to drink with
      </p>
    </div>
  );
}
