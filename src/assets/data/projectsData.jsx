import jogoInvestImg from '../img/jogo-investidor-img.png'
import metaversoImg from '../img/tindin-metaverso-img.png'
import litermaImg from '../img/literama-img.png'
import seafoodBoilerImg from '../img/seafood-boiler-img.png'
import adopetImg from '../img/adopet-img.png'
import lunarImg from '../img/lunar-img.png'
import dinozooImg from '../img/dinozoo-img.png'
import ruleOfRoseImg from '../img/rule-of-rose-img.png'
import hifirushImg from '../img/hi-fi-rush-img.png'
import iguanagamesImg from '../img/iguana-games-img.png'
// import stationsAppImg from '../img/stations-app-img.png'
import dsImg from '../img/ds-img.png'
import trackingImg from '../img/tracking-img.png'

export const projectsData = {
    "p-12": {
        img: trackingImg,
        title: "Implementação de tracking no SuperApp - Stations (2026)",
        sub: "Estruturar, planejar e documentar um sistema de tracking escalável para mapear comportamentos, identificar gargalos de usabilidade e guiar a evolução contínua do produto.",
        tags: ["Data-driven UX", "Product Design", "UX/UI", "Design System"],
        link: "https://stations.cloud/",
        hasDetailedCase: true,
        caseStudy: {
            introduction: "Em um ecossistema de produto dinâmico, tomar decisões baseadas apenas em intuição é um risco alto. Identifiquei que a nossa estrutura atual possuía um déficit crítico de dados: não sabíamos exatamente onde os usuários clicavam, quais fluxos abandonavam ou quais eram as suas preferências reais. O desafio era transformar esse cenário de \"pontos cegos\" em um ambiente mensurável e orientado a resultados.",
            process: [
            {
                label: "Auditoria de Produto",
                text: "Realizei um mapeamento minucioso de todos os fluxos críticos, telas e componentes interativos que precisavam ser monitorados."
            },
            {
                label: "Alinhamento Estratégico",
                text: "Trabalhei em conjunto com Product Owners para definir quais perguntas de negócio precisávamos responder com esses dados (taxas de conversão, engajamento com novas features, etc)."
            },
            {
                label: "Arquitetura de Dados e Taxonomia",
                text: "Participei da criação de um padrão de nomenclatura claro, consistente e escalável para os eventos, garantindo que qualquer pessoa do time pudesse ler e interpretar os relatórios no futuro."
            },
            {
                label: "Handoff e Colaboração Técnica",
                text: "Desenvolvi uma documentação detalhada e amigável para o time de Desenvolvimento, especificando os gatilhos, parâmetros e propriedades de cada evento para garantir uma implementação sem atritos."
            }
            ],
            results: [
            {
                label: "Visibilidade Massiva",
                text: "O planejamento e a execução elevaram a cobertura de tracking do aplicativo de menos de 10% para mais de 85%."
            },
            {
                label: "Evolução Centrada no Usuário",
                text: "Com a nova estrutura, passamos a entender de forma clara as preferências da nossa base, o que nos permitiu priorizar melhorias, corrigir pontos de fricção e churn e tornar o app significativamente melhor."
            },
            {
                label: "Maturidade de Produto",
                text: "O projeto consolidou uma ponte sólida entre Design, Produto e Engenharia, inserindo a cultura de Data-Driven UX no dia a dia da operação."
            }
            ]
        }
    },
    "p-11": {
        img: dsImg,
        title: "Manutenção do Design System - Stations (2026)",
        sub: "Criação de novos componentes robustos, arquitetura baseada em propriedades escaláveis e implementação de um fluxo de governança para manutenção do Design System.",
        tags: ["Product Design", "UX/UI", "Design System"],
        link: "https://stations.cloud/",
        hasDetailedCase: true,
        caseStudy: {
            introduction: "Gerir interfaces para produtos white-label exige um equilíbrio delicado entre flexibilidade e controle. O principal desafio era a necessidade de criar novos componentes que respondessem a novas exigências do produto (como fluxos complexos de agendamento e painéis de controle), assegurando simultaneamente que qualquer alteração global fosse segura e não alterasse a percepção e valor da marca pelo cliente.",
            process: [
            {
                label: "Criação de Componentes Resilientes",
                text: "Desenvolvi novos componentes estruturais utilizando as melhores práticas do Figma (Auto Layout avançado, Component Properties e Variants estruturadas). Cada componente foi desenhado pensando na flexibilidade de conteúdo."
            },
            {
                label: "Arquitetura e Tokenização para Multi-tenancy",
                text: "Garanti que a biblioteca de estilos respeitasse uma lógica rigorosa de Design Tokens. Isto permitiu isolar as fundações estruturais (paddings, border-radius, gaps) das propriedades de marca (cores, tipografia), assegurando que o produto pudesse ser vestido com diferentes identidades visuais de forma automatizada e segura."
            },
            {
                label: "Documentação e Handoff Técnico",
                text: "Para além do desenho vetorial, estruturei uma documentação viva (live documentation) para cada componente. Esta documentação incluía regras de anatomia e diretrizes de comportamento de UX."
            },
            {
                label: "Processo de Governança e Tutoria",
                text: "Atuei como defensora dos padrões do sistema, estabelecendo um fluxo de revisão (design review) para novas propostas. Quando uma nova funcionalidade exigia um padrão visual inédito, avaliava se a necessidade justificava um novo componente global ou se era possível resolver com o ecossistema existente, protegendo o DS contra o crescimento inflacionado e desordenado."
            }
            ],
            results: [
            {
                label: "Escalabilidade Segura",
                text: "A nova arquitetura reduziu drasticamente o tempo necessário para implementar novos clientes na modalidade white-label, uma vez que os componentes estavam preparados para absorver novas variáveis sem quebrar o layout."
            },
            {
                label: "Eficiência Produtiva (Time-to-Market)",
                text: "A introdução dos novos componentes validados e documentados acelerou o processo de prototipagem da equipe de design e diminuiu o retrabalho na fase de desenvolvimento front-end."
            },
            {
                label: "Linguagem Unificada",
                text: "Alinhou-se a comunicação entre Design e Engenharia através de uma única fonte de verdade (Single Source of Truth), mitigando erros de implementação e garantindo uma experiência fluida e coesa em todas as camadas do ecossistema."
            }
            ]
        }
    },
    "p-10": {
        img: jogoInvestImg,
        title: "Jogo do Investidor - Tindin (2025)",
        sub: "Implementação de novo design para o jogo, incluindo menus, layouts, interfaces e landing page, seguindo o padrão de projeto do Design System.",
        tags: ["HTML", "CSS", "JavaScript", "React", "UX/UI", "Tipografia"],
        link: "https://www.ojogodoinvestidor.com.br/index.html"
    },
    "p-9": {
        img: metaversoImg,
        title: "Metaverso Educacional - Tindin (2024-2025)",
        sub: "Implementação de novo design para o jogo, incluindo menus, layouts e interfaces, seguindo o padrão de projeto do Design System.",
        tags: ["HTML", "CSS", "JavaScript", "React", "UX/UI", "Tipografia"],
        link: "https://app.tindin.com.br/game"
    },
    "p-8": {
        img: litermaImg,
        title: "Literama - Tindin (2024-2025)",
        sub: "Implementação de novo design para o jogo, incluindo menus, layouts e interfaces, seguindo o padrão de projeto do Design System.",
        tags: ["HTML", "CSS", "JavaScript", "React", "UX/UI", "Tipografia"],
        link: "https://literama.tindin.com.br/game"
    },
    "p-7": {
        img: seafoodBoilerImg,
        title: "Seafood Boiler (2025)",
        sub: "Criação de projeto desenvolvido utilizando Figma + WebFlow.",
        tags: ["WebFlow", "UX/UI", "Tipografia", "Acessibilidade"],
        link: "https://preview.webflow.com/preview/seafood-boiler-0a3c5e?utm_medium=preview_link&utm_source=designer&utm_content=seafood-boiler-0a3c5e&preview=dbad80b47668fe095266a7bab79a4255&workflow=sitePreview"
    },
    "p-6": {
        img: adopetImg,
        title: "Adopet (2023)",
        sub: "Wireframes e protótipos low/hi fidelity de um site/app de adoção de animais.",
        tags: ["UX/UI", "Tipografia", "Acessibilidade"],
        link: "https://www.figma.com/proto/Bx4F2mLDuNmL1VhcCd89Mx/adopet?page-id=104%3A78&type=design&node-id=104-1523&viewport=299%2C110%2C0.04&t=V8wjQuzEGLRv9scM-1&scaling=scale-down-width&starting-point-node-id=104%3A1523"
    },
    "p-5": {
        img: lunarImg,
        title: "Lunar (2023)",
        sub: "Wireframes e protótipos low/hi fidelity de um site/app da primeira colônia lunar da história.",
        tags: ["UX/UI", "Tipografia", "Acessibilidade"],
        link: "https://www.figma.com/proto/PquDgnCeXqkwkoapyUqUYn/Lunar?page-id=30%3A2&type=design&node-id=30-4&viewport=241%2C185%2C0.08&t=G6HPmGEGKlLwD2y7-1&scaling=scale-down-width&starting-point-node-id=30%3A4"
    },
    "p-4": {
        img: dinozooImg,
        title: "DinoZoo (2023)",
        sub: "Wireframes e protótipos low/hi fidelity de um site/app de um zoológico de dinossauros.",
        tags: ["UX/UI", "Tipografia", "Acessibilidade"],
        link: "https://www.figma.com/proto/2bWmKlSFxdfkMgD9h3LxNB/dinozoo?page-id=328%3A2&type=design&node-id=345-153&viewport=571%2C222%2C0.02&t=6FiKoJVq8KUBMTmy-1&scaling=scale-down-width&starting-point-node-id=345%3A153"
    },
    "p-3": {
        img: ruleOfRoseImg,
        title: "Rule of Rose (2023)",
        sub: "Wireframes e protótipos low/hi fidelity de um site/app do jogo 'Rule of Rose' (2006).",
        tags: ["UX/UI", "Tipografia", "Acessibilidade"],
        link: "https://www.figma.com/proto/lk1fKIHUfmNZtPmCfc6Fwb/RoR?page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2&scaling=scale-down-width&t=yFwFW0ZWBiW6ZWZU-1s"
    },
    "p-2": {
        img: hifirushImg,
        title: "Hi-Fi Rush (2023)",
        sub: "Um site ficcional da banda 'Hi-Fi Rush' do jogo de mesmo nome.",
        tags: ["HTML", "CSS", "UX/UI", "Tipografia"],
        link: "https://github.com/anasander/hi-fi-rush"
    },
    "p-1": {
        img: iguanagamesImg,
        title: "Iguana Games (2022)",
        sub: "Um site ficcional de uma empresa de venda de jogos de videogame e seus acessórios.",
        tags: ["HTML", "CSS", "JavaScript", "UX/UI", "Tipografia"],
        link: "https://github.com/anasander/iguana-games"
    }
};