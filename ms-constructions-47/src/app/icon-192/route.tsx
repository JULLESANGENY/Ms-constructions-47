import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#E53935',
          borderRadius: '20%',
          fontSize: 100,
          color: '#fff',
          fontWeight: 800,
          letterSpacing: '-0.04em',
        }}
      >
        MS
      </div>
    ),
    { width: 192, height: 192 }
  )
}
