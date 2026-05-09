import ReadingProgress from "@/components/ui/ReadingProgress";

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ReadingProgress />
      {children}
    </>
  );
}
