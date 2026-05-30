export function AnimatedGauge({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`text-[#22d3ee]/20 ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" strokeWidth="0.5" />
      <path
        className="auto-play-gauge"
        d="M12 12 L12 4"
        strokeLinecap="round"
        strokeWidth="1"
        style={{ transformOrigin: "12px 12px" }}
      />
      <circle cx="12" cy="12" fill="currentColor" r="1.5" />
      <path d="M4 12 A8 8 0 0 1 20 12" strokeDasharray="2 4" strokeWidth="0.5" />
    </svg>
  );
}
