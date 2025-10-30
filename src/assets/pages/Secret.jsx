import Header from '../components/Header'
import { useState, useEffect, useRef } from 'react'
import ouranImg from '../img/ouran-img.png'

function Secret() {
  const secretProjects = {
    "sp-10": {
      date: "09/2022",
      img: ouranImg,
      title: ".",
      sub: ".",
      link: "https://www.ojogodoinvestidor.com.br/index.html"
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
