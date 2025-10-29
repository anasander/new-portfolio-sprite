import About from './About';
import Projects from './Projects';
import Contact from './Contact';

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
      { threshold: 0.6 }
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
      img: "./src/assets/documents/origamid-img.png",
      title: "Origamid - Curso de Front-End e UX/UI Design (2022)",
      text: "Curso com foco em Front-End, incluíndo HTML, CSS, JavaScript, React, entre outros.",
      tags: ["HTML", "CSS", "JavaScript", "React", "UX/UI", "Tipografia"],
      link: "./src/assets/documents/front-end-full.pdf"
    },
    "ed-2": {
      img: "./src/assets/documents/google-certificate.png",
      title: "Curso Profissional Google UX/UI Design (2023)",
      text: "Curso profissional de UX/UI Design ofertado pelo Google em parceria com o Coursera.",
      tags: ["UX/UI", "Tipografia", "Design digital", "Wireframing", "Prototipagem"],
      link: "https://www.coursera.org/account/accomplishments/professional-cert/3NM2Z99TSDY9"
    },
    "ed-3": {
      img: "./src/assets/documents/scrum-certificate.png",
      title: "Certificado Profissional Scrum (2023)",
      text: "Certificado digital profissional em habilidades em  metodologia ágil Scrum.",
      tags: ["Scrum", "Gerenciamento de projetos", "Sprints", "Planejamento"],
      link: "https://www.credly.com/earner/earned/badge/96ba3695-c3cf-42c0-b665-8dbdc2b08185"
    },
    "ed-4": {
      img: "./src/assets/documents/toledo-img.png",
      title: "Análise e Desenvolvimento de Sistemas (2025-2027)",
      text: "Graduação em Análise e Desenvolvimento de Sistemas (EAD) pela Toledo Prudente Centro Universitário.",
      tags: ["Banco de Dados", "POO", "Design Thinking", "Engenharia de Software", "Algorítmos"],
      // link: "https://toledoprudente.edu.br/"
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

  const currentEd = activeEd ? edContent[activeEd] : null;

  return (
    <>
      <section id="hero">
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

      <section id="ed-background" className='scroll-to-section' ref={orangeSectionRef}>
        <div className="bg-left">
          <button className="ed ed-1" onClick={() => setActiveEd("ed-1")}></button>
          <button className="ed ed-2" onClick={() => setActiveEd("ed-2")}></button>
        </div>

        <div className="bg-center"></div>

        <div className="bg-right">
          <button className="ed ed-3" onClick={() => setActiveEd("ed-3")}></button>
          <button className="ed ed-4" onClick={() => setActiveEd("ed-4")}></button>
        </div>

        {currentEd && (
          <div className="ed-popup-overlay">
            <div className="ed-popup" ref={popupRef}>
              <button className="close-btn color-gray" onClick={() => setActiveEd(null)}>×</button>

              <img src={currentEd.img} alt={currentEd.title} />
              <h3>{currentEd.title}</h3>
              <p>{currentEd.text}</p>

              {currentEd.link && (
                <a
                  href={currentEd.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="popup-link"
                >
                  Acessar ↗
                </a>
              )}

              <div className="tags">
                {currentEd.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      <section id="projects" className='scroll-to-section'>
        <Projects />
      </section>

      <section id="contact" className='scroll-to-section'>
        <Contact />
      </section>

      <div id="character-container" ref={characterContainerRef}>
        <div id="player" className="character" ref={playerRef}></div>
        <div id="cat" className="character" ref={catRef}></div>
      </div>
    </>
  )
}

export default Sections
