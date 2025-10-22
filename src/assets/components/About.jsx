import { useState, useRef, useEffect } from "react";

export default function Pokedevice() {
  const [character, setCharacter] = useState(null);
  const textRef = useRef(null);

  const data = {
    ana: {
      image: "url('./src/assets/img/photo-ana.jpg')",
      text: "Olá, eu sou a Ana! Sou uma desenvolvedora criativa e adoro participar de projetos incríveis usando minhas diversas habilidades em Web Design, UX/UI Design e Front-End. Games são minha paixão, e meu jogo favorito é 'Shadow of the Colossus'."
    },
    mia: {
      image: "url('./src/assets/img/photo-mia.jpg')",
      text: "Mia é a minha parceira felina, fofa e medrosa em proporções iguais, que ilumina a vida de todos ao seu redor. Adora falar (miar) e também devorar derivados lácteos."
    }
  };

  useEffect(() => {
    if (textRef.current) {
      textRef.current.scrollTop = 0;
    }
  }, [character]);

  return (
    <section>
      <div id="red-exterior">
        <div id="top-area">
          <div id="top-area-1">
            <div id="btn-big">
              <div id="btn-big-inside">
                <div id="btn-big-shine"></div>
              </div>
            </div>
            <div id="btn-small-1"></div>
            <div id="btn-small-2"></div>
            <div id="btn-small-3"></div>
          </div>
          <div id="top-area-2"></div>
          <div id="top-area-3"></div>
        </div>

        <div id="white-label-external">
          <div id="white-label">
            <div id="small-btns">
              <div id="btn-smaller"></div>
              <div id="btn-smaller"></div>
            </div>
            <div id="image-area">
              <div
                id="image-display"
                style={{
                  backgroundImage: character
                    ? data[character].image
                    : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              ></div>
            </div>
            <div id="details-label">
              <div id="btn-small-1"></div>
              <div id="sound-external"></div>
            </div>
          </div>
        </div>

        <div id="content-area">
          <div id="area-buttons">
            <button id="btn-1" onClick={() => setCharacter("ana")}>Ana</button>
            <button id="btn-2" onClick={() => setCharacter("mia")}>Mia</button>
          </div>
          <div id="area-text">
            <p id="text-description" ref={textRef}>
              {character
                ? data[character].text
                : "Selecione um personagem para ver mais detalhes."}
            </p>
          </div>
        </div>
      </div>

      <div id="column-exterior">
        <div id="detail-column"></div>
        <div id="detail-column-extra-1"></div>
        <div id="detail-column-extra-2"></div>
      </div>
    </section>
  );
}