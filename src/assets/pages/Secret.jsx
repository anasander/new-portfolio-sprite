import Header from '../components/Header'
import { useState, useEffect, useRef } from 'react'
import ouranImg from '../img/ouran-img.jpg'
import gamedevImg from '../img/projeto-gamedev-img.jpg'
import DDChar from '../img/ddchar-img.jpg'
import totofamilyImg from '../img/totofamily-img.jpg'
import riseOfPImg from '../img/lop-rop-img.jpg'
import romeoImg from '../img/romeo-img.jpg'
import smolPImg from '../img/smol-p-img.jpg'
import carloImg from '../img/carlo-img.jpg'
import otkwImg from '../img/otkw-img.jpg'
import pMmkyuImg from '../img/p-mmkyu-img.jpg'

function Secret() {
  const secretProjects = {
    "sp-10": {
      date: "04/2024",
      img: pMmkyuImg,
      title: "#DigitalArt",
      sub: "Friends",
      link: "https://www.instagram.com/p/C6aEdx8R14N/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    "sp-9": {
      date: "12/2023",
      img: otkwImg,
      title: "#DigitalArt",
      sub: "Over the Krat Wall",
      link: "https://www.instagram.com/p/C0YFOmCMlpn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    "sp-8": {
      date: "11/2023",
      img: carloImg,
      title: "#DigitalArt",
      sub: "[Real Boy], Carlo",
      link: "https://www.instagram.com/p/Cz1MJyBuy1s/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    "sp-7": {
      date: "11/2023",
      img: smolPImg,
      title: "#DigitalArt",
      sub: "Smol P",
      link: "https://www.instagram.com/p/Czyews1OSJP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    "sp-6": {
      date: "11/2023",
      img: romeoImg,
      title: "#DigitalArt",
      sub: "Romeo, a boy from a memory",
      link: "https://www.instagram.com/p/CzweVvrxhrm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    "sp-5": {
      date: "10/2023",
      img: riseOfPImg,
      title: "#DigitalArt",
      sub: "Rise of P",
      link: "https://www.instagram.com/p/CyeXtkKR8gc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    "sp-4": {
      date: "03/2023",
      img: totofamilyImg,
      title: "#PixelArt",
      sub: "Totofamily",
      link: "https://www.instagram.com/p/CqQT3LzLfvK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    "sp-3": {
      date: "01/2023",
      img: DDChar,
      title: "#PixelArt",
      sub: "Tiefling Druida"
    },
    "sp-2": {
      date: "12/2022",
      img: gamedevImg,
      title: "#GameDev, #PixelArt",
      sub: "Projeto Aseprite",
      link: "https://www.figma.com/design/vSQqQx8uyPtblJBVS9QUo3/Game-Concept?node-id=0-1&t=hA176OR5NNgXMggq-1"
    },
    "sp-1": {
      date: "09/2022",
      img: ouranImg,
      title: "#DigitalArt",
      sub: "Ouran x ELLE"
    }
  }

  const [activePj, setActivePj] = useState(null);
  const popupRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = activePj ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activePj]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setActivePj(null);
      }
    }
    if (activePj) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activePj]);

  const currentPj = activePj ? secretProjects[activePj] : null;
  const entries = Object.entries(secretProjects);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />

      <section id='secret-bg'>
        <div className='secret-titles div-themed'>
          <h1 className='font-primary text-size-46'>Página Secreta</h1>
          <p className='text-size-20 bold'>Parabéns, você encontrou o baú escondido!</p>
        </div>
        <h3 className='text-size-20'>Sinta-se à vontade para conhecer mais sobre meus projetos pessoais aqui!</h3>

        <div id='secret-projects-list'>
          {entries.map(([id, project]) => (
            <button key={id} onClick={() => setActivePj(id)}>
              <div className='secret-project'>
                <p className='text-size-16'>{project.date}</p>
                <img src={project.img} alt={project.title || ''} />
                <div>
                  <p className='bold text-size-16'>{project.title}</p>
                  <p className='text-size-14'>{project.sub}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {currentPj && (
          <div className="pj-popup-overlay">
            <div className="pj-popup" ref={popupRef}>
                <button className="close-btn color-gray" onClick={() => setActivePj(null)}>×</button>
            
                <img src={currentPj.img} alt={currentPj.title} />
                {currentPj.link && (
                <a
                    href={currentPj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="popup-link"
                >
                    Acessar ↗
                </a>
              )}
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Secret;
