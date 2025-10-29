function Projects() {
    const projects = {
        "p-9": {
            img: "./src/assets/img/jogo-investidor-img.png",
            title: "Jogo do Investidor - Tindin (2025)",
            sub: "Implementação de novo design para o jogo, incluindo menus, layouts, interfaces e landing page, seguindo o padrão de projeto do Design System.",
            tags: ["HTML", "CSS", "JavaScript", "React", "UX/UI", "Tipografia"],
            link: "https://www.ojogodoinvestidor.com.br/index.html"
        },
        "p-8": {
            img: "./src/assets/img/tindin-metaverso-img.png",
            title: "Metaverso Educacional - Tindin (2024-2025)",
            sub: "Implementação de novo design para o jogo, incluindo menus, layouts e interfaces, seguindo o padrão de projeto do Design System.",
            tags: ["HTML", "CSS", "JavaScript", "React", "UX/UI", "Tipografia"],
            link: "https://app.tindin.com.br/game"
        },
        "p-7": {
            img: "./src/assets/img/literama-img.png",
            title: "Literama - Tindin (2024-2025)",
            sub: "Implementação de novo design para o jogo, incluindo menus, layouts e interfaces, seguindo o padrão de projeto do Design System.",
            tags: ["HTML", "CSS", "JavaScript", "React", "UX/UI", "Tipografia"],
            link: "https://literama.tindin.com.br/game"
        },
        "p-6": {
            img: "./src/assets/img/adopet-img.png",
            title: "AdoPet (2023)",
            sub: "Wireframes e protótipos low/hi fidelity de um site/app de adoção de animais.",
            tags: ["UX/UI", "Tipografia", "Acessibilidade"],
            link: "https://www.figma.com/proto/Bx4F2mLDuNmL1VhcCd89Mx/adopet?page-id=104%3A78&type=design&node-id=104-1523&viewport=299%2C110%2C0.04&t=V8wjQuzEGLRv9scM-1&scaling=scale-down-width&starting-point-node-id=104%3A1523"
        },
        "p-5": {
            img: "./src/assets/img/lunar-img.png",
            title: "Lunar (2023)",
            sub: "Wireframes e protótipos low/hi fidelity de um site/app da primeira colônia lunar da história.",
            tags: ["UX/UI", "Tipografia", "Acessibilidade"],
            link: "https://www.figma.com/proto/PquDgnCeXqkwkoapyUqUYn/Lunar?page-id=30%3A2&type=design&node-id=30-4&viewport=241%2C185%2C0.08&t=G6HPmGEGKlLwD2y7-1&scaling=scale-down-width&starting-point-node-id=30%3A4"
        },
        "p-4": {
            img: "./src/assets/img/dinozoo-img.png",
            title: "DinoZoo (2023)",
            sub: "Wireframes e protótipos low/hi fidelity de um site/app de um zoológico de dinossauros.",
            tags: ["UX/UI", "Tipografia", "Acessibilidade"],
            link: "https://www.figma.com/proto/2bWmKlSFxdfkMgD9h3LxNB/dinozoo?page-id=328%3A2&type=design&node-id=345-153&viewport=571%2C222%2C0.02&t=6FiKoJVq8KUBMTmy-1&scaling=scale-down-width&starting-point-node-id=345%3A153"
        },
        "p-3": {
            img: "./src/assets/img/rule-of-rose-img.png",
            title: "Rule of Rose (2023)",
            sub: "Wireframes e protótipos low/hi fidelity de um site/app do jogo 'Rule of Rose' (2006).",
            tags: ["UX/UI", "Tipografia", "Acessibilidade"],
            link: "https://www.figma.com/proto/lk1fKIHUfmNZtPmCfc6Fwb/RoR?page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2&scaling=scale-down-width&t=yFwFW0ZWBiW6ZWZU-1s"
        },
        "p-2": {
            img: "./src/assets/img/iguana-games-img.png",
            title: "Iguana Games (2022)",
            sub: "Um site ficcional de uma empresa de venda de jogos de videogame e seus acessórios.",
            tags: ["HTML", "CSS", "JavaScript", "UX/UI", "Tipografia"],
            link: "https://github.com/anasander/iguana-games"
        },
        "p-1": {
            img: "./src/assets/img/hi-fi-rush-img.png",
            title: "Iguana Games (2022)",
            sub: "Um site ficcional da banda 'Hi-Fi Rush' do jogo de mesmo nome.",
            tags: ["HTML", "CSS", "UX/UI", "Tipografia"],
            link: "https://github.com/anasander/hi-fi-rush"
        },
    }

    return (
        <>
        <div className='bg-blue'>
            <div className="div-themed text-size-20">
                <h3>Projetos</h3>
            </div>
        </div>
        <div className='project-list'>
            <div className="project-list-limit">
                {Object.values(projects).map((project, index) => (
                <a key={index} href={project.link} className="project-item" target="_blank" rel="noopener noreferrer">
                    <img src={project.img} alt={project.title} />
                    <div className="project-text-content">
                        <h2 className="text-size-20">{project.title}</h2>
                        <p className="text-size-16">{project.sub}</p>
                        <div className="project-tags">
                            {project.tags.map((tag) => (
                            <span className="tag-item" key={tag}>{tag}</span>
                        ))}
                        </div>
                    </div>
                </a>
                ))}
            </div>
        </div>
        </>
    )
}

export default Projects