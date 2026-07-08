import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#2563eb',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
        }}
      >
        <div style={{ display: 'flex', position: 'relative', width: '20px', height: '20px' }}>
          <div style={{ position: 'absolute', top: 0, left: '8px', width: '6px', height: '6px', backgroundColor: 'white', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: '2px', left: 0, width: '6px', height: '6px', backgroundColor: 'white', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: '2px', right: 0, width: '6px', height: '6px', backgroundColor: 'white', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', top: '5px', left: '9px', width: '2px', height: '8px', backgroundColor: 'white' }} />
        </div>
      </div>
    ),
    { ...size }
  )
}
