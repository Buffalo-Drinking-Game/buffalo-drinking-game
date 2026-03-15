import type { Rule } from '../types';

export const officialRules: Rule[] = [
  {
    id: 'setup',
    title: 'Declare Yourself',
    description:
      'Pick your dominant hand. Say it out loud. Make sure everyone hears you. No mumbling, no take-backs, no "I didn\'t say it clearly." You\'re locked in.',
    order: 1,
  },
  {
    id: 'the-rule',
    title: 'The One Rule',
    description: 'Every drink. Every sip. Every time. You use your non-dominant hand. That\'s it. That\'s the whole game. Sounds easy until it isn\'t.',
    emphasis: ['non-dominant hand'],
    order: 2,
  },
  {
    id: 'getting-buffalod',
    title: "Getting Buffalo'd",
    description:
      'Someone spots you drinking with the wrong hand? They yell "Buffalo!" and you chug whatever\'s in your glass. Two hands on the drink? That counts too. No arguments. No appeals court. You finish it.',
    emphasis: ['Two hands', 'finish it'],
    order: 3,
  },
  {
    id: 'when-applies',
    title: 'When Does It Apply?',
    description: 'Always. Every drink. Every location. Tuesday morning coffee. Saturday night beers. Your cousin\'s wedding. Airport layover. There is no off switch. Once you\'re in, you\'re in for life.',
    emphasis: ['Always', 'for life'],
    order: 4,
  },
];
