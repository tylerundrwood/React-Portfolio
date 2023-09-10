export const info = {
    firstName: "Tyler",
    lastName: "Underwood",
    position: "a Full Stack Developer",
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '🏈',
            text: 'sports fanatic'
        },
        {
            emoji: '🌎',
            text: 'based in the Florida'
        },
        {
            emoji: "👨🏻‍🎓",
            text: "currently a Student"
        },
        {
            emoji: "📧",
            text: "twood9600@yahoo.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/tylerundrwood",
            icon: "fa fa-github",
            label: 'github' 
        },
    ],
    bio: "Hello! I'm Tyler. I'm am currently a student in UCF's Coding Bootcamp program. I am super determined and driven to succeed!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html', 'css'],
            exposedTo: ['nodejs', 'react']
        }
        ,
        hobbies: [
            {
                label: 'sports',
                emoji: '⚽️'
            },
            {
                label: 'gaming',
                emoji: '🎮'
            },
            {
                label: 'movies',
                emoji: '🎥'
            },
            {
                label: 'traveling',
                emoji: '🛩️'
            }
        ],
        portfolio: [ 
            {
                title: "FoodSmart",
                live: "https://dtm589.github.io/FoodSmart/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
                source: "https://github.com/dtm589/FoodSmart", // this should be a link to the **repository** of the project, where the code is hosted.
                image: mock1
            },
            {
                title: "QR Empire",
                live: "https://qrempire-7ee960eb8dee.herokuapp.com/",
                source: "https://github.com/WillZealot/QR_Empire",
                image: mock2
            },
            {
                title: "Password Generator",
                live: "https://tylerundrwood.github.io/Password-Generator/",
                source: "https://github.com/tylerundrwood/Password-Generator",
                image: mock3
            }
        ]
    }

