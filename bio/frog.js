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
     col:['Bile and pancreatic juice enter the duodenum through a shared duct.','Frogs swallow prey whole, so the stomach does most of the early chemical digestion.']},
    {t:'Heart and blood',
     hs:['The heart has three chambers: two atria and one ventricle.','Blood travels in a double circuit: to the lungs and skin, then to the body.'],
     col:['Mixing of oxygenated and deoxygenated blood in the single ventricle is reduced by its internal structure.','Pulmocutaneous circulation sends blood to both the lungs and the skin.']},
    {t:'Breathing',
     hs:['Frogs breathe with simple lungs and through their moist skin.','Skin breathing only works if the skin stays damp.'],
     col:['Buccal pumping forces air into the lungs.','Cutaneous gas exchange can supply most of the oxygen when a frog is underwater or hibernating.']},
    {t:'In the lab',
     hs:["Follow your teacher's instructions at every step.",'Wash your hands after handling specimens, and dispose of them as directed.'],
     col:['Ask your instructor about approved sourcing and non-animal alternatives.']}
  ],
  quiz: {
    easy: [
      {q:'How many chambers does a frog heart have?', o:['Two','Three','Four'], a:1, e:'Two atria and one ventricle make three.'},
      {q:'Which organ makes bile?', o:['Liver','Stomach','Lungs'], a:0, e:'The liver makes bile.'},
      {q:"What is the frog's belly side called?", o:['Dorsal','Anterior','Ventral'], a:2, e:'Ventral is the belly side.'},
      {q:'Besides lungs, what do frogs breathe through?', o:['Gills','Moist skin','Their eyes'], a:1, e:'Frogs also breathe through their moist skin.'}
    ],
    medium: [
      {q:'Where does food go after the stomach?', o:['Large intestine','Small intestine','Liver'], a:1, e:'The small intestine finishes digestion.'},
      {q:'What is the cloaca?', o:['A lung','A shared exit for waste and reproduction','A heart chamber'], a:1, e:'The cloaca is the single exit for the digestive, urinary and reproductive tracts.'},
      {q:'Which organ stores bile?', o:['Gallbladder','Stomach','Pancreas'], a:0, e:'The gallbladder stores bile.'},
      {q:'Where are most nutrients absorbed?', o:['Stomach','Large intestine','Small intestine'], a:2, e:'Most absorption happens in the small intestine.'}
    ],
    hard: [
      {q:'What limits mixing of blood in the frog ventricle?', o:['A wall splitting it in two','Trabeculae and the spiral valve','Nothing, it mixes completely'], a:1, e:'Ventricular trabeculae and the spiral valve reduce mixing.'},
      {q:'Why must frog skin stay moist for breathing?', o:['Gases dissolve in water before they diffuse','It makes the frog heavier','It keeps the heart cool'], a:0, e:'Gases must dissolve in a film of moisture to cross the skin.'},
      {q:'Which duct delivers bile to the duodenum?', o:['Bile duct','Ureter','Trachea'], a:0, e:'The bile duct carries bile from the liver and gallbladder.'},
      {q:'Why do frogs have small lung surface area?', o:['They have no lungs','They get much of their oxygen through skin','Their lungs are huge'], a:1, e:'Skin gas exchange makes up for simple lungs.'}
    ]
  }
};
