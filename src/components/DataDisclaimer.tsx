import { site } from "@/lib/data";

interface DataDisclaimerProps {
  /** What type of data this page shows (e.g. "stand rankings", "weapon data") */
  dataType: string;
}

export function DataDisclaimer({ dataType }: DataDisclaimerProps) {
  return (
    <div className="mt-10 rounded-lg border border-amber-400/20 bg-amber-950/15 p-5">
      <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-amber-300">
        About This Data
      </h2>
      <p className="mt-3 leading-7 text-slate-300">
        The {dataType} on this page are adapted from the local Bridger Western source vault,
        community research, and in-game observation. They are <strong className="text-white">not official</strong> values
        published by BRIDGER INC. We{" "}
        <strong className="text-white">continuously update</strong> this page as{" "}
        <span className="text-amber-200 font-semibold">Bridger: WESTERN</span> evolves with
        new patches and community discoveries.
      </p>
      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-400">
        <span>
          Official:{" "}
          <a
            href={`https://www.roblox.com/games/${site.robloxGameId}/bridger-WESTERN`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-300 hover:text-emerald-200 min-h-[44px]"
          >
            Roblox Game Page
          </a>
        </span>
        <span>
          Source wiki:{" "}
          <a
            href="https://www.bridgerwestern.wiki"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-300 hover:text-emerald-200 min-h-[44px]"
          >
            bridgerwestern.wiki
          </a>
        </span>
        <span>Last updated: June 2026</span>
      </div>
      <p className="mt-2 text-xs text-slate-500">
        Found something inaccurate? The game may have been updated since this page was last reviewed.
        Check the official Roblox page for the latest changes.
      </p>
    </div>
  );
}
