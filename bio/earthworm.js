window.BIO = window.BIO || {};
BIO.earthworm = {
  name: 'Earthworm', id: 'earthworm', view: 'top (back) side',
  a: 'front end', aHelp: 'The mouth end. It is the end closer to the swollen band (the clitellum).',
  b: 'tail end', bHelp: 'The thin tip at the back end.', dsx: 1000, photo: '', credit: '',
  outline: [[0,0],[.01,.012],[.05,.02],[.2,.028],[.8,.03],[.97,.02],[1,.01],[1.005,0]],
  organs: [
    {id:'clit', n:'Clitellum (visible outside)', u:.26, v:0, ru:.04, rv:.034, c:'205,140,120',
     wh:'A smooth swollen band about a quarter of the way back from the front.', fn:'Makes the cocoon for eggs.',
     hs:'The clitellum is the one organ you can see on the outside of the worm.',
     col:'Glandular skin of segments 32 to 37. It secretes mucus for mating and forms the cocoon.'},
    {id:'phar', n:'Pharynx', u:.04, v:0, ru:.03, rv:.012, c:'201,61,115',
     wh:'Just behind the mouth.', fn:'Pulls food in.',
     hs:'A muscular tube that sucks food into the body.',
     col:'Pharyngeal glands add mucus and enzymes. Strong muscles work like a suction pump.'},
    {id:'arch', n:'Aortic arches ("hearts")', u:.07, v:0, ru:.015, rv:.018, c:'180,30,60',
     wh:'Five pairs of loops around the esophagus near the front.', fn:'Pump blood from the top vessel to the bottom vessel.',
     hs:'Earthworms have five pairs of these muscular loops.',
     col:'Segments 7 to 11. They link the dorsal and ventral vessels in a closed circulatory system.'},
    {id:'sv', n:'Seminal vesicles', u:.1, v:0, ru:.03, rv:.022, c:'200,150,60',
     wh:'Near the front, beside the esophagus.', fn:'Make and store sperm.',
     hs:'Earthworms have both male and female parts. The seminal vesicles are part of the male system.',
     col:'Lobed sacs around segments 9 to 12 where sperm develop and mature.'},
    {id:'crop', n:'Crop', u:.13, v:0, ru:.02, rv:.02, c:'31,122,77',
     wh:'A thin-walled sac behind the esophagus.', fn:'Stores food.',
     hs:'Food waits here before it is ground up.', col:'A thin-walled storage chamber in segments 15 and 16.'},
    {id:'giz', n:'Gizzard', u:.165, v:0, ru:.02, rv:.018, c:'140,70,40',
     wh:'A firm, muscular bulb right after the crop.', fn:'Grinds food with small bits of grit.',
     hs:'Its thick muscular walls crush food, like teeth would.', col:'Segments 17 and 18. Swallowed grit helps grind soil and plant matter.'},
    {id:'int', n:'Intestine', u:.6, v:0, ru:.42, rv:.014, c:'63,52,128',
     wh:'A long straight tube from the gizzard to the tail end.', fn:'Digests food and absorbs nutrients.',
     hs:'Most digestion and absorption happens here.',
     col:'Begins around segment 19. A dorsal fold, the typhlosole, increases the surface for absorption.'}
  ],
  notes: [
    {t:'Body plan',
     hs:['The body is made of many ring-shaped segments.','Tiny bristles called setae help the worm grip soil as it moves.','The front end has the mouth. The back end has the anus.'],
     col:['A common earthworm has roughly 100 to 150 segments, most with a pair of nephridia.','Circular and long muscles work against fluid in the coelom (a hydrostatic skeleton).']},
    {t:'Digestion',
     hs:['Food path: mouth, pharynx, esophagus, crop, gizzard, intestine, anus.','The crop stores food and the gizzard grinds it.'],
     col:['Calciferous glands on the esophagus help regulate calcium levels.','The typhlosole increases the intestine\u2019s surface area.']},
    {t:'Blood and breathing',
     hs:['Earthworms have no lungs. They breathe through their moist skin.','Blood stays inside vessels (a closed system). Five pairs of aortic arches help pump it.'],
     col:['Hemoglobin is dissolved in the plasma, not carried in cells.','The dorsal vessel carries blood forward and the ventral vessel carries it back.']},
    {t:'Nerves and reproduction',
     hs:['A small brain (cerebral ganglia) sits above the pharynx. A nerve cord runs along the underside.','Each worm has both male and female organs, and two worms exchange sperm.'],
     col:['The cerebral ganglia connect to a ventral nerve cord with a ganglion in each segment.','After mating, the clitellum secretes a cocoon where eggs are fertilized.']},
    {t:'In the lab',
     hs:['Follow your teacher\u2019s instructions at every step.','Wash your hands after handling specimens, and dispose of them as directed.'],
     col:['Ask your instructor about approved sourcing and non-animal alternatives.']}
  ],
  quiz: {
    easy: [
      {q:'What do earthworms breathe through?', o:['Lungs','Gills','Skin'], a:2, e:'Earthworms breathe through their moist skin.'},
      {q:'What is the swollen band near the front called?', o:['Clitellum','Gizzard','Crop'], a:0, e:'The clitellum makes the egg cocoon.'},
      {q:'Which organ grinds food?', o:['Gizzard','Crop','Pharynx'], a:0, e:'The muscular gizzard grinds food with grit.'}
    ],
    medium: [
      {q:'How many pairs of aortic arches ("hearts") does an earthworm have?', o:['Three','Five','Ten'], a:1, e:'Five pairs.'},
      {q:'Earthworm circulation is...', o:['Open','Closed'], a:1, e:'Blood stays inside vessels, so it is closed.'},
      {q:'Earthworms are...', o:['Male only','Female only','Hermaphrodites'], a:2, e:'Each worm has both male and female organs.'}
    ],
    hard: [
      {q:'What does the typhlosole do?', o:['Grinds food','Increases absorption surface','Pumps blood'], a:1, e:'This intestinal fold increases surface area.'},
      {q:'Which nerve structure runs along the underside of the worm?', o:['Ventral nerve cord','Dorsal nerve cord','Spinal cord'], a:0, e:'A ventral nerve cord links the segments.'},
      {q:'Where is the hemoglobin in earthworm blood?', o:['In red blood cells','Dissolved in the plasma'], a:1, e:'It is dissolved in the plasma.'}
    ]
  }
};
