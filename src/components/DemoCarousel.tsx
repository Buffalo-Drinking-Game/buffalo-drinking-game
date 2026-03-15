import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HandDemo from './HandDemo';

const AUTOPLAY_INTERVAL = 2500;

interface Slide {
  id: string;
  content: React.ReactNode;
}

export default function DemoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides: Slide[] = [
    {
      id: 'watch-out',
      content: (
        <div className="bg-white rounded-2xl border border-gray-200 p-6 max-w-md mx-auto text-center">
          <h3 className="font-bold text-lg text-buffalo-dark mb-3">
            One wrong sip. That's all it takes.
          </h3>
          <img
            src="/images/buffalo-watch-out.png"
            alt="Friends calling Buffalo on someone drinking with the wrong hand"
            className="rounded-xl w-full object-cover mb-4"
          />
          <div className="bg-buffalo-error/10 text-buffalo-error rounded-lg p-3">
            <span className="text-2xl">&#x2717;</span>
            <p className="font-bold text-sm mt-1">
              BUFFALO! Wrong hand. Game over. Chug.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'hand-demo',
      content: <HandDemo dominantHand="right" />,
    },
  ];

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
  };

  // Auto-advance timer
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(goToNext, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, goToNext]);

  // Resume autoplay after 8s of inactivity
  useEffect(() => {
    if (!isPaused) return;

    const resume = setTimeout(() => setIsPaused(false), 8000);
    return () => clearTimeout(resume);
  }, [isPaused, activeIndex]);

  return (
    <div>
      {/* Carousel area */}
      <div
        className="relative cursor-pointer"
        onClick={goToNext}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            goToNext();
            setIsPaused(true);
          }
        }}
        aria-label="Click to see next slide"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[activeIndex].id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {slides[activeIndex].content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots + hint */}
      <div className="flex items-center justify-center gap-2 mt-5">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={(e) => {
              e.stopPropagation();
              goToSlide(i);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === activeIndex
                ? 'bg-buffalo-primary scale-110'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
      <p className="text-xs text-gray-400 text-center mt-2">
        Tap to see more
      </p>
    </div>
  );
}
