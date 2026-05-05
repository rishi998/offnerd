import { Globe, Mail, MessageCircle, Send } from "lucide-react";

type FooterProps = {
  onNavigate: (sectionId: string) => void;
};

const footerColumns = {
  Company: ["about", "careers", "contact", "partners"],
  Features: ["catalogue", "featured", "pricing", "cta"],
  Info: ["hero", "pricing", "about", "footer"],
  "Popular Deals": ["catalogue", "catalogue", "featured", "catalogue"],
};

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer id="footer" className="mt-14 bg-[#2563EB]">
      <div className="mx-auto max-w-7xl px-4 py-12 text-white md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {Object.entries(footerColumns).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-base font-bold">{title}</h3>
              <ul className="mt-4 space-y-2">
                {links.map((link, index) => (
                  <li key={`${link}-${index}`}>
                    <button
                      onClick={() => onNavigate(link === "careers" || link === "contact" || link === "partners" ? "about" : link)}
                      className="text-sm font-medium capitalize text-blue-100 transition-colors duration-300 hover:text-white"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1">
            <h3 className="text-base font-bold">Newsletter</h3>
            <p className="mt-3 text-sm font-medium text-blue-100">Get the latest deals and marketplace updates weekly.</p>
            <div className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-full border border-blue-300/50 bg-blue-500/30 px-4 py-2 text-sm font-medium text-white placeholder:text-blue-100 outline-none"
              />
              <button
                onClick={() => onNavigate("cta")}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1E40AF] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-blue-300/40 pt-5 md:flex-row md:items-center">
          <p className="text-sm font-medium text-blue-100">© 2026 NachoNacho Marketplace. All rights reserved.</p>
          <div className="flex items-center gap-2">
            {[Globe, Mail, MessageCircle, Send].map((Icon, index) => (
              <button
                key={index}
                onClick={() => onNavigate("about")}
                className="grid h-9 w-9 place-items-center rounded-full border border-blue-300/50 bg-blue-500/30 transition-colors duration-300 hover:bg-blue-500/60"
              >
                <Icon className="h-4 w-4 text-white" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
