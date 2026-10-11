import Link from 'next/link';
import { Button } from '../ui/Button';

export function WebsiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="text-lg font-semibold text-slate-950">
          AMS
        </Link>
        <Button variant="secondary" type="button">
          Sign in
        </Button>
      </div>
    </header>
  );
}
