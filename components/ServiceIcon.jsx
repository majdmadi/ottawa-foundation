/** Simple line icons for the four services. Stroke uses currentColor. */
export default function ServiceIcon({ name, className = 'h-8 w-8' }) {
  const common = {
    viewBox: '0 0 32 32',
    className,
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };
  switch (name) {
    case 'foundation':
      return (
        <svg {...common}>
          <path d="M3 13l13-9 13 9" />
          <path d="M6 12v7h20v-7" />
          <path d="M3 19h26v8H3z" />
          <path d="M9 23h4M19 23h4" />
        </svg>
      );
    case 'crack':
      return (
        <svg {...common}>
          <rect x="4" y="4" width="24" height="24" rx="2" />
          <path d="M17 4l-4 7 5 5-4 5 2 7" />
        </svg>
      );
    case 'opening':
      return (
        <svg {...common}>
          <path d="M3 5h26v22H3z" />
          <path d="M10 27V13h12v14" />
          <path d="M8 11h16" strokeWidth="3" />
          <path d="M19 20h.01" />
        </svg>
      );
    case 'mold':
      return (
        <svg {...common}>
          <path d="M16 3c4 5 8 9 8 14a8 8 0 01-16 0c0-5 4-9 8-14z" />
          <circle cx="13" cy="18" r="1.2" />
          <circle cx="18.5" cy="21" r="1.2" />
          <circle cx="17" cy="15" r="1" />
          <path d="M4 29l24-24" />
        </svg>
      );
    default:
      return null;
  }
}
