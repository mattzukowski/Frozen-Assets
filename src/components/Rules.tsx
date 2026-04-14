"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScoringTable from "./ScoringTable";
import {
  skaterScoring,
  goalieScoring,
  defensemanTweaks,
  playoffBonuses,
  prizeBreakdown,
} from "@/data/scoringData";

const sections = [
  { id: "scoring", label: "Scoring" },
  { id: "roster", label: "Roster" },
  { id: "regular-season", label: "Regular Season" },
  { id: "playoffs", label: "Playoffs" },
  { id: "communication", label: "Communication" },
  { id: "claims-drops-trades", label: "Claims, Drops & Trades" },
  { id: "draft-keepers", label: "Draft & Keepers" },
  { id: "buy-in", label: "Buy-in & Prizes" },
];

function RuleSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-16 scroll-mt-24"
    >
      <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>
      <div className="text-slate-300 leading-relaxed space-y-4">{children}</div>
    </motion.div>
  );
}

export default function Rules() {
  const [activeSection, setActiveSection] = useState("scoring");

  const handleSidebarClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="rules" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-800 via-navy-900 to-navy-950" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient-ice mb-4">
            League Rules
          </h2>
          <div className="w-16 h-px mx-auto bg-gradient-to-r from-transparent via-ice-400 to-transparent" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar navigation */}
          <nav className="lg:w-56 shrink-0">
            <div className="lg:sticky lg:top-24">
              {/* Mobile: horizontal scroll */}
              <div className="flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 -mx-2 px-2 lg:mx-0 lg:px-0">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={(e) => handleSidebarClick(e, s.id)}
                    className={`whitespace-nowrap px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeSection === s.id
                        ? "bg-ice-400/10 text-ice-400 border border-ice-400/20"
                        : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
                    }`}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          {/* Rules content */}
          <div className="flex-1 min-w-0">
            <RuleSection id="scoring" title="Points & Scoring Categories">
              <p>
                We use{" "}
                <a href="https://www.fantrax.com/" target="_blank" rel="noopener noreferrer" className="text-ice-400 hover:underline">
                  Fantrax
                </a>{" "}
                as our platform. We use total points to score, not head to head matchups.
              </p>
              <p className="text-sm text-slate-400">
                A balanced scoring system primarily focused on scoring, but rewards secondary
                traits as well. A second line power forward will likely outscore a second line
                finesse player, but will not eclipse a first liner.
              </p>

              <ScoringTable title="Skater Scoring" data={skaterScoring} />
              <ScoringTable title="Goalie Scoring" data={goalieScoring} />
              <ScoringTable
                title="Defenseman Scoring Tweak"
                data={defensemanTweaks}
                description="Defensemen get marginally more points for goals, assists, and blocks. This helps put the best of them at parity with the top forwards."
              />
            </RuleSection>

            <RuleSection id="roster" title="Roster">
              <p>
                Active roster: <strong className="text-white">19 players</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                <li>4 Centers</li>
                <li>4 Right Wingers</li>
                <li>4 Left Wingers</li>
                <li>6 Defensemen</li>
                <li>1 Goalie</li>
              </ul>
              <p>
                Bench spots: <strong className="text-white">14</strong> (for rookies &amp; bench players).
                Total roster cap: <strong className="text-white">33</strong>.
              </p>
              <p className="text-sm text-slate-400">
                Injured Reserve players do not count towards the total roster cap.
              </p>
            </RuleSection>

            <RuleSection id="regular-season" title="Regular Season">
              <p>
                <strong className="text-white">60 games</strong> (~73% of the season&apos;s game totals)
                of regular season gameplay.
              </p>
              <p>
                Scoring is done on a <strong className="text-white">per position</strong> level in
                Fantrax. You do not have 60&times;4=240 games to play in any Center position. You have
                60 games to play in C1, 60 in C2, etc. You can find your total games played per
                position by going to Fantrax &rarr; Team &rarr; Min/Max.
              </p>
              <p>
                If you go over your total in a position,{" "}
                <strong className="text-red-400">points will not accumulate</strong> and you&apos;ll
                waste that player&apos;s game.
              </p>
              <p className="text-sm text-slate-400">
                It is up to you to wisely use your bench to make sure you hit your totals in games
                played, but maximize the time your best players spend on the ice.
              </p>
              <p className="text-sm text-slate-400">
                In a traditional season, the final day of the regular season is February 14th
                (which also marks the day of the trade deadline).
              </p>

              <h4 className="text-lg font-semibold text-ice-300 mt-6">Trade Deadline</h4>
              <p>
                The trade deadline is <strong className="text-white">7 PM</strong> the night before
                the playoffs begin.
              </p>
              <p className="text-sm text-slate-400">
                Non-playoff teams may continue to trade with each other after the deadline. After
                the playoffs conclude, trading for all teams opens up again.
              </p>
            </RuleSection>

            <RuleSection id="playoffs" title="Playoffs">
              <p>
                The top <strong className="text-white">6 teams</strong> in terms of total points
                scored make the playoffs. No special seeding, but teams higher up in the standings
                get a points boost as a reward:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm max-w-md">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-xs font-medium tracking-wider text-slate-500 uppercase">Place</th>
                      <th className="text-right py-3 px-4 text-xs font-medium tracking-wider text-slate-500 uppercase">Bonus Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {playoffBonuses.map((row, i) => (
                      <tr key={row.place} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                        <td className="py-2.5 px-4 text-slate-300">{row.place}</td>
                        <td className="py-2.5 px-4 text-right font-medium text-emerald-400">
                          {row.bonus}{row.note && <span className="text-slate-500 ml-1 text-xs">{row.note}</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-slate-400 mt-4">
                Commissioners track playoff points separately from Fantrax (any overages would skew totals).
              </p>
              <p>
                Strict limit of <strong className="text-white">22 games played</strong> (~27% of the
                season&apos;s game totals) per position.
              </p>
              <p className="text-red-400 text-sm font-medium">
                Any overage of games played is subject to a strict 15 point penalty per game. This
                works differently than the regular season (where points simply don&apos;t accumulate).
              </p>
              <p className="text-sm text-slate-400">
                In a traditional season, the first playoff day is February 15th and the final one
                is March 31st.
              </p>
            </RuleSection>

            <RuleSection id="communication" title="Communication">
              <p>
                <strong className="text-white">Slack</strong> is the primary communication method.
                Key channels:
              </p>
              <ul className="space-y-2 ml-2">
                {[
                  { channel: "#league-talk", desc: "General league discussion" },
                  { channel: "#waiver-wire", desc: "Player drops" },
                  { channel: "#free-agency", desc: "Player claims/signings" },
                  { channel: "#tradeblock", desc: "Players being shopped" },
                  { channel: "#completed-trades", desc: "Finalized trades" },
                ].map((c) => (
                  <li key={c.channel} className="flex items-start gap-3 text-sm">
                    <code className="text-ice-400 bg-white/5 px-2 py-0.5 rounded text-xs font-mono shrink-0">
                      {c.channel}
                    </code>
                    <span className="text-slate-400">{c.desc}</span>
                  </li>
                ))}
              </ul>
            </RuleSection>

            <RuleSection id="claims-drops-trades" title="Claims, Drops & Trades">
              <h4 className="text-lg font-semibold text-ice-300">Claims</h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                <li>Post in #free-agency to &quot;sign&quot; a player</li>
                <li><strong className="text-white">1 claim per 24 hours</strong> per team</li>
                <li>Must be under roster limit of 33</li>
                <li>After posting, go into Fantrax and claim. Tag your post with the Done emoji</li>
                <li>Free agency period begins several days before regular season start, well after the draft</li>
                <li>In the offseason, waiver priority is determined randomly and carried over season to season. Successful claim = drop to bottom of waiver priority list</li>
              </ul>

              <h4 className="text-lg font-semibold text-ice-300 mt-6">Drops</h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                <li>Post in #waiver-wire, then go into Fantrax and drop. Tag post with Done emoji</li>
                <li>Dropped players are instantly removed but don&apos;t enter the free agency pool for <strong className="text-white">24 hours</strong></li>
                <li>Multiple claims = team with <strong className="text-white">lowest absolute score</strong> wins (determined 24 hours after drop)</li>
                <li>In the offseason, waiver priority is determined via random lottery</li>
              </ul>

              <h4 className="text-lg font-semibold text-ice-300 mt-6">Trades</h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                <li>Use #tradeblock to advertise players being shopped</li>
                <li>Directly reach out to other GMs in Slack</li>
                <li>Once agreed, post full trade in #completed-trades</li>
                <li>The other team must confirm. A commissioner will then process the trade</li>
                <li>You can trade picks up to <strong className="text-white">one year in advance</strong></li>
              </ul>
            </RuleSection>

            <RuleSection id="draft-keepers" title="Draft & Keepers">
              <h4 className="text-lg font-semibold text-ice-300">Keepers</h4>
              <p>
                Semi-dynasty league. Retain <strong className="text-white">10 total players</strong>:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm ml-2">
                <li>
                  <strong className="text-white">2 rookie slots</strong> &mdash; Determined by a
                  draft at the very start of the league. Yours forever. Do not count against the 7
                  regular keeper slots. If you drop them, you lose the rookie slot forever.
                </li>
                <li>
                  <strong className="text-white">7 regular keeper slots</strong> &mdash; No
                  restrictions, use as you wish.
                </li>
              </ul>

              <h4 className="text-lg font-semibold text-ice-300 mt-6">Draft</h4>
              <p>Draft order is fixed (no snake pattern).</p>
              <ul className="list-disc list-inside space-y-1 text-sm ml-2">
                <li>Picks 1-6: Non-playoff teams in reverse regular season standing order (worst record picks 1st)</li>
                <li>Picks 7-12: Playoff teams in final playoff position order (lowest total playoff points picks 7th; champion picks 12th)</li>
              </ul>

              <h4 className="text-lg font-semibold text-ice-300 mt-6">Draft Lottery</h4>
              <p>
                Determines the <strong className="text-white">top 3 spots</strong> of the draft
                (1st round only). Only non-playoff teams are eligible.
              </p>
              <p className="text-sm text-slate-400">
                No set percentages. Formula for lottery balls (out of 1000) depends on: final
                standings position, total points, games played, and distance from the playoff
                cutoff.
              </p>
            </RuleSection>

            <RuleSection id="buy-in" title="Buy-in & Prize Pot">
              <p>
                Buy-in: <strong className="text-white">$20</strong> per team. 12 teams ={" "}
                <strong className="text-white">$240</strong> total.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm max-w-md">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-xs font-medium tracking-wider text-slate-500 uppercase">Prize</th>
                      <th className="text-right py-3 px-4 text-xs font-medium tracking-wider text-slate-500 uppercase">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prizeBreakdown.map((row, i) => (
                      <tr key={row.prize} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                        <td className="py-2.5 px-4 text-slate-300">{row.prize}</td>
                        <td className="py-2.5 px-4 text-right font-medium text-emerald-400">{row.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-slate-400 mt-4">
                $2 extra per person for shipping the trophy + adding a nameplate each year.
              </p>
            </RuleSection>
          </div>
        </div>
      </div>
    </section>
  );
}
