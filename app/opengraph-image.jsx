import { ImageResponse } from 'next/og'
import { PROFILE } from '../lib/data'

export const alt = 'Kshitiz Kumar — Software Development Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', height: '100%', background: '#050505', color: '#f3f4f6', padding: '64px', fontFamily: 'sans-serif', borderLeft: '16px solid #f59e0b' }}>
      <div style={{ color: '#f59e0b', fontSize: 26 }}>SOFTWARE DEVELOPMENT ENGINEER</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ fontSize: 92, fontWeight: 700 }}>{PROFILE.name}</div>
        <div style={{ fontSize: 32, color: '#d1d5db' }}>{PROFILE.tagline}</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 24 }}>
        <span>AI / RAG / FULL-STACK DEVELOPMENT</span>
        <span style={{ color: '#f59e0b' }}>kshitizkumar.in</span>
      </div>
    </div>,
    size,
  )
}
