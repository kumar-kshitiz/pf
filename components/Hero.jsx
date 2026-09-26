'use client'
import { useEffect, useRef, useState } from 'react'
import { ArrowDown, MapPin } from 'lucide-react'
import { PROFILE, HERO_BACKGROUND } from '../lib/data'
import useReveal from '../hooks/useReveal'

function AnimatedIIITLabel() {
  const fullText = 'IIIT Nagpur'
  const [visibleText, setVisibleText] = useState('')

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      index += 1
      setVisibleText(fullText.slice(0, index))

      if (index >= fullText.length) {
        clearInterval(timer)
      }
    }, 180)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="-mt-2 text-center sm:-mt-3 lg:-mt-6">
      <div className="inline-flex items-center gap-2 border border-amber-500/30 bg-black/20 px-4 py-2 shadow-[0_0_20px_rgba(245,158,11,0.14)] backdrop-blur-sm">
        <span className="h-2 w-2 bg-amber-500 animate-pulse" />
        <span className="min-w-[150px] font-mono-body text-[10px] uppercase tracking-[0.35em] text-amber-300 sm:text-[11px]">
          {visibleText}
          <span className="ml-0.5 inline-block animate-pulse text-amber-500">|</span>
        </span>
      </div>
    </div>
  )
}

function DegreeCap3DCard() {
  const mountRef = useRef(null)

  useEffect(() => {
    let cancelled = false
    let animationFrameId = null
    let pointerDown = false
    let prevX = 0
    let prevY = 0
    let targetRotX = 0
    let targetRotY = 0
    let currentRotX = 0
    let currentRotY = 0
    let zoomDistance = 7.4

    const loadThree = () => {
      if (window.THREE) return Promise.resolve()

      return new Promise((resolve, reject) => {
        const existing = document.querySelector('script[data-three-hero]')
        if (existing) {
          existing.addEventListener('load', resolve, { once: true })
          existing.addEventListener('error', reject, { once: true })
          return
        }

        const script = document.createElement('script')
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'
        script.async = true
        script.dataset.threeHero = 'true'
        script.onload = resolve
        script.onerror = reject
        document.head.appendChild(script)
      })
    }

    const initScene = () => {
      if (!mountRef.current || cancelled || !window.THREE) return

      const container = mountRef.current
      const scene = new window.THREE.Scene()

      const width = container.clientWidth || 320
      const height = container.clientHeight || 320
      const camera = new window.THREE.PerspectiveCamera(42, width / height, 0.1, 1000)
      camera.position.set(0, 0.8, 8.5)

      const renderer = new window.THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(width, height)
      renderer.setClearColor(0x000000, 0)
      container.innerHTML = ''
      container.appendChild(renderer.domElement)

      const ambient = new window.THREE.AmbientLight(0xe5e7eb, 0.9)
      scene.add(ambient)

      const fillLight = new window.THREE.DirectionalLight(0xffffff, 1.2)
      fillLight.position.set(2.5, 4, 4)
      scene.add(fillLight)

      const glowLight = new window.THREE.PointLight(0xf59e0b, 2.4, 30)
      glowLight.position.set(-2, 1.5, 3)
      scene.add(glowLight)

      const capMaterial = new window.THREE.MeshPhysicalMaterial({
        color: 0xf8fafc,
        metalness: 0.18,
        roughness: 0.16,
        clearcoat: 1,
        clearcoatRoughness: 0.15,
        reflectivity: 0.9,
        emissive: 0xf59e0b,
        emissiveIntensity: 0.08,
      })

      const edgeGlowMaterial = new window.THREE.MeshBasicMaterial({
        color: 0xf59e0b,
        transparent: true,
        opacity: 0.8,
      })

      const tasselMaterial = new window.THREE.MeshPhysicalMaterial({
        color: 0xf8fafc,
        metalness: 0.22,
        roughness: 0.24,
        clearcoat: 0.7,
        emissive: 0xfbbf24,
        emissiveIntensity: 0.08,
      })

      const capGroup = new window.THREE.Group()
      scene.add(capGroup)

      const baseGeo = new window.THREE.CylinderGeometry(1.05, 1.15, 1.1, 40)
      const base = new window.THREE.Mesh(baseGeo, capMaterial)
      base.position.y = -0.5
      capGroup.add(base)

      const rimGeo = new window.THREE.TorusGeometry(1.13, 0.03, 16, 64)
      const rim = new window.THREE.Mesh(rimGeo, edgeGlowMaterial)
      rim.rotation.x = Math.PI / 2
      rim.position.y = -1.05
      capGroup.add(rim)

      const boardGeo = new window.THREE.BoxGeometry(2.8, 0.16, 2.8, 4, 1, 4)
      const board = new window.THREE.Mesh(boardGeo, capMaterial)
      board.rotation.y = Math.PI / 4
      board.position.y = 0.12
      capGroup.add(board)

      const boardEdgeGeo = new window.THREE.BoxGeometry(2.9, 0.22, 2.9)
      const boardEdgeMat = new window.THREE.MeshBasicMaterial({
        color: 0xf59e0b,
        transparent: true,
        opacity: 0.2,
        side: window.THREE.BackSide,
      })
      const boardEdge = new window.THREE.Mesh(boardEdgeGeo, boardEdgeMat)
      boardEdge.rotation.y = Math.PI / 4
      boardEdge.position.y = 0.12
      capGroup.add(boardEdge)

      const buttonGeo = new window.THREE.SphereGeometry(0.12, 20, 20)
      const button = new window.THREE.Mesh(buttonGeo, tasselMaterial)
      button.position.set(0.9, 0.28, 0.9)
      capGroup.add(button)

      const cordCurve = new window.THREE.CatmullRomCurve3([
        new window.THREE.Vector3(0.9, 0.26, 0.9),
        new window.THREE.Vector3(1.08, -0.04, 1.08),
        new window.THREE.Vector3(1.2, -0.3, 1.2),
      ])
      const cordGeo = new window.THREE.TubeGeometry(cordCurve, 18, 0.02, 8, false)
      const cord = new window.THREE.Mesh(cordGeo, tasselMaterial)
      capGroup.add(cord)

      const beadGeo = new window.THREE.SphereGeometry(0.1, 18, 18)
      const bead = new window.THREE.Mesh(beadGeo, tasselMaterial)
      bead.position.set(1.2, -0.3, 1.2)
      capGroup.add(bead)

      const tasselGeo = new window.THREE.ConeGeometry(0.14, 0.5, 18, 1, true)
      const tassel = new window.THREE.Mesh(tasselGeo, tasselMaterial)
      tassel.position.set(1.2, -0.62, 1.2)
      capGroup.add(tassel)

      const shadow = new window.THREE.Mesh(
        new window.THREE.CircleGeometry(2.2, 32),
        new window.THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.18 })
      )
      shadow.rotation.x = -Math.PI / 2
      shadow.position.y = -1.55
      scene.add(shadow)

      capGroup.position.y = 0.18
      capGroup.scale.set(1.15, 1.15, 1.15)

      const onPointerDown = (x, y) => {
        pointerDown = true
        prevX = x
        prevY = y
      }

      const onPointerMove = (x, y) => {
        if (!pointerDown) return
        const dx = x - prevX
        const dy = y - prevY
        targetRotY += dx * 0.005
        targetRotX += dy * 0.005
        targetRotX = Math.max(-0.6, Math.min(0.6, targetRotX))
        prevX = x
        prevY = y
      }

      const onPointerUp = () => {
        pointerDown = false
      }

      const onResize = () => {
        if (!container || cancelled) return
        const nextWidth = container.clientWidth || 320
        const nextHeight = container.clientHeight || 320
        camera.aspect = nextWidth / nextHeight
        camera.updateProjectionMatrix()
        renderer.setSize(nextWidth, nextHeight)
      }

      renderer.domElement.addEventListener('pointerdown', (event) => onPointerDown(event.clientX, event.clientY))
      window.addEventListener('pointermove', (event) => onPointerMove(event.clientX, event.clientY))
      window.addEventListener('pointerup', onPointerUp)
      window.addEventListener('resize', onResize)

      const animate = () => {
        if (cancelled) return
        const t = performance.now() * 0.001

        targetRotY += 0.0035
        currentRotX += (targetRotX - currentRotX) * 0.08
        currentRotY += (targetRotY - currentRotY) * 0.08

        capGroup.rotation.y = currentRotY
        capGroup.rotation.x = currentRotX * 0.5
        capGroup.position.y = 0.18 + Math.sin(t * 0.95) * 0.12
        shadow.scale.setScalar(1 + Math.sin(t * 1.5) * 0.06)

        const pulse = 0.08 + Math.sin(t * 1.8) * 0.03
        capMaterial.emissiveIntensity = pulse
        edgeGlowMaterial.opacity = 0.75 + Math.sin(t * 2.2) * 0.2

        camera.position.z += (zoomDistance - camera.position.z) * 0.08
        camera.lookAt(0, 0.1, 0)

        renderer.render(scene, camera)
        animationFrameId = requestAnimationFrame(animate)
      }

      renderer.domElement.addEventListener('wheel', (event) => {
        event.preventDefault()
        zoomDistance += event.deltaY * 0.005
        zoomDistance = Math.max(5.8, Math.min(13.5, zoomDistance))
      }, { passive: false })

      animate()

      return () => {
        cancelled = true
        if (animationFrameId) cancelAnimationFrame(animationFrameId)
        window.removeEventListener('pointermove', onPointerMove)
        window.removeEventListener('pointerup', onPointerUp)
        window.removeEventListener('resize', onResize)
        if (renderer.domElement) renderer.domElement.remove()
        renderer.dispose()
      }
    }

    let cleanupScene = null
    loadThree()
      .then(() => {
        if (!cancelled) cleanupScene = initScene()
      })
      .catch(() => {
        if (mountRef.current) {
          mountRef.current.innerHTML = '<div class="flex h-full items-center justify-center text-[10px] uppercase tracking-[0.25em] text-amber-500">Cap</div>'
        }
      })

    return () => {
      cancelled = true
      if (cleanupScene) cleanupScene()
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[420px]">
      <div className="pointer-events-none absolute inset-8 rounded-full bg-amber-500/10 blur-3xl" />
      <div ref={mountRef} className="relative h-[220px] w-full sm:h-[260px] lg:h-[330px]" />
      <div className="mt-0">
        <AnimatedIIITLabel />
      </div>
      <div className="mt-4 space-y-3">
        <a
          href="#projects"
          className="w-full inline-flex items-center justify-between gap-6 px-6 py-4 bg-amber-500 text-black font-mono-body text-xs uppercase tracking-[0.25em] font-semibold btn-amber"
        >
          View Projects <span>→</span>
        </a>
        <a
          href="#contact"
          className="w-full inline-flex items-center justify-between gap-6 px-6 py-4 bg-transparent text-white border border-white/30 hover:border-amber-500 hover:text-amber-500 transition-colors font-mono-body text-xs uppercase tracking-[0.25em] font-semibold"
        >
          Get in touch <span>↗</span>
        </a>
      </div>
    </div>
  )
}

