export function AnimatedTire({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`text-[#22d3ee] animate-spin-slow ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="45" strokeWidth="4" />
      <circle cx="50" cy="50" r="30" strokeWidth="2" strokeDasharray="6 4" />
      <circle cx="50" cy="50" r="15" strokeWidth="4" />
      <path d="M50 5 L50 20 M50 95 L50 80 M5 50 L20 50 M95 50 L80 50" strokeWidth="4" strokeLinecap="round" />
      <path d="M18 18 L29 29 M82 82 L71 71 M18 82 L29 71 M82 18 L71 29" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
