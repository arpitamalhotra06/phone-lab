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
     hs:['Food path: mouth, esophagus, stomach, small intestine, large intestine, cloaca.','The liver makes bile, the gallbladder stores it, and the pancreas
