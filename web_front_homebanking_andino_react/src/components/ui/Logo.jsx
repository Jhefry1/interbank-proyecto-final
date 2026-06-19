export default function Logo({
  size = 44,
  wordmark = true,
  variant = 'dark',
  subtitle = 'BANCA POR INTERNET',
}) {
  const textColor = variant === 'light' ? '#ffffff' : '#0066CC'
  const subColor = variant === 'light' ? 'rgba(255,255,255,.85)' : '#6b6b7b'
  const nameSize = Math.round(size * 0.5)
  const subSize = Math.max(9, Math.round(size * 0.23))

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Interbank"
        role="img"
      >
        <rect width="48" height="48" rx="8" fill="#0066CC" />
        <text
          x="24"
          y="36"
          textAnchor="middle"
          fill="white"
          fontSize="32"
          fontWeight="bold"
          fontFamily="Arial"
        >i</text>
      </svg>

      {wordmark && (
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.04 }}>
          <span style={{ fontWeight: 800, fontSize: nameSize, color: textColor, letterSpacing: '-0.5px' }}>
            interbank
          </span>
          {subtitle && (
            <span style={{ fontSize: subSize, fontWeight: 700, color: subColor, letterSpacing: '1.2px' }}>
              {subtitle}
            </span>
          )}
        </span>
      )}
    </span>
  )
}