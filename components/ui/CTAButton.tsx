import Link from "next/link";

export default function CTAButton({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: string;
  secondary?: boolean;
}) {
  return (
    <Link
      href={href}
      className={
        secondary
          ? "inline-flex items-center rounded-lg border px-5 py-3 text-[15px] font-semibold transition-all duration-200" +
            " border-[#c8dbd9] bg-[#FFFCF7] text-[#2F6F68] hover:border-[#2F6F68] hover:bg-[#EEF5F4]"
          : "inline-flex items-center rounded-lg px-5 py-3 text-[15px] font-semibold text-white transition-all duration-200" +
            " bg-[#2F6F68] hover:bg-[#245c56] shadow-sm"
      }
      style={{ fontFamily: "var(--font-heading), sans-serif" }}
    >
      {children}
    </Link>
  );
}
