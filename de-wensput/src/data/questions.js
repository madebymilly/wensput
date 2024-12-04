export const allQuestions = [
    {
    required: true,
    text: 'Met wie wil je een spel spelen?',
    buttons: [
      { name: 'Kinderen', attributes: { age: 4, category: ['kids'] } },
      { name: 'Volwassenen', attributes: { age: 12 } },
      { name: 'Familie', attributes: { age: 6, category: ['familie'] } }
    ],
  },
  {
    required: true,
    text: 'Speel je graag solo of met tegenstanders?',
    buttons: [
      { name: 'Solo', attributes: { tag: ['solo'] } },
      { name: 'Tegenstanders', attributes: { players: 2 } },
    ],
  },
  {
    required: true,
    text: 'Houd je van korte snelle spellen of zit je graag lang aan tafel?',
    buttons: [
      { name: 'Mand! (Kort en snel)', attributes: { duration: ['1-15', '15-30'] } },
      { name: 'Kan me niet lang genoeg duren', attributes: { duration: ['30-45', '45-60', '60-90', '90-120', '120']} }
    ],
  },
  {
    required: false,
    category: false,
    attribute: 'easy-to-learn',
    condition: 'Yes',
    text: 'Makkelijk te leren of lekker de regels in duiken?',
    buttons: [
      { name: 'Easy to learn', attributes: { tag: ['easy-to-learn'] } },
      { name: 'Lekker lezen', attributes: { category: ['expert'] } }
    ],
  },
  {
    required: false,
    category: 'educatief',
    attribute: false,
    condition: false,
    text: 'Wil je er ook iets van opsteken?',
    buttons: [
      { name: 'Ik leer graag', attributes: { tag: ['educatief'] } },
      { name: 'Ik speel graag', attributes: {} },
    ],
  },
  // {
  //   required: false,
  //   category: 'escape_puzzel',
  //   attribute: false,
  //   condition: false,
  //   text: 'Houd je van puzzelen?',
  //   button1: 'Ja',
  //   button2: 'Nee'
  // },
  // {
  //   required: false,
  //   category: false,
  //   attribute: 'thema',
  //   condition: 'fantasy',
  //   text: 'Houd je van fantasy thema?',
  //   button1: 'Kom maar op met de dwergen en elfen',
  //   button2: 'Normaal vind ik gek genoeg'
  // },
  // {
  //   required: false,
  //   category: false,
  //   attribute: 'thema',
  //   condition: 'war',
  //   text: 'Houd je van oorlogs thema?',
  //   button1: 'Go to war!',
  //   button2: 'Ik ga voor vrede'
  // },
  // {
  //   required: false,
  //   category: false,
  //   attribute: 'thema',
  //   condition: 'dieren',
  //   text: 'Moeten er dieren in voorkomen?',
  //   button1: 'Hoe meer fluff hoe beter!',
  //   button2: 'Ik ben allergisch'
  // },
  // {
  //   required: false,
  //   category: 'cooperatief',
  //   attribute: false,
  //   condition: false,
  //   text: 'Speel je graag cöoperatief of juist tegen elkaar?',
  //   button1: 'Samen op avontuur',
  //   button2: 'Ik wil onderlinge competitie'
  // },
];
