import { UserRound } from "lucide-react";
import type { Authority } from "@/types";
import { ExampleBadge } from "@/components/ui/ExampleBadge";

export function AuthorityCard({ authority }: { authority: Authority }) {
  return (
    <article className="flex items-center gap-4 border border-line bg-white p-5">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-paper-alt text-teal-700">
        <UserRound size={26} aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-display font-semibold text-teal-900">{authority.name}</p>
          {authority.isExample && <ExampleBadge />}
        </div>
        <p className="text-sm text-ink/70">{authority.role}</p>
      </div>
    </article>
  );
}
