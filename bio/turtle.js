window.BIO = window.BIO || {};
BIO.turtle = {
  name: 'Turtle', id: 'turtle', view: 'belly side (plastron)',
  a: 'front edge of the shell', aHelp: 'The middle of the front edge, where the head comes out.',
  b: 'rear edge of the shell', bHelp: 'The middle of the back edge, where the tail comes out.', dsx: 340, photo: '', credit: '',
  outline: [[0,0],[.05,.2],[.15,.33],[.35,.4],[.6,.4],[.85,.32],[.97,.15],[1,0]],
  organs: [
    {id:'heart', n:'Heart', u:.3, v:0, ru:.06, rv:.06, c:'201,61,115',
     wh:'Near the front, in the middle.', fn:'Pumps blood around the body.',
     hs:'A three-chambered heart: two atria and one ventricle.',
     col:'Muscular ridges partly divide the ventricle, so oxygen-rich and oxygen-poor blood stay mostly separate. Many turtles can shunt blood away from the lungs while diving.'},
    {id:'liver', n:'Liver', u:.45, v:0, ru:.1, rv:.22, c:'140,70,40',
     wh:'Large, two-lobed, across the middle.', fn:'Makes bile, stores energy and processes nutrients.',
     hs:'The liver is large and has two main lobes.',
     col:'Bile reaches the duodenum through the gallbladder and bile duct. The liver also stores glycogen and lipids.'},
    {id:'stomach', n:'Stomach', u:.56, v:.1, ru:.08, rv:.06, c:'200,150,60',
     wh:"On the turtle's left side, behind the liver.", fn:'Starts breaking down food.',
     hs:'A muscular sac that begins digestion.', col:'Acid and enzymes from the gastric glands begin chemical digestion. Diet differs a lot between species.'},
    {id:'sint', n:'Small intestine', u:.68, v:-.04, ru:.1, rv:.16, c:'63,52,128',
     wh:'Coiled below the stomach.', fn:'Finishes digestion and absorbs nutrients.',
     hs:'A long coiled tube where most nutrients are absorbed.', col:'The duodenum receives bile and pancreatic secretions. Intestine length depends on diet.'},
    {id:'lint', n:'Large intestine', u:.8, v:0, ru:.05, rv:.1, c:'31,122,77',
     wh:'Near the rear, leading to the tail.', fn:'Absorbs water and passes waste on.',
     hs:'It leads to the cloaca, the single opening under the tail.', col:'The cloaca receives the digestive, urinary and reproductive tracts.'},
    {id:'bl', n:'Urinary bladder', u:.9, v:0, ru:.05, rv:.07, c:'120,170,200',
     wh:'Near the rear, in front of the cloaca.', fn:'Stores urine and water.',
     hs:'Many turtles can store water in the bladder.', col:'Some species use the bladder as a water reservoir. Accessory bladders occur in some turtles.'},
    {id:'lung', n:'Lungs (deeper, under the top shell)', u:.4, v:0, ru:.13, rv:.33, c:'90,150,200',
     wh:'Two large lungs under the top shell, either side of the middle.', fn:'Take in oxygen.',
     hs:'The lungs are attached to the underside of the top shell.',
     col:'Turtles have no diaphragm. Muscles of the limb girdles move the organs to ventilate the lungs. Position here is a rough guide.'}
  ],
  notes: [
    {t:'The shell',
     hs:['The top shell is the carapace. The bottom shell is the plastron.','The shell is part of the skeleton. The ribs are fused to the carapace.'],
     col:['Bony plates are covered by keratin scutes.','The shoulder and hip girdles sit inside the rib cage, unlike in other vertebrates.']},
    {t:'Heart and breathing',
     hs:['The heart has two atria and one ventricle.','Turtles have lungs. They have no diaphragm, so they use muscles around the legs to breathe.'],
     col:['Partial division of the ventricle limits mixing of blood.','Some aquatic species also exchange gases through the cloaca or throat lining.']},
    {t:'Digestion',
     hs:['Food path: mouth, esophagus, stomach, small intestine, large intestine, cloaca.','Diet varies: some turtles eat plants, some animals, some both.'],
     col:['Gut length and microbes reflect diet.','Turtles have a keratin beak instead of teeth.']},
    {t:'Life and reproduction',
     hs:['Turtles are ectotherms, so their body temperature depends on their surroundings.','Eggs are laid on land.'],
     col:['In many species the incubation temperature decides the sex of hatchlings.','Males and females have different cloacal and shell features.']},
    {t:'In the lab',
     hs:['Follow your teacher\u2019s instructions at every step.','Wash your hands after handling specimens, and dispose of them as directed.'],
     col:['Ask your instructor about legal, approved sourcing and non-animal alternatives.']}
  ],
  quiz: {
    easy: [
      {q:'What is the top shell called?', o:['Carapace','Plastron'], a:0, e:'The carapace is the top shell. The plastron is the bottom.'},
      {q:'Turtles are...', o:['Warm-blooded','Cold-blooded (ectothermic)'], a:1, e:'Their body heat depends on their surroundings.'},
      {q:'Which organ pumps blood?', o:['Liver','Heart','Bladder'], a:1, e:'The heart pumps blood.'}
    ],
    medium: [
      {q:'How many chambers does a turtle heart have?', o:['Two','Three','Four'], a:1, e:'Two atria and one ventricle.'},
      {q:'The lungs are attached to the underside of the...', o:['Plastron','Carapace'], a:1, e:'They hang under the top shell.'},
      {q:'Do turtles have a diaphragm?', o:['Yes','No'], a:1, e:'No. Limb girdle muscles help them breathe.'}
    ],
    hard: [
      {q:'What decides hatchling sex in many turtles?', o:['Egg size','Incubation temperature','Mother\u2019s diet'], a:1, e:'This is temperature-dependent sex determination.'},
      {q:'Turtle ribs are...', o:['Free and flexible','Fused to the carapace'], a:1, e:'The ribs are fused to the carapace.'},
      {q:'The cloaca receives which tracts?', o:['Digestive only','Digestive, urinary and reproductive'], a:1, e:'It is a shared exit.'}
    ]
  }
};
