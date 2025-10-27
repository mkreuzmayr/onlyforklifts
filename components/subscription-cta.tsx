import { Button, buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check } from 'lucide-react';
import Link from 'next/link';

const benefits = [
  'Unbegrenzter Zugang zu allen Stapler-Inhalten',
  'Exklusives Hinter-den-Gabeln Material',
  'Tägliche Paletten-Stapel Tutorials',
  'Direktnachrichten mit Lukas',
  'Früher Zugang zu neuen Beiträgen',
  'Exklusive Tipps und Tricks',
];

export function SubscriptionCTA() {
  return (
    <Card className="border-2 border-primary bg-card">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold text-balance">
          Bereit zum Abheben?
        </CardTitle>
        <CardDescription className="text-lg text-pretty">
          Lukas lässt dich nicht am Boden hängen. Abonniere jetzt für exklusiven
          Zugang!
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-3 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm leading-relaxed text-foreground">
                {benefit}
              </span>
            </div>
          ))}
        </div>

        <div className="space-y-4 rounded-lg border border-border bg-secondary p-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-foreground">€9,99</div>
            <div className="text-sm text-muted-foreground">pro Monat</div>
          </div>

          {/* http://paypal.me/lukasweixelbaumer/9.99 */}
          <Link
            href="#checkout"
            className={buttonVariants({
              variant: 'default',
              size: 'lg',
              className: 'w-full text-lg font-bold',
            })}
          >
            Jetzt Abonnieren
          </Link>

          <p className="text-center text-xs text-muted-foreground text-pretty">
            {'Jederzeit kündbar. Kein Staplerschein erforderlich.'}
          </p>
        </div>

        <div className="space-y-2 text-center">
          <p className="text-sm font-semibold text-primary">
            ⚡ Limitiertes Angebot: Die ersten 100 Abonnenten bekommen ein
            Meet-and-Greet mit Staplermeister Lukas.
          </p>
          <p className="text-xs italic text-muted-foreground text-pretty">
            Warnung: Kann zu übermäßiger Wertschätzung für Hubgeräte und
            korrekte Lastverteilungstechniken führen.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
