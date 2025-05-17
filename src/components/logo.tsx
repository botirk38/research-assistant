export default function Logo() {
  return (
    <div className="flex h-10 w-10 items-center justify-center p-0">
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        {/* Book Stack */}
        <rect
          x="60"
          y="110"
          width="80"
          height="15"
          rx="2"
          style={{ fill: "var(--color-chart-1)" }}
        />
        <rect
          x="65"
          y="95"
          width="70"
          height="15"
          rx="2"
          style={{ fill: "var(--color-chart-2)" }}
        />
        <rect
          x="70"
          y="80"
          width="60"
          height="15"
          rx="2"
          style={{ fill: "var(--color-chart-3)" }}
        />
      </svg>
    </div>
  );
}
