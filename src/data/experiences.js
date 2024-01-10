const experiences = [
    {
        id: 10,
        title: 'Développeuse',
        date: 'Novembre 2021 - aujourd\'hui',
        place: 'Caplogik',
        subtitle: "Projets d'entreprise",
        description: "Je fais partie d'une équipe de 4 développeurs. Nous développons des outils et solutions afin de répondre à des besoins spécifiques dans le domaine de l'éducation. J'ai commencé par un contrat en alternance d'un an, à la suite duquel j'ai été embauchée en CDI. Les outils sont développés avec Symfony, Twig et bases de données MySQL.",
        image: '',
        link_project: "http://www.caplogik.com/fr",
    },
    {
        id: 11,
        title: 'Développeuse Front-End & Back-End',
        date: 'février - décembre 2023',
        place: 'autodidacte',
        subtitle: "Photography - part 2",
        description: "Application web permettant à une photographe professionnelle de partager les photos d’un shooting avec ses clients. Les clients se connectent à leur espace personnel et peuvent choisir leurs photos préférées et passer commande. Projet entammé en duo, afin de le présenter lors de mon passage de titre professionnel Conceptrice Développeuse d'Applications. Puis continué et finalisé par mes soins à la suite de la formation.",
        image: 'photography2.png',
        link_project: "https://laurahuismanphotographe.com/",
    },
    {
        id: 10,
        title: 'Développeuse Front-End',
        date: 'mars - avril 2023',
        place: 'autodidacte',
        subtitle: "Site communal",
        description: "Refonte d'un site web d'une mairie avec React. Site que j'avais déjà réalisé à partir de 2016 avec Wordpress.",
        image: 'mairie_de_cardet_2023.png',
        link_project: "https://mairie-de-cardet.com/",
    },
    {
        id: 9,
        title: 'Développeuse Front-End & Back-End',
        date: 'janvier - novembre 2022',
        place: 'Simplon',
        subtitle: "Photography",
        description: "Application web permettant à une photographe professionnelle de partager les photos d’un shooting avec ses clients, sur leur espace personnel. Projet de fin de formation, réalisé en duo.",
        image: 'photography.png',
        link_github: "https://github.com/TeamDevelopersChrisRosa/photography-front",
        link_project: "https://photographyyyy.netlify.app/",
    },
    {
        id: 8,
        title: 'Développeuse Front-End & Back-End',
        date: 'novembre 2021 - mars 2022',
        place: 'autodidacte',
        subtitle: "Pétanque",
        description: "Application web permettant de gérer les parties et scores pour un concours de pétanque, du tirage au sort des joueurs jusqu’au classement final.",
        image: 'petanque.png',
        link_github: "https://github.com/RosaHuisman/petanque",
        link_project: "https://petanque-beau-rivage.netlify.app/",
    },
    {
        id: 1,
        title: 'Product Owner & développeuse Front-End',
        date: 'août - septembre 2021',
        place: 'Ecole O\'clock',
        subtitle: "Notabebe",
        description: "Durant ma formation, j’ai eu la chance de développer un projet de groupe durant 1 mois. Ce projet s'appelle Notabebe. Il s'agit d'une plateforme qui permet de créer un lien entre les parents de jeunes enfants et le personnel de la structure d'accueil de ces enfants (notamment une crèche). Toutes les informations importantes sur le déroulement de la journée d'un bébé y sont notées et le parent a accès à ces informations quand il veut, sur son espace personnel. Nous étions 5 développeurs, 3 en Front-end et 2 en Back-end. Ce fut une mise en situation professionnelle en méthode Scrum, où je me suis occupée de la partie front avec React/Redux. Le back a été géré avec NodeJs et nous avons une base de données PostgreSQL. La présentation de ce projet, en direct sur Youtube, a eu lieu le 8 septembre dernier. Le lien se trouve juste ci-dessous. Notre présentation débute à 26:15 min.",
        link_youtube: "https://www.youtube.com/watch?v=PHYfwht2dJU",
        link_github: "https://github.com/RosaHuisman/NotaBebe",
        link_project: "https://notabebe.netlify.app/",
        image: 'notabebe.png'
    },
    {
        id: 4,
        title: 'Développeuse Front-end d\'une application de recettes ',
        date: 'août 2021 - spé React',
        place: 'Ecole O\'clock',
        subtitle: "O'Recipes",
        description: "Application React de recettes de cuisine depuis un serveur distant. Appels API avec Axios. Gestion du state avec React Redux. Projet de formation",
        link_github: "https://github.com/RosaHuisman/Recettes",
        image: 'recettes.png'
    },
    {
        id:2,
        title: "Développement site internet d'une mairie",
        date: '2016 à 2022',
        place: "autodidacte",
        subtitle: "site Wordpress",
        description: "Création & mise à jour régulière du site internet d'une mairie d'une petite commune. Utilisation de Wordpress. Aujourd'hui, ce site n'est plus en ligne car je l'ai refait avec React en 2023.",
        image: 'mairie_de_cardet.png'
    },
    {
        id:6,
        title: 'Développeuse Back-end d\'une application recensant les Pokemon',
        date: 'juin 2021',
        place: 'Ecole O\'clock',
        subtitle: "Pokedex",
        description: "Application qui liste les pokemons avec des options de filtrage. Technos: Node, Express, PostgreSQL, Sequelize. Réalisée dans le cadre d'un projet de formation.", 
        link_github: "https://github.com/RosaHuisman/Pokedex",
        image: 'pokedex.png'
    },
    {
        id:7,
        title: 'Développeuse Back-end d\'une application affichant des cartes',
        date: 'mai 2021',
        place: 'Ecole O\'clock',
        subtitle: "Triple-Triad-Deck-Builder",
        description: "Application qui affiche des cartes avec des options de filtrage et de recherche. Technos: Node, Express, Express-session, PostgreSQL, dotenv. Réalisée dans le cadre d'un projet de formation.", 
        link_github: "https://github.com/RosaHuisman/Triple-Triad-Deck-Builder",
        image: 'triple_triad_deck_builder.png'
    },
    {
        id:5,
        title: 'Développeuse Front-end de ce portfolio',
        date: '2021 à aujourd\'hui',
        place: '',
        subtitle: "mon Portfolio",
        description: "Application React pour montrer qui je suis, mes projets et mes réalisations",    
        image: 'portfolio.png'
    },
    {
        id:3,
        title: 'Employée polyvalente restaurant & camping',
        date: '2007 - 2020',
        place: 'Camping Beau Rivage à Cardet (30350)',
        subtitle: "Chef de cuisine, cuisinière, pizzaïola, barmaid",
        description: "J'ai pendant de nombreuses années travaillé dans un camping. En grande majorité dans le restaurant du camping, mais également à de nombreux autres postes. J'ai beaucoup appris pendant ces années, le contact client, le sens du service, le travail d'équipe, les journées à rallonge et les nuits courtes. C'était très enrichissantet m'a permis d'acquérir de véritables valeurs du travail, de détermination et de motivation. Après l'arrivée de mes 2 enfants, j'ai choisi de me former pour exercer un autre métier qui me passionne. ",    
        image: 'camping_beau_rivage.png'
    }
]

export default experiences;