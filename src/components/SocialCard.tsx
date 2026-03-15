import type { SocialPost, SocialPlatform } from '../types';
import PlatformIcon from './PlatformIcon';

interface SocialCardProps {
  post: SocialPost;
}

const platformNames: Record<SocialPlatform, string> = {
  x: 'X',
  instagram: 'Instagram',
  tiktok: 'TikTok',
  reddit: 'Reddit',
};

function relativeTime(isoDate: string): string {
  const now = new Date();
  const then = new Date(isoDate);
  const diffMs = now.getTime() - then.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 1) return 'today';
  if (diffDays < 7) return `${diffDays}d ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)}mo ago`;
  return `${Math.floor(diffDays / 365)}y ago`;
}

export default function SocialCard({ post }: SocialCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      {/* Header: platform icon + author + time */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 bg-buffalo-light rounded-full flex items-center justify-center text-buffalo-gray">
          <PlatformIcon platform={post.platform} className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm text-buffalo-dark truncate">
            {post.authorName}
          </p>
          <p className="text-xs text-gray-400">{post.authorHandle}</p>
        </div>
        <span className="text-xs text-gray-400 flex-shrink-0">
          {relativeTime(post.postedAt)}
        </span>
      </div>

      {/* Content */}
      <p className="text-sm text-buffalo-gray leading-relaxed flex-1 mb-3">
        {post.content}
      </p>

      {/* Optional image */}
      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt=""
          className="rounded-lg w-full object-cover max-h-48 mb-3"
          loading="lazy"
        />
      )}

      {/* Footer: likes + link */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        {post.likes ? (
          <span className="text-xs text-gray-400">
            {post.likes.toLocaleString()} likes
          </span>
        ) : (
          <span />
        )}
        <a
          href={post.originalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-buffalo-primary hover:underline"
        >
          View on {platformNames[post.platform]}
        </a>
      </div>
    </div>
  );
}
