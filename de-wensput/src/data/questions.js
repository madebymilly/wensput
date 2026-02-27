export const allQuestions = [
  {
    required: false,
    text: 'Met wie schuif jij vanavond aan tafel?',
    buttons: [
      { name: 'Met de kids erbij', attributes: { category: ['familie', 'kids'] } },
      { name: 'Zonder kids, even quality time', attributes: { nonCategory: ['kids'] } },
    ],
  },
  {
    required: true,
    text: 'Hoeveel magie mag er in jouw spelavontuur zitten?',
    buttons: [
      { name: 'Doe maar zonder tovenaars & draken', attributes: { nonTheme: ['fantasy', 'lord-of-the-rings', 'harry-potter', 'geesten', 'sprookjes', 'disney', 'monsters', 'piraten', 'star-wars', 'superhelden'] } },
      { name: 'Een vleugje magie is altijd leuk' },
      { name: 'Geef mij ALLES aan fantasy!', attributes: { theme: ['fantasy', 'lord-of-the-rings', 'harry-potter', 'geesten', 'sprookjes', 'disney', 'monsters', 'avontuur', 'piraten', 'star-wars', 'superhelden'] }},
    ],
  },
  {
    required: false,  
    text: 'Samen de handen ineenslaan, of liever tegen elkaar strijden?',
    buttons: [
      { name: 'Ik hou van samenwerken', attributes: { tag: ['cooperatief'] } },
      { name: 'Ik wil winnen!', attributes: { nonTag: ['cooperatief'] } },
    ],
  },
  {
    required: false,
    text: 'Mag een spel je ook iets leren onderweg?',
    buttons: [
      { name: 'Ja, graag iets leerzaams', attributes: { nonCategory: ['educatief', 'kennis-taal', 'behendigheid'] }},
      { name: 'Nee hoor, ik wil gewoon plezier' },
    ],
  },
  {
    required: false,
    text: 'Ben jij een solo-speler of speel je liever samen?',
    buttons: [
      { name: 'Ik trek er gerust alleen op uit', attributes: { solo: 'true' } },
      { name: 'Altijd met gezelschap erbij', attributes: { solo: 'false' } },
    ]
  },
  {
    required: false,
    text: 'Hou je van een episch lang avontuur of korte spelletjes tussendoor?',
    buttons: [
      { name: 'Hoe langer, hoe beter!', attributes: { duration: ['30-45', '45-60', '60-90', '90-120', '120'] } },
      { name: 'Doe mij maar korte rondes', attributes: { duration: ['1-15', '15-30'] } }
    ],
  },
  {
    required: false,
    text: 'Moet het spel ook mee kunnen in de koffer?',
    buttons: [
      { name: 'Ja, klein genoeg voor op de campingtafel', attributes: { space: ['beperkt'] } },
      { name: 'Nee, wij hebben alle ruimte!', attributes: { nonSpace: ['beperkt'] } }
    ],
  },
  {
    required: false,
    text: 'In welke taal speel jij het liefst?',
    buttons: [
      { name: 'Liever in het Nederlands', attributes: { language: ['nederlands'] } },
      { name: 'Engels is voor mij geen probleem', attributes: { language: ['engels', 'nederlands'] } }
    ],
  },
];
