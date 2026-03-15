import type { SocialPost } from '../types';

/**
 * Curated social media posts for the Social Wall.
 *
 * To add a new post:
 * 1. Find a post on X, Instagram, TikTok, or Reddit with #buffalo or #buffalodrinkinggame
 * 2. Add an entry below with the post details
 * 3. For images, save to public/images/social/ and use a local path
 * 4. Set featured: true to show on the homepage (keep to 3 featured at a time)
 * 5. Run `npm run build` to deploy
 */
export const socialPosts: SocialPost[] = [
  {
    id: 'x-bbq-caught',
    platform: 'x',
    authorName: 'Jake M.',
    authorHandle: '@jakemiller',
    content:
      'Just got absolutely destroyed at the 4th of July BBQ. Grabbed my IPA with the wrong hand like an IDIOT. Had to chug the whole thing in front of 30 people. This game ruins lives (affectionately).',
    originalUrl: 'https://x.com/jakemiller/status/1234567890',
    postedAt: '2025-07-04T19:30:00Z',
    likes: 87,
    featured: true,
  },
  {
    id: 'ig-wedding',
    platform: 'instagram',
    authorName: 'Sarah & Co.',
    authorHandle: '@sarahbrides',
    content:
      'Three groomsmen got Buffalo\'d during the TOAST. Mid-speech. In front of 200 guests. The best man had to chug champagne while everyone watched. Wedding of the century.',
    originalUrl: 'https://www.instagram.com/p/ABC123/',
    postedAt: '2025-06-15T22:00:00Z',
    likes: 234,
    featured: true,
  },
  {
    id: 'x-airport',
    platform: 'x',
    authorName: 'Travel Dan',
    authorHandle: '@traveldan',
    content:
      'Airport bar. Total stranger grabs his beer with his right hand. I look at him. He looks at me. "...Buffalo?" "Buffalo." He finished it. We exchanged numbers. Brotherhood is real.',
    originalUrl: 'https://x.com/traveldan/status/9876543210',
    postedAt: '2025-08-22T14:15:00Z',
    likes: 412,
    featured: true,
  },
  {
    id: 'ig-tailgate',
    platform: 'instagram',
    authorName: 'College GameDay',
    authorHandle: '@collegegameday',
    content:
      'Tailgate Buffalo is UNHINGED. 47 people playing. Someone got called three times before kickoff. Another guy tried switching hands and got called out by six people simultaneously. Pure chaos.',
    originalUrl: 'https://www.instagram.com/p/DEF456/',
    postedAt: '2025-09-07T11:00:00Z',
    likes: 156,
  },
  {
    id: 'x-family-dinner',
    platform: 'x',
    authorName: 'Megan R.',
    authorHandle: '@meganruns',
    content:
      'Taught my parents Buffalo at Thanksgiving. Dad\'s been caught SIX times. Keeps "forgetting." Mom is undefeated and honestly terrifying. She watches everyone like a hawk.',
    originalUrl: 'https://x.com/meganruns/status/1122334455',
    postedAt: '2025-11-28T18:45:00Z',
    likes: 198,
  },
  {
    id: 'ig-office',
    platform: 'instagram',
    authorName: 'Work Vibes',
    authorHandle: '@workvibes',
    content:
      'Friday happy hour. The new intern learned about Buffalo the hard way. Three beers deep and someone finally told her she\'d been using the wrong hand all night. Welcome to the team, kid.',
    originalUrl: 'https://www.instagram.com/p/GHI789/',
    postedAt: '2025-10-10T17:30:00Z',
    likes: 89,
  },
];
