export function AnimatedWrench({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`text-[#22d3ee] group-hover:rotate-12 transition-transform duration-500 origin-bottom-left ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M60 20 C60 20 80 10 90 20 C100 30 90 50 90 50 C90 50 80 45 75 50 L30 95 C25 100 15 100 10 95 C5 90 5 80 10 75 L55 30 C50 25 55 15 55 15 C55 15 50 25 60 20 Z"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="80" r="4" fill="currentColor" />
    </svg>
  );
}
