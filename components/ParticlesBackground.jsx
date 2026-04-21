import { useCallback, useEffect, useState } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import styles from '../styles/ParticlesBackground.module.css'

export default function ParticlesBackground() {
  const [particleColor, setParticleColor] = useState('rgba(255,255,255,0.6)')

  useEffect(() => {
    const color = getComputedStyle(document.documentElement)
      .getPropertyValue('--accent-color')
      .trim()
    if (color) setParticleColor(color)
  }, [])

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  return (
    <Particles
      className={styles.particles}
      init={particlesInit}
      options={{
        fpsLimit: 40,
        particles: {
          number: { value: 90, density: { enable: true, area: 900 } },
          color: { value: particleColor },
          opacity: {
            value: 0.25,
            random: { enable: true, minimumValue: 0.1 }
          },
          size: { value: { min: 1, max: 2.5 } },
          links: {
            enable: true,
            distance: 130,
            color: particleColor,
            opacity: 0.12,
            width: 1
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: 'none',
            outModes: { default: 'bounce' }
          }
        },
        interactivity: {
          events: {
            onHover: { enable: false },
            onClick: { enable: false }
          }
        },
        detectRetina: true
      }}
    />
  )
}
