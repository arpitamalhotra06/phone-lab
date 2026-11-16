window.BIO = window.BIO || {};
BIO.rat = {
  name: 'Rat', id: 'rat', view: 'belly side',
  a: 'nose tip', aHelp: 'The very tip of the nose.',
  b: 'base of the tail', bHelp: 'Where the tail meets the body, at the back end.', dsx: 700, photo: '', credit: '',
  outline: [[0,0],[.03,.04],[.12,.07],[.2,.1],[.3,.14],[.7,.15],[.9,.12],[1,.06],[1.02,0]],
  organs: [
    {id:'heart', n:'Heart', u:.3, v:0, ru:.05, rv:.05, c:'201,61,115',
     wh:'In the chest, a little left of the middle.', fn:'Pumps blood to the lungs and body.',
     hs:'A four-chambered heart: two atria and two ventricles.',
     col:'The right and left sides are fully separate. The left ventricle wall is thicker because it pumps blood to the whole body.'},
    {id:'lung', n:'Lungs', u:.33, v:0, ru:.08, rv:.13, c:'90,150,200',
     wh:'Either side of the heart, filling the chest.', fn:'Take in oxygen and release carbon dioxide.',
     hs:'The right lung has four lobes. The left lung has one.',
     col:'The diaphragm and rib muscles change chest volume to breathe. Alveoli give a huge surface for gas exchange.'},
    {id:'liver', n:'Liver', u:.5, v:0, ru:.1, rv:.12, c:'140,70,40',
     wh:'Just behind the diaphragm, under the ribs.', fn:'Makes bile, stores energy and cleans the blood.',
     hs:'The liver has several lobes. Rats and mice have no gallbladder, so bile flows straight to the small intestine.',
     col:'Bile drains by the common bile duct directly into the duodenum because there is no gallbladder.'},
    {id:'stomach', n:'Stomach', u:.57, v:.06, ru:.06, rv:.05, c:'200,150,60',
     wh:"On the animal's left side, behind the liver.", fn:'Starts breaking down food.',
     hs:'The stomach has a front part without glands and a glandular part where digestion begins.',
     col:'The forestomach has a squamous lining. The glandular stomach secretes acid and enzymes.'},
    {id:'spl', n:'Spleen', u:.6, v:.11, ru:.05, rv:.02, c:'120,30,50',
     wh:'A long, thin, dark red organ beside the stomach.', fn:'Filters old blood cells and helps immunity.',
     hs:'The spleen cleans the blood and helps fight infection.',
     col:'Red pulp removes old red blood cells. White pulp supports immune responses.'},
    {id:'sint', n:'Small intestine', u:.72, v:0, ru:.09, rv:.1, c:'63,52,128',
     wh:'Coiled in the lower middle of the abdomen.', fn:'Finishes digestion and absorbs nutrients.',
     hs:'The longest part of the gut. Most nutrients enter the blood here.',
     col:'Duodenum, jejunum and ileum. Villi greatly increase the absorbing surface.'},
    {id:'cecum', n:'Cecum', u:.8, v:-.07, ru:.07, rv:.05, c:'160,190,90',
     wh:'A pouch at the start of the large intestine.', fn:'Microbes ferment plant material here.',
     hs:'Tiny microbes in this pouch help break down tough plant parts.',
     col:'Hindgut fermentation makes short-chain fatty acids. Rats and mice also eat some of their own feces to recover nutrients.'},
    {id:'lint', n:'Large intestine', u:.87, v:0, ru:.06, rv:.04, c:'31,122,77',
     wh:'Leads from the cecum to the back end.', fn:'Absorbs water and forms feces.',
     hs:'It absorbs water and ends at the anus.', col:'Colon and rectum. The rectum opens at the anus.'},
    {id:'bl', n:'Urinary bladder', u:.94, v:0, ru:.04, rv:.04, c:'120,170,200',
     wh:'A small sac near the back end of the belly.', fn:'Stores urine.',
     hs:'Urine from the kidneys collects here.', col:'Ureters bring urine from the kidneys to the bladder. The urethra leads out.'},
    {id:'kid', n:'Kidneys (deeper)', u:.64, v:0, ru:.05, rv:.14, c:'150,80,60',
     wh:'Two, against the back wall of the abdomen.', fn:'Filter the blood and make urine.',
     hs:'Kidneys remove wastes and extra water from the blood.',
     col:'Nephrons filter the blood. They lie behind the other organs, so this position is a rough guide.'}
  ],
  notes: [
    {t:'Directions to know',
     hs:['Ventral = belly side. Dorsal = back side.','Anterior = toward the head. Posterior = toward the tail.','In belly view with the head up, the animal\u2019s left is on your right.'],
     col:['Cranial and caudal are often used instead of anterior and posterior in mammals.']},
    {t:'Chest and heart',
     hs:['The diaphragm is a muscle that separates the chest from the abdomen.','The heart has four chambers.','Blood goes to the lungs, back to the heart, then out to the body.'],
     col:['Double circulation with full separation of the two sides.','The diaphragm contracts to draw air into the lungs.']},
    {t:'Digestion',
     hs:['Food path: mouth, esophagus, stomach, small intestine, cecum, large intestine, anus.','Rats and mice have no gallbladder.'],
     col:['Incisors grow all the time and are worn down by gnawing.','Cecal fermentation helps digest plant fibre.']},
    {t:'Urinary system',
     hs:['Kidneys filter the blood and make urine.','Urine travels through two tubes (ureters) to the bladder.'],
     col:['The urethra carries urine out of the body.']},
    {t:'In the lab',
     hs:['Follow your teacher\u2019s instructions at every step.','Wash your hands after handling specimens, and dispose of them as directed.'],
     col:['Ask your instructor about approved sourcing and non-animal alternatives.']}
  ],
  quiz: {
    easy: [
      {q:'How many chambers does a rat heart have?', o:['Two','Three','Four'], a:2, e:'Two atria and two ventricles.'},
      {q:'Which muscle separates the chest from the abdomen?', o:['Diaphragm','Spleen','Cecum'], a:0, e:'The diaphragm separates them and helps breathing.'},
      {q:'Which organ makes urine?', o:['Liver','Kidneys','Stomach'], a:1, e:'The kidneys filter blood and make urine.'}
    ],
    medium: [
      {q:'Rats are missing which organ?', o:['Gallbladder','Liver','Spleen'], a:0, e:'Rats have no gallbladder.'},
      {q:'Where is most nutrient absorption?', o:['Stomach','Small intestine','Bladder'], a:1, e:'The small intestine absorbs most nutrients.'},
      {q:'What does the cecum do?', o:['Stores urine','Ferments plant material with microbes','Makes bile'], a:1, e:'Microbes there help break down plant fibre.'}
    ],
    hard: [
      {q:'How many lobes does the left lung have?', o:['One','Two','Four'], a:0, e:'The left lung has one lobe and the right has four.'},
      {q:'Why is the left ventricle wall thicker?', o:['It stores blood','It pumps blood to the whole body','It makes bile'], a:1, e:'It pumps blood to the body at higher pressure.'},
      {q:'How does bile reach the gut in a rat?', o:['Through a gallbladder','Straight from the liver by the bile duct'], a:1, e:'There is no gallbladder.'}
    ]
  }
};
