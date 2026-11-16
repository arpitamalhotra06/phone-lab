/* Rabbit reuses the rat layout with a bigger cecum and a gallbladder (load rat.js first). */
window.BIO = window.BIO || {};
if (BIO.rat) {
  const og = BIO.rat.organs.map(o => o.id === 'cecum' ? Object.assign({}, o, {
    u:.74, v:-.04, ru:.1, rv:.09,
    wh:'A very large coiled sac in the lower abdomen.', fn:'Microbes ferment plant fibre here.',
    hs:'The cecum is huge in rabbits. Microbes there break down tough plant fibre.',
    col:'Hindgut fermentation. Rabbits produce soft cecotropes and re-eat them (cecotrophy) to absorb nutrients.'}) : o);
  og.splice(3, 0, {id:'gall', n:'Gallbladder', u:.53, v:-.03, ru:.02, rv:.02, c:'40,140,90',
    wh:'A small green sac against the liver.', fn:'Stores bile.',
    hs:'Unlike rats, rabbits have a gallbladder.', col:'Bile from the liver is stored and concentrated here, then released into the duodenum.'});
  BIO.rabbit = Object.assign({}, BIO.rat, {
    name: 'Rabbit', id: 'rabbit', organs: og,
    notes: [
      {t:'Body plan',
       hs:['Rabbits are mammals that eat only plants.','They have long, open-rooted front teeth that never stop growing, plus small peg teeth behind them.'],
       col:['Rabbits are lagomorphs, not rodents. They have a second pair of small incisors behind the large upper ones.']},
      {t:'Chest and heart',
       hs:['The heart has four chambers.','The diaphragm separates the chest from the abdomen and helps breathing.'],
       col:['Double circulation with fully separated sides.','Rabbits are nose breathers.']},
      {t:'Digestion',
       hs:['Food path: mouth, esophagus, stomach, small intestine, cecum, large intestine, anus.','The cecum is very large. Microbes there digest plant fibre.','Rabbits make soft droppings (cecotropes) and eat them again.'],
       col:['Rabbits are hindgut fermenters.','Unlike rats, rabbits have a gallbladder.']},
      {t:'Urinary system',
       hs:['Kidneys filter the blood. Urine passes to the bladder through two ureters.'],
       col:['Rabbit urine often contains visible calcium carbonate crystals.']},
      {t:'In the lab',
       hs:['Follow your teacher\u2019s instructions at every step.','Wash your hands after handling specimens, and dispose of them as directed.'],
       col:['Ask your instructor about approved sourcing and non-animal alternatives.']}
    ],
    quiz: {
      easy: [
        {q:'What do rabbits eat?', o:['Only plants','Only meat'], a:0, e:'Rabbits are herbivores.'},
        {q:'How many chambers does a rabbit heart have?', o:['Two','Three','Four'], a:2, e:'Four chambers.'},
        {q:'Which organ pumps blood?', o:['Heart','Cecum','Bladder'], a:0, e:'The heart.'}
      ],
      medium: [
        {q:'Which organ is very large in rabbits?', o:['Cecum','Spleen','Bladder'], a:0, e:'The cecum ferments plant fibre.'},
        {q:'Do rabbits have a gallbladder?', o:['Yes','No'], a:0, e:'Yes, unlike rats and mice.'},
        {q:'What are cecotropes?', o:['Eggs','Soft droppings that rabbits eat again','Teeth'], a:1, e:'Rabbits re-eat them to absorb nutrients.'}
      ],
      hard: [
        {q:'What is cecotrophy?', o:['Eating cecotropes','Fermenting in the stomach','Making bile'], a:0, e:'Eating cecotropes to recover nutrients.'},
        {q:'Rabbits are lagomorphs. What does that mean?', o:['They are rodents','They are a separate group from rodents with a second pair of small incisors'], a:1, e:'They are not rodents.'},
        {q:'Rabbits are...', o:['Foregut fermenters','Hindgut fermenters'], a:1, e:'Fermentation happens mainly in the cecum.'}
      ]
    }
  });
}
