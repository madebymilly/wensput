export const allQuestions = [
    {
    required: true,
    category: 'leeftijd',
    attribute: false,
    condition: false,
    text: 'Met wie wil je een spel spelen?',
    button1: 'Kinderen', //  2-6
    button2: 'Volwassenen', // 12+
    button3: 'Familie' // 6+
  },
  {
    required: true,
    category: false,
    attribute: 'max-aantal-spelers',
    condition: 1,
    text: 'Speel je graag solo of met vrienden?',
    button1: 'Je bent me er eentje',
    button2: 'Spelen doe je met maten'
  },
  {
    required: true,
    category: false,
    attribute: 'max-speeltijd',
    condition: 30,
    text: 'Houd je van korte snelle spellen of zit je graag lang aan tafel?',
    button1: 'mand! (Doe maar lekker kort)',
    button2: 'Kan me niet lang genoeg duren'
  },
  {
    required: false,
    category: false,
    attribute: 'easy-to-learn',
    condition: 'Yes',
    text: 'Makkelijk te leren of lekker de regels in duiken?',
    button1: 'Easy to learn graag!',
    button2: 'Laat mij maar lekker lezen'
  },
  {
    required: false,
    category: 'educatief',
    attribute: false,
    condition: false,
    text: 'Wil je er ook iets van opsteken?',
    button1: 'Ik leer graag',
    button2: 'Gewoon spelen'
  },
  {
    required: false,
    category: 'escape_puzzel',
    attribute: false,
    condition: false,
    text: 'Houd je van puzzelen?',
    button1: 'Ja',
    button2: 'Nee'
  },
  {
    required: false,
    category: false,
    attribute: 'thema',
    condition: 'fantasy',
    text: 'Houd je van fantasy thema?',
    button1: 'Kom maar op met de dwergen en elfen',
    button2: 'Normaal vind ik gek genoeg'
  },
  {
    required: false,
    category: false,
    attribute: 'thema',
    condition: 'war',
    text: 'Houd je van oorlogs thema?',
    button1: 'Go to war!',
    button2: 'Ik ga voor vrede'
  },
  {
    required: false,
    category: false,
    attribute: 'thema',
    condition: 'dieren',
    text: 'Moeten er dieren in voorkomen?',
    button1: 'Hoe meer fluff hoe beter!',
    button2: 'Ik ben allergisch'
  },
  {
    required: false,
    category: 'cooperatief',
    attribute: false,
    condition: false,
    text: 'Speel je graag cöoperatief of juist tegen elkaar?',
    button1: 'Samen op avontuur',
    button2: 'Ik wil onderlinge competitie'
  },
];
