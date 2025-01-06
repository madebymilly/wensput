export const allQuestions = [
  {
    required: true,
    text: 'Is het tijd voor een spelletje met of zonder kids?',
    buttons: [
      { name: 'Met kids', attributes: { category: ['familie', 'kids'] } },
      { name: 'zonder kids', attributes: { nonCategory: ['kids'] } },
    ],
  },
  {
    required: true,
    text: 'Coop?',
    buttons: [
      { name: 'Wel coop', attributes: { tag: ['cooperatief'] } },
      { name: 'Niet coop', attributes: { nonTag: ['cooperatief'] } },
    ],
  },
  {
    required: true,
    text: 'Educatief?',
    buttons: [
      { name: 'Educatief', attributes: { sort: ['educatief'] } },
      { name: 'Hoeft niet edu' },
    ],
  },
  {
    required: true,
    text: 'Solo?',
    buttons: [
      { name: 'Ook Solo', attributes: { players: 1 } },
      { name: 'Minimaal 2' },
    ]
  },
  // SOLO met aantal spelers doen
  // {
  //   required: true,
  //   text: 'Speel je graag solo of met tegenstanders?',
  //   buttons: [
  //     { name: 'Solo', attributes: { tag: ['solo'] } },
  //     { name: 'Tegenstanders', attributes: { nonTag: ['solo'] } },
  //   ],
  // },
  // {
  //   required: true,
  //   text: 'Houd je van korte snelle spellen of zit je graag lang aan tafel?',
  //   buttons: [
  //     { name: 'Mand! (Kort en snel)', attributes: { duration: ['1-15', '15-30'] } },
  //     { name: 'Kan me niet lang genoeg duren', attributes: { duration: ['30-45', '45-60', '60-90', '90-120', '120']} }
  //   ],
  // },
  // {
  //   required: false,
  //   category: 'educatief',
  //   attribute: false,
  //   condition: false,
  //   text: 'Wil je er ook iets van opsteken?',
  //   buttons: [
  //     { name: 'Ik leer graag', attributes: { tag: ['educatief'] } },
  //     { name: 'Ik speel graag', attributes: {} },
  //   ],
  // },
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
