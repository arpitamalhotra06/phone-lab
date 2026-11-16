/* Frog module data. To add an animal, copy this file (e.g. bio/turtle.js) and change the content. */
window.BIO = window.BIO || {};
BIO.frog = {
  name: 'Frog',
  /* Schematic body-axis coordinates. u: 0 = snout tip, 1 = vent. v: sideways; positive = viewer's right (frog's left) in belly view. */
  outline: [[0,0],[.04,.08],[.15,.15],[.25,.12],[.3,.17],[.6,.2],[.85,.17],[1,.1],[1.03,0]],
  organs: [
    {id:'heart', n:'Heart', u:.36, v:0, ru:.05, rv:.045, c:'201,61,115',
     wh:'Front of the body cavity, near the middle.', fn:'Pumps blood around the body.',
     hs:'The frog heart has three chambers: two atria and one ventricle.',
     col:'Both atria empty into one ventricle. Ventricular trabeculae and the spiral valve in the conus arteriosus limit mixing of oxygen-rich and oxygen-poor blood.'},
    {id:'liver', n:'Liver', u:.47, v:0, ru:.12, rv:.09, c:'140,70,40',
     wh:'Large and lobed, just behind the heart.', fn:'Makes bile, stores energy and processes nutrients.',
     hs:'The liver is the biggest organ in the cavity. Bile it makes helps digest fats.',
     col:'Usually three lobes. Bile is stored in the gallbladder and travels by the bile duct to the duodenum. The liver also stores glycogen and detoxifies the blood.'},
    {id:'stomach', n:'Stomach', u:.58, v:.06, ru:.06, rv:.04, c:'200,150,60',
     wh:"On the frog's left side, behind the liver.", fn:'Starts breaking down food.',
     hs:'A muscular, curved sac. Stomach juices begin chemical digestion.',
     col:'Glands secrete hydrochloric acid and pepsinogen. The pyloric sphincter controls how food passes into the duodenum.'},
    {id:'sint', n:'Small intestine', u:.72, v:-.03, ru:.1, rv:.06, c:'63,52,128',
     wh:'Coiled in the lower middle of the body.', fn:'Finishes digestion and absorbs nutrients.',
     hs:'A long, coiled tube. Most nutrients pass into the blood here.',
     col:'The duodenum receives bile and pancreatic enzymes. The ileum absorbs nutrients. The mesentery holds the coils and carries blood vessels.'},
    {id:'lint', n:'Large intestine', u:.88, v:0, ru:.04, rv:.03, c:'31,122,77',
     wh:'Short, wider tube near the back end.', fn:'Absorbs water and passes waste to the cloaca.',
     hs:'It leads to the cloaca, the single opening at the back of the frog.',
     col:'The cloaca is a shared exit for the digestive, urinary and reproductive tracts.'},
    {id:'lung', n:'Lungs', u:.42, v:0, ru:.06, rv:.16, c:'90,150,200',
     wh:'One on each side, mostly hidden behind the liver and heart.', fn:'Take in oxygen. The skin helps too.',
     hs:'Frog lungs are simple, thin-walled sacs. Frogs also breathe through moist skin.',
     col:'Little internal folding, so surface area is small. Skin gas exchange is a major route. Position here is a rough guide.'}
  ],
  notes: [
    {t:'Directions to know',
     hs:['Ventral = belly side. Dorsal = back side.','Anterior = toward the head. Posterior = toward the rear.',"In belly view with the head up, the frog's left is on your right."],
     col:['Directions describe the animal, not the viewer.','The body cavity (coelom) is lined by peritoneum, and organs hang from mesenteries.']},
    {t:'Digestion',
     hs:['Food path: mouth, esophagus, stomach, small intestine, large intestine, cloaca.','The liver makes bile, the gallbladder stores it, and the pancreas makes digestive enzymes.'],
     col:['Bile and pancreatic enzymes enter the duodenum.','Adult frogs are carnivores. Tadpoles eat plants and have a longer, more coiled gut.']},
    {t:'Heart and blood',
     hs:['Three chambers: right atrium, left atrium and one ventricle.','Blood goes to the lungs and skin, back to the heart, then out to the body.'],
     col:['Double circulation with partial mixing in the single ventricle.','The pulmocutaneous arteries carry blood to the lungs and skin.']},
    {t:'Breathing',
     hs:['Frogs breathe through the skin, the lining of the mouth and the lungs.','The skin must stay moist to work.'],
     col:['There is no diaphragm. Frogs use buccal pumping to move air.','Skin breathing can supply most oxygen in cold water or during hibernation.']},
    {t:'Waste and reproduction',
     hs:['Kidneys filter the blood. Waste leaves through the cloaca.','Eggs are fertilized outside the body, in water. Tadpoles change into frogs (metamorphosis).'],
     col:['Adult frogs excrete mostly urea. Ureters empty into the cloaca, and the bladder is a ventral outpocket.','Fat bodies store energy for breeding and hibernation.']},
    {t:'In the lab',
     hs:['Follow your teacher\u2019s instructions at every step.','Wash your hands after handling specimens, and dispose of them as directed.'],
     col:['Ask your instructor about approved sourcing and non-animal alternatives.']}
  ],
  quiz: {
    easy: [
      {q:'Which organ pumps blood?', o:['Liver','Heart','Stomach'], a:1, e:'The heart pumps blood.'},
      {q:'What is the belly side called?', o:['Dorsal','Ventral','Anterior'], a:1, e:'Ventral is the belly side. Dorsal is the back.'},
      {q:'After the stomach, food goes to the...', o:['Small intestine','Lungs','Heart'], a:0, e:'Most digestion and absorption happens in the small intestine.'},
      {q:'Frogs can breathe through their skin.', o:['True','False'], a:0, e:'True. Moist skin is a major breathing surface.'}
    ],
    medium: [
      {q:'How many chambers does a frog heart have?', o:['Two','Three','Four'], a:1, e:'Two atria and one ventricle.'},
      {q:'Which organ makes bile?', o:['Liver','Stomach','Lung'], a:0, e:'The liver makes bile. The gallbladder stores it.'},
      {q:'The cloaca is the exit for...', o:['Only digestive waste','Digestive, urinary and reproductive tracts','Only eggs'], a:1, e:'The cloaca is a shared exit.'},
      {q:'Belly view, head up: the frog\u2019s left is on...', o:['Your left','Your right'], a:1, e:'Directions are the frog\u2019s own, so its left appears on your right.'}
    ],
    hard: [
      {q:'What limits mixing of blood in the single ventricle?', o:['A wall dividing it in two','Trabeculae and the spiral valve','The lungs squeezing it'], a:1, e:'Trabeculae and the spiral valve help keep the blood streams largely separate.'},
      {q:'Which vessels carry blood to the lungs and skin?', o:['Pulmocutaneous arteries','Hepatic portal vein','Carotid arteries'], a:0, e:'Pulmocutaneous arteries serve both lungs and skin.'},
      {q:'How do frogs fill their lungs?', o:['Diaphragm contraction','Buccal pumping','Rib movement'], a:1, e:'Frogs have no diaphragm and push air in with the mouth floor.'},
      {q:'What is the main nitrogen waste of adult frogs?', o:['Urea','Uric acid','Ammonia'], a:0, e:'Adult frogs excrete mostly urea.'}
    ]
  }
};
