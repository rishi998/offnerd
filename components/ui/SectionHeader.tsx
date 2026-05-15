"use client";

import { motion } from "framer-motion";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={[
        centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className,
      ].join(" ")}
    >
      {eyebrow ? (
        <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#2563EB]">{eyebrow}</p>
      ) : null}
      <h2 className="font-heading mt-3 text-balance text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl lg:text-[2.65rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className={["mt-4 text-base font-medium leading-relaxed text-[#64748B] md:text-lg", centered ? "mx-auto" : ""].join(" ")}>
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}
