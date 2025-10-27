import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';

export function ProfileHeader() {
  return (
    <div className="mb-8 space-y-6">
      <div className="flex justify-center">
        <Image
          src="/logo.png"
          alt="OnlyForklifts Logo"
          width={300}
          height={80}
          className="h-auto w-64"
        />
      </div>

      <div className="flex items-start gap-6">
        <Avatar className="h-32 w-32 border-4 border-primary">
          <AvatarImage src="/profile.png" alt="Profile" />
          <AvatarFallback className="bg-secondary text-4xl font-bold text-foreground">
            LW
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 space-y-4">
          <div>
            <h1 className="text-lg md:text-3xl lg:text-4xl font-bold text-balance text-foreground">
              Lukas W.
            </h1>
            <p className="text-sm md:text-lg text-muted-foreground">
              @onlyforklifts
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:gap-6 gap-1 text-xs md:text-sm lg:text-base">
            <div className="flex md:flex-col gap-2 md:gap-0">
              <div className="font-bold text-foreground">247</div>
              <div className="text-muted-foreground">Beiträge</div>
            </div>
            <div className="flex md:flex-col gap-2 md:gap-0">
              <div className="font-bold text-foreground">12.4K</div>
              <div className="text-muted-foreground">Hub&shy;vorgänge</div>
            </div>
            <div className="flex md:flex-col gap-2 md:gap-0">
              <div className="font-bold text-foreground">3.2K</div>
              <div className="text-muted-foreground">Paletten bewegt</div>
            </div>
          </div>

          <div className="hidden lg:block">
            <p className="text-pretty leading-relaxed text-foreground">
              🏗️ Staplerfahrer & Händler | 30+ Jahre Erfahrung
              <br />
              💪 Hebt deine Stimmung (und Paletten)
              <br />
              ⚠️ Spaß geht vor, Sicherheit kommt danach
              <br />
              🔥 Premium-Content für echte Stapler-Enthusiasten
            </p>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <p className="text-pretty leading-relaxed text-foreground text-sm">
          🏗️ Staplerfahrer & Händler | 30+ Jahre Erfahrung
          <br />
          💪 Hebt deine Stimmung (und Paletten)
          <br />
          ⚠️ Spaß geht vor, Sicherheit kommt danach
          <br />
          🔥 Premium-Content für echte Stapler-Enthusiasten
        </p>
      </div>
    </div>
  );
}
