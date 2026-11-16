/* Mouse reuses the rat anatomy (load rat.js first). Edit notes and quiz freely. */
window.BIO = window.BIO || {};
if (BIO.rat) BIO.mouse = Object.assign({}, BIO.rat, {
  name: 'Mouse', id: 'mouse',
  notes: [
    {t:'Body plan',
     hs:['A mouse is a small mammal with fur, whiskers and continuously growing front teeth (incisors).','Directions: ventral is the belly, dorsal is the back, anterior is the head end.'],
     col:['Mice are rodents. Their incisors have hard enamel on the front, so they stay sharp as they wear.']},
    {t:'Chest, heart and breathing',
     hs:['The heart has four chambers. A mouse heart beats extremely fast.','The diaphragm and rib muscles move air in and out of the lungs.','The right lung has four lobes and the left has one.'],
     col:['Double circulation keeps oxygen-rich and oxygen-poor blood fully separate.','Mice breathe very rapidly because of their small size and high metabolic rate.']},
    {t:'Digestion',
     hs:['Food path: mouth, esophagus, stomach, small intestine, cecum, large intestine, anus.','Mice have no gallbladder.'],
     col:['The forestomach is lined with squamous epithelium.','Microbes in the cecum ferment plant fibre.']},
    {t:'Why mice are studied',
     hs:['Mice are small, breed quickly and have organs similar to ours.','Many medical discoveries began with studies in mice.'],
     col:['Many mouse genes are close matches to human genes, and inbred strains allow controlled experiments.']},
    {t:'In the lab',
     hs:['Follow your teacher\u2019s instructions at every step.','Wash your hands after handling specimens, and dispose of them as directed.'],
     col:['Ask your instructor about approved sourcing and non-animal alternatives.']}
  ],
  quiz: {
    easy: [
      {q:'How many chambers does a mouse heart have?', o:['Two','Three','Four'], a:2, e:'Four chambers.'},
      {q:'Mouse front teeth are called...', o:['Incisors','Molars','Canines'], a:0, e:'Incisors grow all the time.'},
      {q:'Which organ makes urine?', o:['Kidneys','Spleen','Stomach'], a:0, e:'The kidneys make urine.'}
    ],
    medium: [
      {q:'Which organ do mice lack?', o:['Liver','Gallbladder','Spleen'], a:1, e:'Mice have no gallbladder.'},
      {q:'How many lobes does the right lung have?', o:['One','Two','Four'], a:2, e:'Four. The left lung has one.'},
      {q:'What muscle separates the chest from the abdomen?', o:['Diaphragm','Bladder','Cecum'], a:0, e:'The diaphragm.'}
    ],
    hard: [
      {q:'Why do mice breathe very quickly?', o:['They have gills','Small size and high metabolic rate','They have no diaphragm'], a:1, e:'Small animals lose heat fast and burn energy quickly.'},
      {q:'What is the main job of the cecum?', o:['Fermenting plant fibre with microbes','Storing bile','Filtering blood'], a:0, e:'Microbes ferment plant material there.'},
      {q:'Why are mice useful in research?', o:['They are small, breed fast and share many genes with us','They are large','They live for decades'], a:0, e:'Short life cycle and genetic similarity.'}
    ]
  }
});