export default function Hero() {
  const ref = useReveal()

  return (
    <section id="home" ref={ref} className="relative min-h-screen w-full overflow-hidden grain">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_BACKGROUND})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black" />
      <div className="absolute inset-0 grid-pattern opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-24 sm:pt-28">
        <div className="reveal flex flex-wrap items-center justify-between gap-3 sm:gap-5 border border-white/10 bg-black/35 px-4 sm:px-6 py-3 sm:py-4 font-mono-body uppercase tracking-[0.24em] text-[9px] sm:text-[10px] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_0_30px_rgba(245,158,11,0.08)] backdrop-blur-sm">
          <span className="flex items-center gap-2 text-white/90">
            <MapPin size={16} className="text-amber-500" />
            <span className="text-gray-200">{PROFILE.location}</span>
          </span>
          <span className="hidden sm:inline text-gray-200">
            <span className="text-amber-500">●</span> Available for opportunities
          </span>
          <span className="text-gray-300">© 2026 / v1.0</span>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-16 sm:pt-24 lg:pt-32 pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8">
          <div>
            <div className="reveal" style={{ animationDelay: '0.05s' }}>
              <p className="text-xs sm:text-sm font-mono-body uppercase tracking-[0.4em] text-amber-500 mb-6">
                // {PROFILE.title}
              </p>
            </div>

            <h1
              className="reveal font-display text-[14vw] sm:text-[10vw] lg:text-[8rem] xl:text-[9.5rem] font-bold uppercase tracking-tighter leading-[0.85] text-white"
              style={{ animationDelay: '0.15s' }}
            >
              {PROFILE.firstName}{' '}<br />
              <span className="text-amber-500">{PROFILE.lastName}.</span>
            </h1>

            <div className="reveal mt-12" style={{ animationDelay: '0.3s' }}>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 font-mono-body leading-relaxed max-w-[50rem]">
                <span className="text-amber-500">&gt;</span> Engineering{' '}
                <span className="text-white">AI-driven</span> products &amp; scalable full-stack systems — from{' '}
                <span className="text-white">RAG pipelines</span> to <span className="text-white">browser automation</span>.
              </p>
            </div>
          </div>

          <div className="flex -mt-6 translate-x-0 items-center justify-center md:-mt-12 lg:justify-end lg:-mt-40 lg:translate-x-10">
            <DegreeCap3DCard />
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gray-500 hover:text-amber-500 transition-colors"
      >
        <span className="text-[10px] font-mono-body uppercase tracking-[0.4em]">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  )
}
