import type { SocialPost } from '../types';
import SocialCard from './SocialCard';

interface SocialWallProps {
  posts: SocialPost[];
  limit?: number;
  showViewAll?: boolean;
}

export default function SocialWall({
  posts,
  limit,
  showViewAll = false,
}: SocialWallProps) {
  const displayed = limit ? posts.slice(0, limit) : posts;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayed.map((post) => (
          <SocialCard key={post.id} post={post} />
        ))}
      </div>

      {showViewAll && limit && posts.length > limit && (
        <div className="text-center mt-8">
          <a
            href="/social"
            className="inline-block px-6 py-3 bg-buffalo-primary text-white font-bold rounded-xl hover:bg-buffalo-secondary transition-colors"
          >
            See All Posts
          </a>
        </div>
      )}
    </div>
  );
}
