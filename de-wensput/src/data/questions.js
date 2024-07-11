export const questions = [
  {
    id: 1,
    required: true,
    category: false,
    attribute: 'max-aantal-spelers',
    condition: 1,
    text: 'Speel je graag solo of met vrienden?',
    button1: 'Je bent me er eentje',
    button2: 'Spelen doe je met maten'
  },
  {
    id: 2,
    required: true,
    category: false,
    attribute: 'max-speeltijd',
    condition: 30,
    text: 'Houd je van korte snelle spellen of zit je graag lang aan tafel?',
    button1: 'Doe maar lekker kort',
    button2: 'Doe maar lekker lang'
  },
  {
    id: 3,
    required: true,
    category: false,
    attribute: 'easy-to-learn',
    condition: 'Yes',
    text: 'Makkelijk te leren of lekker de regels in duiken?',
    button1: 'Easy to learn graag!',
    button2: 'Laat mij maar lekker lezen'
  },
  {
    id: 4,
    required: false,
    category: 'educatief',
    attribute: false,
    condition: false,
    text: 'Wil je er ook iets van opsteken?',
    button1: 'Ik leer graag',
    button2: 'Gewoon spelen'
  },
  {
    id: 5,
    required: false,
    category: false,
    attribute: 'thema',
    condition: 'fantasy',
    text: 'Houd je van fantasy thema?',
    button1: 'Kom maar op met de dwergen en elfen',
    button2: 'Ik hou van gewoontjes'
  },
  {
    id: 6,
    required: false,
    category: false,
    attribute: 'thema',
    condition: 'war',
    text: 'Houd je van oorlogs thema?',
    button1: 'Go to war!',
    button2: 'Ik ga voor vrede'
  },
  {
    id: 7,
    required: false,
    category: false,
    attribute: 'thema',
    condition: 'dieren',
    text: 'Moeten er dieren in voorkomen?',
    button1: 'Hoe meer fluff hoe beter!',
    button2: 'Ik ben allergisch'
  },
  {
    id: 8,
    required: true,
    category: 'cooperatief',
    attribute: false,
    condition: false,
    text: 'Speel je graag cöoperatief of juist tegen elkaar?',
    button1: 'Samen op avontuur',
    button2: 'Ik wil de onderlinge competitie'
  },
];
