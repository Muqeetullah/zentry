import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", label: "Discord", icon: <FaDiscord /> },
  { href: "https://twitter.com", label: "Twitter", icon: <FaTwitter /> },
  { href: "https://youtube.com", label: "YouTube", icon: <FaYoutube /> },
  { href: "https://medium.com", label: "Medium", icon: <FaMedium /> },
];

const Footer = () => {
  return (
    <footer className="relative w-screen overflow-hidden border-t border-white/10 bg-black text-blue-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_38%),linear-gradient(180deg,_rgba(5,8,20,0.85),_rgba(2,6,23,0.98))]" />
      <div className="container relative mx-auto px-4 py-10 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <p className="font-general text-[10px] uppercase tracking-[0.35em] text-[#7dd3fc]">
              Zentry
            </p>
            <p className="mt-4 text-sm leading-relaxed text-blue-50/70">
              A cinematic gaming universe built around bold motion, layered
              storytelling, and a connected metagame experience.
            </p>
          </div>

          <div className="flex flex-col gap-6 md:items-end">
            <div className="flex justify-center gap-3 md:justify-start">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-base text-blue-50/80 transition-all duration-300 hover:-translate-y-1 hover:border-[#7dd3fc]/60 hover:bg-[#0b1b31] hover:text-[#7dd3fc]"
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2 text-sm text-blue-50/60 md:items-end">
              <p>©Nova 2024. All rights reserved</p>
              <a
                href="#privacy-policy"
                className="transition-colors duration-300 hover:text-[#7dd3fc]"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
