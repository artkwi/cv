interface ICopy {
    [key: string]: any;
}

export const copy: ICopy = {
    EN: {
        welcome: 'Hello!',
        aboutMe: 'About me',
        aboutMeDescription: `My name is Artur Kwiatkowski. I have graduated in Computer Science at Adam Mickiewicz University in Poznań. I moved to Kraków in April 2019. I was working in Dev and Deliver as front-end developer for over a year. In my work I was mainly working with Vue.js and React.js. I have been working in KISS digital since September 2020. I develop myself mainly in React.js.
I appreciate the nice atmosphere, teamwork and good coffee `,
        education: 'Education',
        experience: 'Experience',
        skills: 'Skills',
        contact: 'Contact',
        education1:
            'Adam Mickiewicz University in Poznań - IT Engineer at Faculty of Mathematics and Computer Science - Bachelor of Engineering',
        education2:
            'Università della Calabria - Erasmus+ exchange programme in Italy',
        education3:
            'Stanisław Staszic secondary technical school of information technology in Nowy Tomyśl - IT Technician degree and Golden Student honour',

        educationDate1: '10.2015 – 03.2019',
        educationDate2: '10.2017 – 03.2018',
        educationDate3: '09.2011 – 04.2015',

        experienceList: [
            {
                title:
                    'KISS digital - front-end developer (React, TypeScript, Next.js)',
                date: '09.2020 – present',
            },
            {
                title:
                    'Dev and Deliver - front-end developer (Vue, React, TypeScript)',
                date: '05.2019 – 08.2020',
            },
            {
                title: 'Internship in Żabka Polska - first line of support',
                date: '07.2018 – 09.2018',
            },
            {
                title: 'Internship in Phoenix Contact - .NET programmer',
                date: '08.2017',
            },
            {
                title:
                    'Europass Mobility international intership of information technology in „BBS1” in German',
                date: '02.2014 – 03.2014',
            },
        ],

        htmlSkills: [
            'HTML',
            'CSS/SASS',
            'Styled Components',
            'Flex',
            'Bootstrap',
            'BEM',
            'RWD',
        ],
        jsSkills: ['JavaScript/ES6', 'React/Redux', ' Vue/Vuex', 'TypeScript'],
        databaseSkills: ['GraphQL', 'SQL'],
        terminalSkills: ['Git', 'terminal'],
        OOPSkill: 'Object-oriented programming',
        otherSkills: ['SCRUM', 'Jira', 'teamwork'],
        languageSkill: 'English B2',
    },
    PL: {
        welcome: 'Witaj!',
        aboutMe: 'O mnie',
        aboutMeDescription:
            'Nazywam się Artur Kwiatkowski. Jestem inżynierem informatyki Uniwersytetu im. Adama Mickiewicza w Poznaniu. W kwietniu 2019 roku przeprowadziłem się do Krakowa. Przez ponad rok pracowałem jako front-end developer w Dev and Deliver. W mojej pracy głównie używałem Vue.js i React.js. Od września 2020 pracuję w KISS digital jako front-end developer. Mój główny kierunek rozwoju to React.js. Doceniam miłą atmosferę, pracę zespołową i dobrą kawę ',
        education: 'Wykształcenie',
        experience: 'Doświadczenie',
        skills: 'Umiejętności',
        contact: 'Kontakt',
        education1:
            'Uniwersytet im. Adama Mickiewicza w Poznaniu na Wydziale Matematyki i Informatyki - tytuł inżyniera',
        education2:
            'Università della Calabria - studia z programu Erasmus+ we Włoszech',
        education3:
            'Technikum informatyczne w Zespole Szkół nr 2 im. Stanisława Staszica w Nowym Tomyślu - tytuł technika informatyka oraz złotego absolwenta',

        educationDate1: '10.2015 – 03.2019',
        educationDate2: '10.2017 – 03.2018',
        educationDate3: '09.2011 – 04.2015',

        experienceList: [
            {
                title:
                    'KISS digital - programista front-end (React, TypeScript, Next.js)',
                date: '09.2020 – present',
            },
            {
                title:
                    'Dev and Deliver - programista front-end (Vue, React, TypeScript)',
                date: '05.2019 – 08.2020',
            },
            {
                title: 'Żabka Polska – stażysta w zespole wsparcia IT',
                date: '07.2018 – 09.2018',
            },
            {
                title:
                    'Phoenix Contact – praktyki w dziale IT (programista .NET)',
                date: '08.2017',
            },
            {
                title:
                    'Międzynarodowe praktyki zawodowe odbyte w ramach projektu europejskiego w Niemczech w placówce „BBS1” (Europass Mobilität)',
                date: '02.2014 – 03.2014',
            },
        ],

        htmlSkills: [
            'HTML',
            'CSS/SASS',
            'Styled Components',
            'Flex',
            'Bootstrap',
            'BEM',
            'RWD',
        ],
        jsSkills: ['JavaScript/ES6', 'React/Redux', ' Vue/Vuex', 'TypeScript'],
        databaseSkills: ['GraphQL', 'SQL'],
        terminalSkills: ['Git', 'terminal'],
        OOPSkill: 'Programowanie obiektowe',
        otherSkills: ['SCRUM', 'Jira', 'praca zespołowa'],
        languageSkill: 'Angielski B2',
    },
};
