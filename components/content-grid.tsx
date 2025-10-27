import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
  Lock,
  Play,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  MoreHorizontal,
} from 'lucide-react';
import Image from 'next/image';

const teaserContent = [
  {
    title: "Ich mach's sanft",
    description: "Schau zu, wie ich 2 Tonnen hebe als wär's nix... 😏",
    type: 'image',
    image: '/images/img1.png',
    likes: 247,
    comments: 38,
  },
  {
    title: 'Ohne Warnweste und Helm',
    description: 'Stapler-Rennen nach Feierabend. 🚨',
    type: 'image',
    image: '/images/img2.png',
    likes: 387,
    comments: 75,
  },
  {
    title: "Auch wenn's eng wird komm ich zurecht",
    description: 'Du glaubst nicht, wie ich in diese Lagergasse passe. 🤯',
    locked: true,
    type: 'image',
    image: '/images/img3.png',
  },
  {
    title: 'Paletten Stapel der Meisterklasse',
    description: 'Meine Technik wird dich umhauen. 💪',
    locked: true,
    type: 'image',
    image: '/images/img1.png',
  },
  {
    title: 'Staplerfahrer hinter dem Steuer',
    description: 'Exklusiver und unzensierter POV-Content. 🎥',
    type: 'video',
    video: '/videos/vid1.mp4',
    likes: 183,
    comments: 45,
  },
  {
    title: 'Nachtschichten sind keine Seltenheit',
    description: 'Späte Sessions auf der Rampe. 🌙',
    locked: true,
    type: 'image',
    image: '/images/img3.png',
  },
] satisfies (
  | {
      title: string;
      description: string;
      type: 'image';
      locked?: boolean;
      likes?: number;
      comments?: number;
      image: string;
    }
  | {
      title: string;
      description: string;
      type: 'video';
      likes?: number;
      comments?: number;
      video: string;
    }
)[];

export function ContentGrid() {
  return (
    <div className="mb-12">
      <div className="mb-6 border-b border-border pb-4">
        <h2 className="text-2xl font-bold text-foreground">Beiträge</h2>
        <p className="text-sm text-muted-foreground">
          Abonniere für exklusiven Stapler-Content
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {teaserContent.map((item, index) => (
          <Card
            key={index}
            className="py-0 group/item relative aspect-square cursor-pointer overflow-hidden border-border bg-card transition-all hover:border-primary"
          >
            {item.locked && (
              <div className="absolute inset-0 bg-linear-to-br from-secondary to-background" />
            )}

            {item.type === 'image' ? (
              <Image
                src={item.image}
                width={400}
                height={400}
                alt={item.title}
                className={cn(
                  'h-full w-full object-cover',
                  item.locked &&
                    'opacity-30 blur-sm transition-all group-hover/item:blur-none group-hover/item:opacity-50'
                )}
              />
            ) : (
              <video
                src={item.video}
                width={400}
                height={400}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            )}

            {item.locked ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gray-900/70 p-4 text-center sm:gap-3">
                <Lock className="h-10 w-10 text-primary sm:h-8 sm:w-8" />
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white sm:text-sm text-balance">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-200 sm:text-xs text-pretty">
                    {item.description}
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="absolute inset-0 bg-linear-to-b from-black/0 via-black/20 to-black" />

                <div className="absolute top-3 right-3 flex gap-2">
                  <button className="rounded-full bg-black/40 p-1.5 backdrop-blur-sm transition-all hover:bg-black/60">
                    <MoreHorizontal className="h-5 w-5 text-white" />
                  </button>
                </div>

                <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 space-y-1">
                      <h3 className="text-base font-semibold text-white leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/90 leading-snug">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button className="group cursor-pointer flex items-center gap-1.5 transition-all hover:scale-110">
                        <Heart className="h-6 w-6 text-white transition-all group-hover:fill-red-500 group-hover:text-red-500" />
                        <span className="text-sm font-medium text-white">
                          {item.likes}
                        </span>
                      </button>
                      <button className="group cursor-pointer flex items-center gap-1.5 transition-all hover:scale-110">
                        <MessageCircle className="h-6 w-6 text-white transition-all group-hover:text-blue-400" />
                        <span className="text-sm font-medium text-white">
                          {item.comments}
                        </span>
                      </button>
                      <button className="group cursor-pointer flex items-center gap-1.5 transition-all hover:scale-110">
                        <Share2 className="h-6 w-6 text-white transition-all group-hover:text-green-400" />
                      </button>
                    </div>
                    <button className="group cursor-pointer transition-all hover:scale-110">
                      <Bookmark className="h-6 w-6 text-white transition-all group-hover:fill-white" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
