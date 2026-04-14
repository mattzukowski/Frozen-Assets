"use client";

import { motion } from "framer-motion";
import { teamColors } from "@/data/teamColors";

interface ChampionCardProps {
  season: string;
  team: string;
  owner: string;
  index: number;
}

export default function ChampionCard({
  season,
  team,
  owner,
  index,
}: ChampionCardProps) {
  const colors = teamColors[team] || { primary: "#38bdf8", secondary: "#0ea5e9" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, y: -4 }}
      className="group relative rounded-xl overflow-hidden"
    >
      {/* Team-colored gradient border */}
      <div
        className="absolute inset-0 rounded-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
          padding: "1px",
        }}
      />

      {/* Glow effect */}
      <div
        className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl"
        style={{
          background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
        }}
      />

      {/* Card content */}
      <div className="relative m-[1px] rounded-xl bg-navy-950/90 backdrop-blur-sm p-6">
        {/* Trophy icon */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl">
            {index === 0 ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-yellow-400">
                <path d="M12 2L9 8.5L2 9.5L7 14.5L5.5 22L12 18.5L18.5 22L17 14.5L22 9.5L15 8.5L12 2Z" fill="currentColor" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: colors.primary }}>
                <path d="M5 3h14c.6 0 1 .4 1 1v2c0 3.3-2.2 6.2-5.2 7.1L15 14h-1v4h2v2H8v-2h2v-4H9l.2-.9C6.2 12.2 4 9.3 4 6V4c0-.6.4-1 1-1zm1 2v1c0 2.4 1.6 4.5 3.8 5.2L10.5 14h3l.7-2.8C16.4 10.5 18 8.4 18 6V5H6z" fill="currentColor" />
              </svg>
            )}
          </span>
          <span className="text-xs font-medium tracking-wider text-slate-500 uppercase">
            Champion
          </span>
        </div>

        <h3
          className="text-lg font-bold mb-1"
          style={{ color: colors.primary === "#000000" ? colors.secondary : colors.primary }}
        >
          {team}
        </h3>

        <p className="text-sm text-slate-400 mb-3">{owner}</p>

        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <span className="text-xs font-medium tracking-wider text-slate-500">
            {season}
          </span>
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: colors.primary }}
          />
        </div>
      </div>
    </motion.div>
  );
}
