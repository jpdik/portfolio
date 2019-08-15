const languageData = {
    br: {
        portugueseText: "Português",
        englishText: "Inglês",

        hi: "Olá",
        iam: "Eu sou",
        myname: "João Paulo de Melo",

        principalFunctions: ["Desenvolvedor FULL-STACK"],
        aboutTitle: "Sobre",
        aboutData: "Tenho contribuído para minha instituição constantemente com diversos projetos e pesquisas e também auxilio os alunos dentro da instituição. Fui monitor de atividades complementares no mais recente laboratório de robótica e inovação tecnológica elaborando protótipos que utilizam Arduino e Lego. Já desenvolvo aplicativos, sistemas e serviços para diversas pessoas sendo autônomo e tenho amplo conhecimento em diferentes tecnologias Web.",

        infoTitle: "Informações",
        infoData: {
            "Nome": "João Paulo de Melo",
            "Idade": `${new Date('2019', '09' - 1, '11', '00', '00', '00') <= new Date() ? new Date().getFullYear()-1995 : new Date().getFullYear()-1996} anos`,
            "E-mail": "jpmdik@gmail.com",
            "Cidade, Estado": "Barbacena, MG"
        },

        skillsTitle: "Principais Habilidades",

        projectsTitle: "Projetos e Currículo",

        moreInfoTitle: "Mais Informações",

        systemsTitle: "Sistemas e bancos de dados",

        languagesTitle: "Línguas",
        languagesData: {
            "Português": 100,
            "Inglês": 65
        },

        personalityTitle: "Personalidade",
        personalityData: [
            "Dinâmico",
            "Organizado",
            "Trabalho em equipe"
        ],

        interestsTitle: "Interesses",
        interestsData: [
            "Música",
            "Filmes",
            "Notícias"
        ],

        contactTitle: "Contato",
        curriculumTitle: "Meu CV",

        pExperienceTitle: "Experiência Profissional",
        pExperienceData: [{
            title: "Vínculo: Programa de Monitoria, Enquadramento Funcional: Monitor ou Monitoria, Carga horária: 20",
            date: "2017 - 2017",
            description: "Monitoria de atividades complementares das disciplinas do Curso de Tecnologia em Sistemas para Internet no Laboratório de Inovação e Robótica, utilizando kits Arduino e Lego."
        }, ],
        awardsTitle: "Minhas Premiações",
        awardsData: [{
                place: "gold",
                title: "1º Lugar no Hackathon BNDES Negócios - Campus Party MG",
                date: "11/2018",
                company: "BNDES",
                theme: "Tema: Como alavancar os negócios do BNDES através das redes sociais?",
                description: "Nossa equipe desenvolveu o Chatbot Bob (Bot de operações bancárias) que trouxesse as ferramentas da BNDES de forma interativa ao usuário, que, além de trazer a comodidade, trazia facilidade ao usuário."
            },
            {
                place: "bronze",
                title: "3º Lugar no Hackathon BNDES Transparente - Campus Party MG",
                date: "11/2018",
                company: "BNDES",
                theme: "Tema: Identificar e responder fake news relacionadas ao BNDES.",
                description: "Criamos um sistema através do uso de machine learning, que detectava se as notícias que fossem informadas eram Fake ou não através de um cruzamento de dados junto com a análise de contextos, no qual eram atribuídos pesos, e o sistema nos dava um veredito sobre a notícia. O sistema também poderia ir aprendendo com o tempo, desde que isso fosse feito pelos responsáveis do sistema."
            },
            {
                place: "gold",
                title: "1º lugar na competição nacional de inteligência artificial Brazilian Knowledge Discovery in Databases 2018, promovida pela 7th Brazilian Conference on Intelligent Systems (BRACIS).",
                date: "10/2018",
                company: "BRACIS",
                theme: "Tema: Previsão da produção de óleo de palma",
                description: "O objetivo da competição era prever a produtividade da colheita de óleo de palma com os dados fornecidos pela AGROPALMA. O conjunto de dados cotinha informações sobre palmeiras, suas datas de colheita, dados atmosféricos durante o desenvolvimento das plantas e características do solo dos campos onde as árvores estão localizadas."
            },
            {
                place: "silver",
                title: "2º lugar no I Desafio de Startups do IFSudesteMG, campus Juiz de Fora",
                date: "08/2018",
                company: "IFSudesteMG, campus Juiz de Fora",
                theme: "Tema: Desafio de Startups.",
                description: "Nossa equipe apresentou uma ideia, dado nome de 'DevMirin', que seria uma plataforma de ensino remoto que influenciará jovens a desenvolverem a lógica de programação, o que será promissor dada a grande evolução tecnologia e alta demanda de profissionais no mercado de trabalho."
            },
            {
                place: "gold",
                title: "1º Lugar no Desafio empresarial - Café com Empresa - IF Barbacena",
                date: "08/2018",
                company: "Ibis Budget",
                theme: "Tema: Desenvolver uma solução que faça com que o hotel Ibis seja referência em Barbacena, assim como em todas as cidades em que o hotéis da franquia são inaugurados.",
                description: "Aproximar a população e o Ibis Budget através da implantação de hotspots fixos ou itinerantes em locais estratégicos com maior aglomeração de clientes em potencial."
            },
            {
                place: "silver",
                title: "2º Lugar no Hackathon John Deere - Campus Party Brasil 10",
                date: "02/2017",
                company: "John Deere - Brasil",
                theme: "Tema: Conectando com o campo (Tema livre)",
                description: "Desenvolvemos o JDConnect solução que conecta toda a empresa através de um middleware e fornece informações através de um chat amigável para o cliente. Através desse chat o usuário poderá conversar diretamente com suas máquinas, que em nossa solução se transformaram em bots."
            },
            {
                place: "gold",
                title: "1º Lugar no Hackathon Prodemge - Governo de Minas Gerais - Campus Party MG",
                date: "11/2016",
                company: "Prodemge",
                theme: "Tema: Obter formas inovadoras para melhorar o relacionamento entre o Estado, Cidadãos e Empresas, facilitando o acesso à informação, prestação de serviços, cidadania e aproximar o Estado do Cidadão. ",
                description: "Desenvolvemos uma plataforma onde os usuários compartilham por áudio experiências sobre pontos turísticos de uma região. Com a localização do usuário sabíamos quais pontos sugerir e melhorar sua experiência ao visitar novas cidades."
            },
            {
                place: "gold",
                title: "1º Lugar no Desafio empresarial - Café com Empresa - IF Barbacena",
                date: "07/2016",
                company: "Rivelli",
                theme: "Tema: levar o processo de checklist automatizado para as fazendas",
                description: "Adicionamos ao sistema atual de checklist da empresa um sistema de cache que possibilitara com que o motorista realize a checklist mesmo sem acesso a internet, transformando o sistema atual em um webapp."
            }
        ],
        qualificationsTitle: "Certificados e Diplomas",
        qualificationsData: [{
                title: "Tecnólogo em Sistemas Para Internet.",
                date: "2015/1 - 2019/1",
                local: "Instituto Federal do Sudeste de Minas Gerais Campus Barbacena, IF SUDESTE MG, Brasil."
            },
            {
                title: "Técnico em Mecânica Industrial.",
                date: "2010 - 2012",
                local: "SENAI - Departamento Regional de Minas Gerais, SENAI/DR/MG, Brasil."
            }
        ],

        publicationsTitle: "Publicações",
        publicationsData: [{
            title: "Middleware para controle Web de veículo semi-autônomo integrando comunicação Bluetooth e UDP com confiabilidade na Camada de Aplicação",
            date: "08/2017",
            company: "UFJF",
            description: "Foi desenvolvido um veículo semi-autônomo em Arduino que realiza comunicação Bluetooth com um Servidor através uma ponte de conexão(através de um protocolo UDP que implementa confiabilidade e um Middleware) e que se comunica com um cliente WebService em Microframework (Flask). O objetivo era obter o máximo de desempenho que um UDP pode oferecer sem ter perda de informações.",
            reference: "São João del Rei. Seminário sobre pesquisa e desenvolvimento de plataformas computacionais centradas na Web: uma visão da Engenharia de Software, 2017. v. 1. p. 57-58."
        }],

        contactDescription: "Gostou? Envie me um e-mail.",

        yourNameText: "Seu nome",
        yourEmailText: "Seu e-mail",
        yourmessageText: "Sua mensagem",
        sendText: "Enviar",
        sentText: "Sua mensagem foi enviada, obrigado!",

        sendMeLabel: "Envie-me um e-mail",
    },
    en: {
        portugueseText: "Portuguese",
        englishText: "English",

        hi: "Hi",
        iam: "I'm",
        myname: "João Paulo de Melo",

        principalFunctions: ["FULL-STACK DEVELOPER"],
        aboutTitle: "About",
        aboutData: "I have contributed to my institution constantly with several projects and researches and also help the students inside the institution. I was monitor of complementary activities in the latest laboratory of robotics and technological innovation elaborating prototypes that use Arduino and Lego. I already develop applications, systems and services for several people being autonomous and have extensive knowledge in different Web technologies.",

        infoTitle: "Info",
        infoData: {
            name: "João Paulo de Melo",
            age: `${new Date('2019', '09' - 1, '11', '00', '00', '00') <= new Date() ? new Date().getFullYear()-1995 : new Date().getFullYear()-1996} years old`,
            email: "jpmdik@gmail.com",
            cityState: "Barbacena, MG"
        },

        skillsTitle: "Main Skills",

        projectsTitle: "Projects and Curriculum",

        moreInfoTitle: "More",

        systemsTitle: "Systems and databases",

        languagesTitle: "Languages",
        languagesData: {
            "Portuguese": 100,
            "English": 65
        },

        personalityTitle: "Personality",
        personalityData: [
            "dynamic",
            "organized",
            "team work"
        ],

        interestsTitle: "About Me",
        interestsData: [
            "Music",
            "movies",
            "News"

        ],

        contactTitle: "Contact",
        curriculumTitle: "My CV",

        pExperienceTitle: "Profissional Experience",
        pExperienceData: [{
            title: "Type of contract: Monitor's Program, Time Working: 20h/week",
            date: "2017 - 2017",
            description: "Monitoring of complementary activities of the subjects of the Technology Course in Internet Systems in the Laboratory of Innovation and Robotics, using Arduino and Lego kits"
        }, ],
        awardsTitle: "My Awards",
        awardsData: [{
                place: "gold",
                title: "1st Place at Hackathon BNDES Business - Campus Party MG",
                date: "11/2018",
                company: "BNDES",
                theme: "Topic: How to leverage BNDES business through social networks?",
                description: "Our team developed Chatbot Bob (Bot of Banking) to bring BNDES tools interactively to the user, which, in addition to bringing convenience, brought ease to the user."
            },
            {
                place: "bronze",
                title: "3rd Place at Hackathon BNDES Transparente - Campus Party MG",
                date: "11/2018",
                company: "BNDES",
                theme: "Topic: Identify and respond fake news related to BNDES.",
                description: "We created a system through the use of machine learning, which detected whether the news that was reported was Fake or not through a cross-data along with contextual analysis, in which weights were assigned, and the system gave us a verdict on the news. The system could also be learning over time, provided that this was done by those in charge of the system."
            },
            {
                place: "gold",
                title: "1st place in the national artificial intelligence competition Brazilian Knowledge Discovery in Databases 2018, promoted by the 7th Brazilian Conference on Intelligent Systems (BRACIS).",
                date: "10/2018",
                company: "BRACIS",
                theme: "Topic: Predicting palm oil production",
                description: "The objective of the competition was to predict the productivity of the palm oil harvest with the data provided by AGROPALMA. The data set included information on palm trees, their harvest dates, atmospheric data during the development of the plants and soil characteristics of the fields where the trees are located."
            },
            {
                place: "silver",
                title: "2nd place in the I Startups Challenge of IFSudesteMG, Campus Juiz de Fora",
                date: "08/2018",
                company: "IFSudesteMG, campus Juiz de Fora)",
                theme: "Topic: Startups Challenge.",
                description: "Our team presented an idea, named 'DevMirin', which would be a remote teaching platform that will influence young people to develop the logic of programming, which will be promising given the great evolution of technology and high demand of professionals in the labor market."
            },
            {
                place: "gold",
                title: "1st Place in the Business Challenge - Café com Empresa - IF Barbacena",
                date: "08/2018",
                company: "Ibis Budget)",
                theme: "Topic: Develop a solution that will make the Ibis hotel a reference in Barbacena, as well as in all the cities in which the hotels of the franchise are inaugurated.",
                description: "Bring the population and Ibis Budget closer by deploying fixed or roaming hotspots in strategic locations with the largest crowding of potential customers."
            },
            {
                place: "silver",
                title: "2nd place at Hackathon John Deere - Campus Party Brasil 10",
                date: "02/2017",
                company: "John Deere - Brasil",
                theme: "Topic: Connecting with the field (Free theme)",
                description: "We develop the JDConnect solution that connects the entire enterprise through a middleware and provides information through a friendly chat to the client. Through this chat the user can talk directly with their machines, which in our solution became bots."
            },
            {
                place: "gold",
                title: "1st Place at Hackathon Prodemge - Government of Minas Gerais - Campus Party MG",
                date: "11/2016",
                company: "Prodemge",
                theme: "Topic: Obtain innovative ways to improve the relationship between the State, Citizens and Companies, facilitating access to information, providing services, citizenship and bringing the Citizen State closer.",
                description: "We have developed a platform where users share audio experiences about a region's sights. With the user's location we knew which points to suggest and improve their experience when visiting new cities."
            },
            {
                place: "gold",
                title: "1st Place in the Business Challenge - Café com Empresa - IF Barbacena",
                date: "07/2016",
                company: "Rivelli",
                theme: "Topic: Take the automated checklist process to farms",
                description: "We added to the company's current checklist system a cache system that would allow the driver to perform the checklist even without access to the internet, transforming the current system into a webapp."
            }
        ],
        qualificationsTitle: "Training and Qualifications",
        qualificationsData: [{
                title: "Technologist in Internet Systems.",
                date: "2015/1 - 2019/1",
                local: "Federal Institute of the Southeast of Minas Gerais, IF SUDESTE MG, Brasil."
            },
            {
                title: "Industrial Mechanical Technician.",
                date: "2010 - 2012",
                local: "SENAI - Regional Department of Minas Gerais, SENAI/DR/MG, Brasil."
            }
        ],
        publicationsTitle: "Publications",
        publicationsData: [{
            title: "Middleware for semi-autonomous vehicle Web control integrating Bluetooth and UDP communication with Reliability in the Application Layer",
            date: "08/2017",
            company: "UFJF",
            description: "A semi-autonomous vehicle in Arduino has been developed that performs Bluetooth communication with a Server through a connection bridge (through a UDP protocol that implements reliability and a Middleware) and communicates with a WebService client in Microframework (Flask). The goal was to get the most performance a UDP can offer without losing information.",
            reference: "São João del Rei. Seminário sobre pesquisa e desenvolvimento de plataformas computacionais centradas na Web: uma visão da Engenharia de Software, 2017. v. 1. p. 57-58."
        }],

        contactDescription: "Liked? Contact me.",

        yourNameText: "Your name",
        yourEmailText: "Your email",
        yourmessageText: "your message",
        sendText: "Send",
        sentText: "Your message was sent, thank you!",

        sendMeLabel: "Send me a email",
    },
    general: {
        skillsData: [{
                name: "HTML",
                imageSource: "html.png",
                value: 95
            },
            {
                name: "CSS",
                imageSource: "css.png",
                value: 80
            },
            {
                name: "JavaScript",
                imageSource: "javascript.png",
                value: 90
            },
            {
                name: "Python",
                imageSource: "python.png",
                value: 80
            },
            {
                name: "React",
                imageSource: "react.png",
                value: 65
            },
            {
                name: "Redux",
                imageSource: "redux.png",
                value: 35
            },
            {
                name: "Ruby on Rails",
                imageSource: "ruby.png",
                value: 50
            },
            {
                name: "NodeJS",
                imageSource: "node.png",
                value: 80
            },
            {
                name: "AngularJS",
                imageSource: "angularjs.png",
                value: 70
            },
            {
                name: "Ionic",
                imageSource: "ionic.png",
                value: 70
            },
            {
                name: "MongoDB",
                imageSource: "mongo.png",
                value: 70
            },
            {
                name: "REST",
                imageSource: "rest.png",
                value: 80
            },
            {
                name: "GraphQL",
                imageSource: "graphql.png",
                value: 15
            },
            {
                name: "TypeScript",
                imageSource: "typescript.png",
                value: 60
            },
            {
                name: "Firebase",
                imageSource: "firebase.png",
                value: 70
            },
            {
                name: "Bash",
                imageSource: "bash.png",
                value: 35
            },
        ],
        systemsData: [
            "Windows",
            "Ubuntu",
            "MySQL",
            "Firebase",
            "MongoDB"
        ],
        projectsReference: [
            {
                name: 'DirShared',
                imageSource: "dirshared.png",
                link: "https://www.dirshared.com.br"
            },
            {
                name: 'CoWeb',
                imageSource: "coweb.png",
                link: "https://coweb.jpmdik.com.br/"
            },
            {
                name: 'AWS-script-automation',
                imageSource: "aws-automation.png",
                link: "https://github.com/jpdik/aws-script-automation"
            },
            {
                name: 'UzaApp',
                imageSource: "uzaapp.png",
                link: "https://www.uzaapp.com.br"
            }
        ],
        iconsData: [{
            title: "Linkedin",
            linkUrl: "https://www.linkedin.com/in/jp-dev/",
            imageSource: "a"
        }],
        myEmail: "jpmdik@gmail.com"
    }
};

export default languageData;