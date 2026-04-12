"use client";

import { motion } from "framer-motion";
import championsData from "@/data/champions.json";
import ChampionCard from "./ChampionCard";

interface Champion {
  season: string;
  team: string;
  owner: string;
}

export default function Champions() {
  const champions: Champion[] = championsData;

  return (
    <section id="champions" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-800 via-navy-950 to-navy-800" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient-ice mb-4">
            Hall of Champions
          </h2>
          <div className="w-16 h-px mx-auto bg-gradient-to-r from-transparent via-ice-400 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {champions.map((champ, i) => (
            <ChampionCard
              key={champ.season}
              season={champ.season}
              team={champ.team}
              owner={champ.owner}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
