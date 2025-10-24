import  About from './About';

import { useState, useEffect, useRef } from 'react'

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

  const [activeEd, setActiveEd] = useState(null);
  const popupRef = useRef(null);

  const edContent = {
    "ed-1": {
      img: "https://via.placeholder.com/200x120.png?text=Imagem+1",
      title: "Título 1",
      text: "Este é o conteúdo referente ao botão 1.",
      tags: ["React", "CSS", "Interatividade"],
    },
    "ed-2": {
      img: "https://via.placeholder.com/200x120.png?text=Imagem+2",
      title: "Título 2",
      text: "Conteúdo diferente para o botão 2.",
      tags: ["HTML", "UX", "Componentes"],
    },
    "ed-3": {
      img: "https://via.placeholder.com/200x120.png?text=Imagem+3",
      title: "Título 3",
      text: "Texto relacionado ao botão 3.",
      tags: ["JavaScript", "Hooks", "Eventos"],
    },
  };

  useEffect(() => {
    if (activeEd) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeEd]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setActiveEd(null);
      }
    }

    if (activeEd) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeEd]);

  return (
    <>
      <section id="hero" className="section">
        <div className='hero-titles'>
          <h1 className='font-primary text-size-96'>Ana Sander</h1>
          <div className='hero-exp text-size-32'>
            <p>Web Designer | UX/UI Designer</p>
            <p>Front-End Developer</p>
          </div>
        </div>

        <div className='hero-images'>
          <img className='sprite-full' src="./src/assets/sprites/sprites-mia/sprite-mia-full-1.png" alt="" />
          <img className='sprite-full' src="./src/assets/sprites/sprites-ana/sprite-ana-full-1.png" alt="" />
        </div>
      </section>

      <div className='extra-bg'>
        <div id='about' className='hero-desc scroll-to-section'>
          <h2 className='text-size-32'>Sobre</h2>
          <p className='text-size-20'>👋 Olá!</p>
          <p className='text-size-20'>Seja bem-vindo(a) ao meu laboratório digital, um espaço de descobertas de design e código!</p>
          <p className='text-size-20'>Eu sou <span className='bold'>Ana Sander</span>, <span className='bold'>Web Designer e UX/UI Designer</span> com foco em desenvolvimento front-end. Acredito que cada projeto começa com curiosidade, cresce com estratégia e evolui com dedicação.</p>
          <p className='text-size-20'>Utilizo <span className='bold'>HTML, CSS, JavaScript, Python, Scrum e React</span> para criar experiências que unem funcionalidade, estética e propósito. Meu objetivo é transformar ideias em interfaces envolventes, acessíveis e cheias de personalidade. 😎</p>
          <p className='text-size-20'>O mundo da web é vasto e cheio de possibilidades…</p>
          <p className='text-size-20'>Está pronto(a) para fazer parte dessa jornada? 👩‍🚀🚀</p>
        </div>
        <About />
      </div>

      <div id='bg-separator'>
        <div>
          <h2 className='text-size-32'>Jornada da Formação</h2>
        </div>
      </div>

      <section id="ed-background" className="section" ref={orangeSectionRef}>
      <div className="bg-left">
        <button className="ed ed-1" onClick={() => setActiveEd("ed-1")}></button>
        <button className="ed ed-2" onClick={() => setActiveEd("ed-2")}></button>
        <button className="ed ed-3" onClick={() => setActiveEd("ed-3")}></button>
      </div>

      <div className="bg-center"></div>

      <div className="bg-right">
        <button className="ed ed-1" onClick={() => setActiveEd("ed-1")}></button>
        <button className="ed ed-2" onClick={() => setActiveEd("ed-2")}></button>
        <button className="ed ed-3" onClick={() => setActiveEd("ed-3")}></button>
      </div>

      {activeEd && (
        <div className="ed-popup-overlay">
          <div className="ed-popup" ref={popupRef}>
            <button className="close-btn-popup" onClick={() => setActiveEd(null)}>×</button>
            <img src={edContent[activeEd].img} alt={edContent[activeEd].title} />
            <h3>{edContent[activeEd].title}</h3>
            <p>{edContent[activeEd].text}</p>
            <div className="tags">
              {edContent[activeEd].tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>

      <section id="projects" className="section">Seção 3 (Azul)</section>

      <section id="contact" className="section">Seção 4 (Verde)</section>

      <div id="character-container" ref={characterContainerRef}>
        <div id="player" className="character" ref={playerRef}></div>
        <div id="cat" className="character" ref={catRef}></div>
      </div>
    </>
  )
}

export default Sections
