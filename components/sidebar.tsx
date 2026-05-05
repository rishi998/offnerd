"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Boxes, ChartColumn, Clock3 } from "lucide-react";

const links = [
  { href: "/dashboard", label: "Overview", icon: ChartColumn },
  { href: "/dashboard/tools", label: "My Tools", icon: Boxes },
  { href: "/dashboard/history", label: "Purchase History", icon: Clock3 },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full rounded-2xl border border-[#1F2937] bg-[#111827] p-4 shadow-xl lg:w-72">
      <h2 className="px-3 pb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
        Workspace
      </h2>
      <ul className="space-y-2">
        {links.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                className={`flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-gradient-to-r from-violet-600/30 to-blue-600/30 text-indigo-100"
                    : "text-slate-300 hover:bg-[#0f172a] hover:text-white"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}