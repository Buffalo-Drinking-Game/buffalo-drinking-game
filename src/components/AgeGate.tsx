import { useState, useEffect, type ReactNode } from 'react';
import { getUser, setUser } from '../utils/localStorage';

interface AgeGateProps {
  children: ReactNode;
}

export default function AgeGate({ children }: AgeGateProps) {
  const [step, setStep] = useState<'loading' | 'age-verify' | 'name-entry' | 'complete'>('loading');
  const [userName, setUserName] = useState('');
  const [existingUser, setExistingUser] = useState<string | undefined>();

  useEffect(() => {
    const user = getUser();
    if (user?.ageVerified) {
      setExistingUser(user.name);
      setStep('complete');
    } else {
      setStep('age-verify');
    }
  }, []);

  function handleAgeConfirm() {
    setStep('name-entry');
  }

  function handleNameSubmit(e: React.FormEvent) {
    e.preventDefault();
    setUser({
      name: userName.trim() || undefined,
      ageVerified: true,
      joinedAt: new Date().toISOString(),
      returningVisit: false,
    });
    setStep('complete');
  }

  function handleSkipName() {
    setUser({
      ageVerified: true,
      joinedAt: new Date().toISOString(),
      returningVisit: false,
    });
    setStep('complete');
  }

  if (step === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-pulse text-buffalo-primary text-2xl font-bold">
          Buffalo
        </div>
      </div>
    );
  }

  if (step === 'complete') {
    return (
      <>
        {existingUser && (
          <div className="bg-buffalo-primary/10 text-buffalo-primary text-center py-2 text-sm font-medium animate-slide-down">
            Look who's back. Still Buffalo for life, {existingUser}.
          </div>
        )}
        {children}
      </>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-buffalo-dark px-4">
      <div className="max-w-md w-full text-center animate-fade-in">
        {step === 'age-verify' && (
          <>
            <img
              src="/images/logo-transparent-lg.png"
              alt="Buffalo Drinking Game"
              className="h-16 mx-auto mb-6"
            />
            <div className="animate-slide-up">
              <h1 className="text-3xl font-bold text-white mb-3">
                Hold Up.
              </h1>
              <p className="text-gray-400 mb-8">
                One rule. No mercy. No turning back.
              </p>

              <p className="text-white text-lg mb-6">
                You 21 or older?
              </p>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={handleAgeConfirm}
                  className="px-8 py-4 bg-buffalo-primary text-white font-bold text-lg rounded-xl hover:bg-buffalo-secondary transition-colors min-w-[120px]"
                >
                  Let Me In
                </button>
                <button
                  onClick={() => window.history.back()}
                  className="px-8 py-4 bg-gray-700 text-gray-300 font-bold text-lg rounded-xl hover:bg-gray-600 transition-colors min-w-[120px]"
                >
                  Nah
                </button>
              </div>

              <p className="text-gray-600 text-xs mt-6">
                Legal drinking age required. We don't make the laws.
              </p>
            </div>
          </>
        )}

        {step === 'name-entry' && (
          <div className="animate-slide-up">
            <img
              src="/images/buffalo-enlistment.png"
              alt="I Want You To Play Buffalo"
              className="w-full max-w-sm mx-auto mb-6"
            />
            <h2 className="text-2xl font-bold text-white mb-2">
              You're in. No going back.*
            </h2>
            <p className="text-gray-400 mb-6">
              Drop your name so we know who to blame.
            </p>

            <form onSubmit={handleNameSubmit} className="space-y-4">
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Your name (optional)"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-buffalo-primary text-center text-lg"
                autoFocus
                maxLength={30}
              />

              <button
                type="submit"
                className="w-full px-6 py-4 bg-buffalo-primary text-white font-bold text-lg rounded-xl hover:bg-buffalo-secondary transition-colors"
              >
                {userName.trim() ? `Lock it in, ${userName.trim()}` : "Lock it in"}
              </button>
            </form>

            <button
              onClick={handleSkipName}
              className="mt-3 text-gray-500 text-sm hover:text-gray-400 transition-colors"
            >
              Skip for now
            </button>

            <p className="text-gray-700 text-xs mt-6">
              *Technically not legally binding. Spiritually? You're locked in
              forever. Welcome to Buffalo.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
