export const allQuestions = [
  {
    required: true,
    text: 'Is het tijd voor een spelletje met of zonder kids?',
    buttons: [
      { name: 'Met kids', attributes: { category: ['familie', 'kids'] } },
      { name: 'Zonder kids', attributes: { nonCategory: ['kids'] } },
    ],
  },
  {
    required: true,
    text: 'Zijn magie en fantasy oke?',
    buttons: [
      { name: 'Geen magie', attributes: { nonTheme: ['fantasy', 'lord-of-the-rings', 'harry-potter', 'draken', 'sprookjes', 'geesten', 'disney'] } },
      { name: 'Magie en Fantasy mag!' },
      { name: 'Ik wil graag een fantasy thema', attributes: { theme: ['fantasy', 'lord-of-the-rings', 'harry-potter', 'draken', 'sprookjes', 'disney'] }},
    ],
  },
  {
    required: false,
    text: 'Wil je wel of geen tegenstanders?',
    buttons: [
      { name: 'Graag cooperatief', attributes: { tag: ['cooperatief'] } },
      { name: 'Ik ga de strijd aan!', attributes: { nonTag: ['cooperatief'] } },
    ],
  },
  {
    required: false,
    text: 'Wil je er iets van opsteken?',
    buttons: [
      { name: 'Graag!', attributes: { sort: ['educatief'] } },
      { name: 'Ik wil gewoon spelen' },
    ],
  },
  {
    required: false,
    text: 'Wil je het ook alleen kunnen spelen?',
    buttons: [
      { name: 'Ik ga graag eens solo', attributes: { solo: 'true' } },
      { name: 'Ik speel altijd met anderen', attributes: { solo: 'false' } },
    ]
  },
  {
    required: false,
    text: 'Liever een lang spelen, of veel kleintjes achter elkaar?',
    buttons: [
      { name: 'Het kan me niet lang genoeg duren!', attributes: { duration: ['30-45', '45-60', '60-90', '90-120', '120'] } },
      { name: 'Ik ga voor kort (Mand!)', attributes: { duration: ['1-15', '15-30'] } }
    ],
  },
  {
    required: false,
    text: 'Draait het om geluk of wijsheid?',
    buttons: [
      { name: 'Geluk', attributes: { luck: 'true' } },
      { name: 'Wijsheid', attributes: { luck: 'false' } }
    ],
  },
  {
    required: false,
    text: 'Mag het mee op vakantie?',
    buttons: [
      { name: 'Ja, het moet op de campingtafel passen', attributes: { space: ['beperkt'] } },
      { name: 'Nee, we hebben een grote tafel!', attributes: { nonSpace: ['beperkt'] } }
    ],
  },
  {
    required: false,
    text: 'Spreek je goed Engels?',
    buttons: [
      { name: 'Ik wil liever een Nederlands spel', attributes: { language: ['nederlands'] } },
      { name: 'Engels is geen probleem', attributes: { language: ['engels', 'nederlands'] } }
    ],
  },
];
