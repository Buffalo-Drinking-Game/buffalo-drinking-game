import type { Variation } from '../types';

export const commonVariations: Variation[] = [
  {
    id: 'finish-vs-sips',
    title: 'Full send vs. mercy sips',
    description:
      'Hardcore groups make you finish the whole drink. Softer groups let you off with 3-5 sips. Know your crowd. Agree before someone\'s holding a full pint.',
    popularity: 'high',
    mustAgreeBeforehand: true,
  },
  {
    id: 'alcoholic-only',
    title: 'Booze only? Or everything?',
    description:
      'Some groups only enforce Buffalo on alcoholic drinks. Others say all beverages count — water, coffee, smoothies, you name it. The purists don\'t discriminate.',
    popularity: 'medium',
    mustAgreeBeforehand: true,
  },
  {
    id: 'immediate-call',
    title: 'Speed-call rule',
    description:
      'You snooze, you lose. Some groups say you have to call Buffalo while they\'re mid-sip or within 5 seconds. Blink and you miss your chance to ruin someone\'s day.',
    popularity: 'medium',
    mustAgreeBeforehand: true,
  },
  {
    id: 'no-switching',
    title: 'No hand-switching. Ever.',
    description:
      'You declared right-handed? That\'s your identity now. No switching mid-game, mid-night, or mid-life crisis. Your dominant hand is permanent.',
    popularity: 'high',
    mustAgreeBeforehand: false,
  },
  {
    id: 'holding-counts',
    title: 'Even holding counts',
    description:
      'The strictest groups don\'t even let you hold your drink in the wrong hand. Not sipping — just holding. Maximum paranoia. Maximum chaos.',
    popularity: 'low',
    mustAgreeBeforehand: true,
  },
  {
    id: 'false-call-penalty',
    title: 'False call? You drink.',
    description:
      'Call Buffalo on someone who\'s using the right hand? Congrats, you just played yourself. False callers chug their own drink. Think before you yell.',
    popularity: 'high',
    mustAgreeBeforehand: true,
  },
];
