import type { Project } from '~/types/projects'

export const projects = [
    {
        title: 'Portfolio',
        description: 'J\'ai réalisé ce portfolio dans le cadre de recherche de master après l\'obtention de mon diplôme de BUT MMI. \
                        L\'objectif était de réaliser un site internet qui me représente, et qui me permette de mettre en avant mes compétences et mes projets. \
                        J\'ai pu y mettre en pratique mes compétences en développement web, en UX/UI design, ainsi qu\'en gestion de projet. \
                        J\'ai utilisé Nuxt 3, framework appris en alternance, et ai hébergé le site sur Vercel. \'',
        shortDescription: 'Portfolio réalisé dans le cadre de recherche de master après l\'obtention de mon diplôme de BUT MMI.',
        date: '2026',
        technologies: ['Nuxt', 'TS', 'Tailwind'],
        link: 'https://salomefrick.fr',
        image: '/images/app-recettes.png',
        featured: true,
    },
    {
        title: 'Application de recettes',
        description: 'Lors d\'un cours de développement mobile, nous avons du nous entraîner à réaliser des maquettes à destination d\'applications mobiles. \
                        En effet, les enjeux de design et d\'accessibilité ne sont pas du tout les mêmes que pour un site internet. ',
        shortDescription: 'Application de recettes réalisée dans le cadre d\'un cours de développement mobile.',
        date: '2025',
        technologies: ['Figma'],
        link: 'https://embed.figma.com/proto/UCZqMThQLRA8FYFvKuZhhF/DI5?page-id=0%3A1&node-id=1-2&viewport=140%2C137%2C1.35&scaling=scale-down&content-scaling=fixed&embed-host=share',
        image: '/images/app-recettes.png',
        featured: false,
    },
    {
        title: 'Vers un ciel plus vert',
        description: 'A nouveau dans le cadre d\'une SAE de groupe sur le thème de la sobriété énergétique, nous avons dû réaliser un site infographique sur le thème de notre choix. \
                        Avec mon groupe, nous avons choisi la consommation énergétique des avions. Chacun de nous a dû faire des recherches de données quant au thème. \
                        Pour ma part, j\'ai choisi la part de carburant consommée par les courts courriers. J\'ai ensuite pris en charge une grande partie de l\'intégration du site.',
        shortDescription: 'Site infographique sur la sobriété énergétique, réalisé dans le cadre d\'une SAE de groupe.',
        date: '2025',
        technologies: ['HTML', 'CSS', 'JS'],
        link: 'https://fricks.etu.mmi-unistra.fr/SAE303-site-groupe6/',
        image: '/images/ciel-vert.png',
        featured: true,
    },
    {
        title: 'L\'Europe sur la défensive',
        description: 'Ce projet de conception UX et développement web a été réalisé dans le cadre d\'une SAE en partenariat avec le Centre Universitaire d\'École de Journalisme (CUEJ) de Strasbourg. \
                        L\'objectif était de réaliser un CMS à l\'aide de Laravel, afin que les élèves du CUEJ puissent publier des articles. \
                        J\'y ai réalisé les maquettes graphiques, le backoffice (principalement la partie visible, pour la rendre accessible et compréhensible), ainsi que l\'affichage de quelques composants des articles. \
                        Le site a ensuite été migré du serveur Plesk à l\'hébergeur du CUEJ.',
        shortDescription: 'Site web réalisé en partenariat avec le Centre Universitaire d\'École de Journalisme de Strasbourg.',
        date: '2024',
        technologies: ['Laravel', 'Twig', 'HTML', 'CSS', 'JS'],
        link: 'https://cuej.info/mini-sites/europe2024/',
        image: '/images/europe-defensive.png',
        featured: true,
    },
    {
        title: 'Refonte du site de la Sig Association',
        description: 'L\'objectif de cette SAE d\'UX et de webdesign était de réaliser, en groupe, la refonte du site internet de la Sig Association, club de basket féminin basé à Illkirch-Graffenstaden. \
                     Pour ma part, j\'ai pu réaliser la charte graphique ainsi que les  wireframes du site sur Figma. Nous avons ensuite fait le webdesign, en s\'appuyant sur la charte graphique. ',
        shortDescription: 'Refonte du site internet de la Sig Association, club de basket féminin basé à Illkirch-Graffenstaden.',
        date: '2024',
        technologies: ['Figma'],
        link: 'https://embed.figma.com/proto/5hAScV70jQQf9SLKu0Ocsb/SA%C3%89-302?page-id=1%3A4&node-id=278-2218&viewport=1450%2C367%2C0.08&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=278%3A2218&embed-host=share',
        image: '/images/sig-association.png',
        featured: false
    }
]