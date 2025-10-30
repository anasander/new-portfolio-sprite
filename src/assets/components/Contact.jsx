import emailImg from '../sprites/sprites-ow/sprite-email.png'
import linkedinImg from '../sprites/sprites-ow/sprite-linkedin.png'
import githubImg from '../sprites/sprites-ow/sprite-github.png'
import behanceImg from '../sprites/sprites-ow/sprite-behance.png'
import gifAna from '../sprites/sprites-ana/sprite-ana-treasure.gif'
import gifMia from '../sprites/sprites-mia/sprite-mia-treasure.gif'

function Contact() {
    return (
        <>
            <div id="contact-bg">
                <div className="contact-container-text div-themed">
                    <h2 className="text-size-32">Você chegou ao final!</h2>
                    <div>
                        <p className="text-size-20">Parabéns! *clap* *clap*</p>
                        <a href="https://www.youtube.com/watch?v=l04_GGlr3BI" className="text-size-20 parabains" target="_blank" rel="noopener noreferrer">Parabéns! *clap* *clap*</a>
                    </div>
                    <p className="text-size-20">Agora que já conhece mais sobre mim, minha trajetória e minhas habilidades, pode entrar em contato através dos links abaixo:</p>
                </div>

                <div className="contact-container-links">
                    <a href="mailto: anagsander@gmail.com">
                        <img src={emailImg} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/ana-gabriela-sander-b2302019b/" target="_blank"
                    rel="noopener noreferrer">
                        <img src={linkedinImg} alt="" />
                    </a>
                    <a href="https://github.com/anasander" target="_blank"
                    rel="noopener noreferrer">
                        <img src={githubImg} alt="" />
                    </a>
                    <a href="https://www.behance.net/anasander" target="_blank"
                    rel="noopener noreferrer">
                        <img src={behanceImg} alt="" />
                    </a>
                </div>

                <div className="contact-container-img">
                    <img src={gifMia} alt="" />
                    <img src={gifAna} alt="" />
                </div>
            </div>

            <div className="separator-end"></div>
        </>
    )
}

export default Contact