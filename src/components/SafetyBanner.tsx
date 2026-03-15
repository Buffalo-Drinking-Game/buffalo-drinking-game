export default function SafetyBanner() {
  return (
    <div className="bg-buffalo-warning/10 border border-buffalo-warning/30 rounded-lg px-4 py-3 text-sm text-buffalo-gray">
      <p>
        <strong className="text-buffalo-warning">Play hard. Play smart.</strong>{' '}
        Buffalo is always opt-in. Never pressure anyone. Non-alcoholic drinks
        always count — it's about the hand, not the drink.{' '}
        <a
          href="/safety"
          className="text-buffalo-primary hover:underline font-medium"
        >
          Read the safety rules
        </a>
      </p>
    </div>
  );
}
