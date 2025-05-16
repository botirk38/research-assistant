export default function AcademicResearchLogo() {
  return (
    <div className="flex items-center justify-center p-8">
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full max-w-[200px]"
      >
        {/* Background Circle */}
        <circle cx="100" cy="100" r="90" fill="#f0f4f8" />

        {/* Book Stack */}
        <rect x="60" y="110" width="80" height="15" rx="2" fill="#5e60ce" />
        <rect x="65" y="95" width="70" height="15" rx="2" fill="#64dfdf" />
        <rect x="70" y="80" width="60" height="15" rx="2" fill="#48bfe3" />

        {/* Magnifying Glass */}
        <circle
          cx="120"
          cy="60"
          r="20"
          stroke="#5e60ce"
          strokeWidth="6"
          fill="transparent"
        />
        <line
          x1="105"
          y1="75"
          x2="85"
          y2="95"
          stroke="#5e60ce"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Data Points/Connections */}
        <circle cx="60" cy="50" r="4" fill="#48bfe3" />
        <circle cx="80" cy="40" r="4" fill="#5e60ce" />
        <circle cx="50" cy="70" r="4" fill="#64dfdf" />
        <line
          x1="60"
          y1="50"
          x2="80"
          y2="40"
          stroke="#5e60ce"
          strokeWidth="2"
        />
        <line
          x1="60"
          y1="50"
          x2="50"
          y2="70"
          stroke="#64dfdf"
          strokeWidth="2"
        />
        <line
          x1="80"
          y1="40"
          x2="100"
          y2="50"
          stroke="#48bfe3"
          strokeWidth="2"
        />

        {/* Abstract Brain/Network Element */}
        <path
          d="M40 60 Q60 30 90 45 Q110 55 130 40"
          stroke="#5e60ce"
          strokeWidth="3"
          fill="transparent"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
