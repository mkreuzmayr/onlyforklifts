import { ProfileHeader } from '@/components/profile-header';
import { ContentGrid } from '@/components/content-grid';
import { SubscriptionCTA } from '@/components/subscription-cta';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 pt-2 pb-8">
        <ProfileHeader />
        <ContentGrid />
        <SubscriptionCTA />
      </div>
    </main>
  );
}
