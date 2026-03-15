import type { Rule } from '../types';

interface RuleCardProps {
  rule: Rule;
  index: number;
}

function highlightText(text: string, emphasis?: string[]): (string | JSX.Element)[] {
  if (!emphasis || emphasis.length === 0) return [text];

  const parts: (string | JSX.Element)[] = [];
  let remaining = text;

  for (const phrase of emphasis) {
    const idx = remaining.toLowerCase().indexOf(phrase.toLowerCase());
    if (idx === -1) continue;

    if (idx > 0) {
      parts.push(remaining.slice(0, idx));
    }
    parts.push(
      <strong key={phrase} className="text-buffalo-primary font-semibold">
        {remaining.slice(idx, idx + phrase.length)}
      </strong>
    );
    remaining = remaining.slice(idx + phrase.length);
  }

  if (remaining) parts.push(remaining);
  return parts;
}

export default function RuleCard({ rule, index }: RuleCardProps) {
  return (
    <div className={`bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow animate-slide-up stagger-${index + 1}`}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 bg-buffalo-primary/10 text-buffalo-primary rounded-full flex items-center justify-center font-bold text-lg">
          {rule.order}
        </div>
        <div>
          <h3 className="font-bold text-lg text-buffalo-dark mb-1">
            {rule.title}
          </h3>
          <p className="text-buffalo-gray leading-relaxed">
            {highlightText(rule.description, rule.emphasis)}
          </p>
        </div>
      </div>
    </div>
  );
}
