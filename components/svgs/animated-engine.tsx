export function AnimatedEngine({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`text-[#22d3ee]/20 ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 100 50"
    >
      <path
        className="auto-play-waveform"
        d="M0 25 H20 L30 10 L45 40 L60 20 L70 25 H100"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        style={{ strokeDasharray: "20 20" }}
      />
      <path
        d="M0 25 H20 L30 10 L45 40 L60 20 L70 25 H100"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.5"
        strokeOpacity="0.3"
      />
    </svg>
  );
}
