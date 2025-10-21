import { useEffect, useRef } from 'react'

function Sections() {
  const playerRef = useRef(null)
  const catRef = useRef(null)
  const orangeSectionRef = useRef(null)
  const characterContainerRef = useRef(null)

  useEffect(() => {
    const player = playerRef.current
    const cat = catRef.current
    const orangeSection = orangeSectionRef.current
    const characterContainer = characterContainerRef.current

    if (!player || !cat || !orangeSection || !characterContainer) return

    const sprites = {
      player: {
        idle_f: "url('./src/assets/sprites/sprites-ana/sprite-ana-idle-f.png')",
        idle_b: "url('./src/assets/sprites/sprites-ana/sprite-ana-idle-b.png')",
        walk_f: [
          "url('./src/assets/sprites/sprites-ana/sprite-ana-walk-1f.png')",
          "url('./src/assets/sprites/sprites-ana/sprite-ana-walk-2f.png')",
        ],
        walk_b: [
          "url('./src/assets/sprites/sprites-ana/sprite-ana-walk-1b.png')",
          "url('./src/assets/sprites/sprites-ana/sprite-ana-walk-2b.png')",
        ],
      },
      cat: {
        idle_f: "url('./src/assets/sprites/sprites-mia/sprite-mia-1f.png')",
        idle_b: "url('./src/assets/sprites/sprites-mia/sprite-mia-1b.png')",
        walk_f: [
          "url('./src/assets/sprites/sprites-mia/sprite-mia-1f.png')",
          "url('./src/assets/sprites/sprites-mia/sprite-mia-2f.png')",
        ],
        walk_b: [
          "url('./src/assets/sprites/sprites-mia/sprite-mia-1b.png')",
          "url('./src/assets/sprites/sprites-mia/sprite-mia-2b.png')",
        ],
      },
    }

    let lastScrollTop = 0
    let lastScrollDirection = 'down'
    let isOrangeSectionVisible = false
    let animationInterval = null
    let currentFrame = 0
    let scrollTimeout = null

    function setIdleSprites() {
      if (lastScrollDirection === 'down') {
        player.style.backgroundImage = sprites.player.idle_f
        cat.style.backgroundImage = sprites.cat.idle_f
        characterContainer.style.flexDirection = 'column-reverse'
      } else {
        player.style.backgroundImage = sprites.player.idle_b
        cat.style.backgroundImage = sprites.cat.idle_b
        characterContainer.style.flexDirection = 'column'
      }
    }

    function startWalkingAnimation() {
      if (animationInterval) return
      animationInterval = setInterval(() => {
        currentFrame = 1 - currentFrame
        const directionSprites = lastScrollDirection === 'down' ? 'walk_f' : 'walk_b'
        player.style.backgroundImage = sprites.player[directionSprites][currentFrame]
        cat.style.backgroundImage = sprites.cat[directionSprites][currentFrame]
      }, 300)
    }

    function stopWalkingAnimation() {
      clearInterval(animationInterval)
      animationInterval = null
      setIdleSprites()
    }

    function handleScroll() {
      const st = window.pageYOffset || document.documentElement.scrollTop
      const newDirection = st > lastScrollTop ? 'down' : 'up'

      if (newDirection !== lastScrollDirection) {
        lastScrollDirection = newDirection
        setIdleSprites()
        if (isOrangeSectionVisible) startWalkingAnimation()
      } else {
        lastScrollDirection = newDirection
      }

      lastScrollTop = st <= 0 ? 0 : st

      if (isOrangeSectionVisible) {
        startWalkingAnimation()
        const rect = orangeSection.getBoundingClientRect()
        const scrollProgress = -rect.top / rect.height
        const moveY = (scrollProgress - 0.5) * 100
        characterContainer.style.transform = `translate(-50%, calc(-50% + ${moveY}px))`

        characterContainer.style.flexDirection =
          lastScrollDirection === 'down' ? 'column-reverse' : 'column'
      }

      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        if (isOrangeSectionVisible) stopWalkingAnimation()
      }, 150)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isOrangeSectionVisible = entry.isIntersecting
          if (isOrangeSectionVisible) {
            characterContainer.style.opacity = 1
            setIdleSprites()
          } else {
            characterContainer.style.opacity = 0
            stopWalkingAnimation()
          }
        })
      },
      { threshold: 0.4 }
    )

    observer.observe(orangeSection)
    window.addEventListener('scroll', handleScroll)
    setIdleSprites()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
      clearInterval(animationInterval)
      clearTimeout(scrollTimeout)
    }
  }, [])

  return (
    <>
      <section id="about" className="section">
        <div className='about-titles'>
          <h1 className='font-primary text-size-96'>Ana Sander</h1>
          <div className='about-exp text-size-32'>
            <p>Web Designer | UX/UI Designer</p>
            <p>Front-End Developer</p>
          </div>
        </div>

        <div className='about-images'>
          <img className='sprite-ana-full' src="./src/assets/sprites/sprites-mia/sprite-mia-new.png" alt="" />
          <img className='sprite-mia-full' src="./src/assets/sprites/sprites-ana/sprite-ana-full.png" alt="" />
        </div>
      </section>

      <div className='extra-bg section'></div>

      <section id="ed-background" className="section" ref={orangeSectionRef}>
        Seção 2 (Laranja)
      </section>

      <section id="projects" className="section">Seção 3 (Azul)</section>

      <div id="character-container" ref={characterContainerRef}>
        <div id="player" className="character" ref={playerRef}></div>
        <div id="cat" className="character" ref={catRef}></div>
      </div>
    </>
  )
}

export default Sections
