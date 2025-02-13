const questions = [
  // {
  //   id: 0,
  //   q: "onus",
  //   example: "The onus is on the captain to lead the team to victory.",
  //   definition: "A responsibility or duty that someone is expected to take on.",
  //   options: ["yes", "no"],
  //   a: 0,
  // },
  {
    id: 1,
    q: "gnawing",
    // pronunciation: "",
    definition:
      "Biting or chewing something repeatedly, often to wear it down or break it apart. Can also mean a constant, annoying pain or feeling, like something biting or chewing at you.",
    example:
      "The gnawing hunger in my stomach made it difficult to concentrate on anything else.",
    options: ["yes", "no"],
    category: "known",
    a: 0,
  },
  {
    id: 2,
    q: "rind",
    example: "He grated the lemon rind and added it to the cake mixture.",
    definition:
      "the hard outer layer of cheese, or the tough outer skin of fruits like lemons or oranges.",
    options: ["yes", "no"],
    category: "unknown",
    a: 0,
  },
  {
    id: 3,
    q: "defiantly",
    definition:
      "doing something in a bold, rebellious way to show you’re not willing to obey or agree.",
    example:
      "She refused to tidy her room, crossing her arms and frowning defiantly",
    options: ["yes", "no"],
    category: "unknown",
    a: 0,
  },
  // {
  //   id: 4,
  //   q: "senile",
  //   example:
  //     "The elderly man was becoming somewhat senile, often forgetting where he left his keys.",
  //   definition:
  //     "Someone who has lost the ability to think clearly or remember things, usually because of old age.",
  //   options: ["yes", "no"],
  //   a: 0,
  // },
  // {
  //   id: 5,
  //   q: "slander",
  //   definition:
  //     "saying something untrue about someone to harm their reputation.",
  //   example: "Mark's false claim that Emma cheated in her exam was slander.",
  //   options: ["yes", "no"],
  //   a: 0,
  // },
  // {
  //   id: 6,
  //   q: "vessel",
  //   definition:
  //     "something that carries something else, like a ship that carries people or goods, a blood vessel that carries blood in the body, or a drinking container like a mug or cup.",
  //   example:
  //     "The large vessel carried thousands of passengers across the ocean.",
  //   options: ["yes", "no"],
  //   a: 0,
  // },
  // {
  //   id: 7,
  //   q: "permit (noun) - note that the stress is on the first syllable",
  //   definition: "An official document that gives permission to do something",
  //   example: "You need a permit to park your car in this area.",
  //   options: ["yes", "no"],
  //   a: 0,
  // },
  // {
  //   id: 8,
  //   q: "permit (verb) - note that the stress is on the second syllable",
  //   definition: "To allow something to happen.",
  //   example:
  //     "The teacher does not permit students to use their phones in class.",
  //   options: ["yes", "no"],
  //   a: 0,
  // },
  // {
  //   id: 9,
  //   q: "douse",
  //   definition: "To drench or soak someone or something in liquid.",
  //   example: "She had to douse the fire with water to stop it from spreading.",
  //   options: ["yes", "no"],
  //   a: 0,
  // },
  // {
  //   id: 10,
  //   q: "sane",
  //   definition: "Mentally healthy; of sound mind",
  //   example:
  //     "After a long holiday in a sunny country, I finally feel sane again.",
  //   options: ["yes", "no"],
  //   a: 0,
  // },
  // {
  //   id: 11,
  //   q: "corrugated",
  //   definition:
  //     "Having a surface that is wavy or ridged, like the folds of a cardboard box.",
  //   example: "The roof of the shed was made of corrugated metal sheets.",
  //   options: ["yes", "no"],
  //   a: 0,
  // },
  {
    id: 12,
    q: "apocryphal",
    definition:
      "A story or statement that is widely believed but probably not true.",
    example:
      "The apocryphal tale of a haunted house scared the children at bedtime.",
    options: ["yes", "no"],
    category: "unknown",
    a: 0,
  },
  {
    id: 13,
    q: "rustle",
    definition:
      "Definition 1: A soft, crackling sound, often made by something like leaves or paper. Definition 2 (to rustle something up): To quickly prepare or gather something, often food or supplies.",
    example:
      "Example 1: I could hear the rustle of the wind moving through the trees. Example 2: I can rustle up some sandwiches if you’re hungry.",
    options: ["yes", "no"],
    a: 0,
    category: "unknown",
  },
  {
    id: 14,
    q: "digression",
    definition:
      "When someone talks about something unrelated to the main topic, or deviates from a route on a journey.",
    example:
      "His speech was full of digressions, and it took a while to get back to the main point.",
    options: ["yes", "no"],
    category: "unknown",
    a: 0,
  },
  {
    id: 15,
    q: "burrow",
    definition: "A hole or tunnel dug by an animal to live in",
    example: "The rabbit disappeared into its burrow to hide from the fox.",
    options: ["yes", "no"],
    a: 0,
    category: "unknown",
  },
  {
    id: 16,
    q: "anaemic",
    definition:
      "Lacking enough iron, which can make a person feel tired and weak.",
    example:
      "The doctor said she was anaemic and needed to eat more iron-rich foods",
    options: ["yes", "no"],
    category: "unknown",
    a: 0,
  },
  {
    id: 17,
    q: "muzzle",
    definition:
      "A covering for the mouth and nose of an animal, often used to stop it from biting or eating.",
    example:
      "The dog wore a muzzle while visiting the vet to keep everyone safe.",
    options: ["yes", "no"],
    category: "unknown",
    a: 0,
  },
  {
    id: 18,
    q: "assault",
    definition: "A violent attack on someone, either physically or verbally.",
    example:
      "The knight defended the castle from an assault by the enemy soldiers.",
    options: ["yes", "no"],
    category: "known",
    a: 0,
  },
  {
    id: 19,
    q: "gradual",
    definition: "Happening slowly over time, not all at once.",
    example: "The hill had a gradual slope, making it easy to climb.",
    options: ["yes", "no"],
    category: "known",
    a: 0,
  },
  {
    id: 20,
    q: "prime",
    definition:
      "The best or most important part of something, or a number only divisible by 1 and itself.",
    example:
      "At 25, he felt he was in the prime of his life, full of energy and ideas.",
    options: ["yes", "no"],
    category: "known",
    a: 0,
  },
  // {
  //   id: 21,
  //   q: "dementia",
  //   definition:
  //     "a medical condition that affects the brain, which is more common in older age and makes it hard to remember things or think clearly.",
  //   example: "Grandma sometimes forgets things because she has dementia.",
  //   options: ["yes", "no"],
  // category: "known",
  //   a: 0,
  // },
  // {
  //   id: 22,
  //   q: "hatch",
  //   definition:
  //     "To open or create an opening, or when a baby bird or reptile comes out of an egg.",
  //   example: "The chicks began to hatch from their eggs in the early morning.",
  //   options: ["yes", "no"],
  //   a: 0,
  // },
  {
    id: 23,
    q: "maintenance",
    definition:
      "The act of keeping something in good condition by checking or repairing it regularly.",
    example: "Regular maintenance of his bike kept it running smoothly.",
    options: ["yes", "no"],
    category: "known",
    a: 0,
  },
  {
    id: 24,
    q: "logical",
    definition: "Using clear and sensible reasoning.",
    example: "It’s logical to wear a coat when it’s cold outside.",
    options: ["yes", "no"],
    category: "known",
    a: 0,
  },
  {
    id: 25,
    q: "assert",
    definition: "To state something confidently and clearly.",
    example:
      "Harry asserted that he was telling the truth about the missing homework.",
    options: ["yes", "no"],
    category: "unknown",
    a: 0,
  },
  {
    id: 26,
    q: "confound",
    definition: "To surprise or confuse someone.",
    example: "The magician’s tricks continued to confound the audience.",
    options: ["yes", "no"],
    category: "unknown",
    a: 0,
  },
  {
    id: 27,
    q: "fractious",
    definition: "Easily annoyed, or difficult to manage.",
    example:
      "The fractious toddler threw a tantrum when he didn’t get his way.",
    options: ["yes", "no"],
    category: "unknown",
    a: 0,
  },
  {
    id: 28,
    q: "Ingrate",
    definition: "A person who is not thankful.",
    example:
      "After all the help she gave him, he acted like an ingrate and didn’t even say thank you.",
    options: ["yes", "no"],
    category: "unknown",
    a: 0,
  },
  {
    id: 29,
    q: "Precise",
    definition: "Very accurate and exact.",
    example:
      "The instructions for building the model were precise, leaving no room for mistakes.",
    options: ["yes", "no"],
    category: "unknown",
    a: 0,
  },
  {
    id: 30,
    q: "Trove",
    definition: "A collection of valuable things.",
    example: "The attic was a trove of old toys and forgotten treasures.",
    options: ["yes", "no"],
    category: "unknown",
    a: 0,
  },
  {
    id: 31,
    q: "hypothetical",
    definition:
      "Something that is hypothetical is an idea or situation that is not real but is suggested to explore possibilities. In science, a hypothesis can be tested through experiments to see if it could be true.",
    example:
      "The professor gave a hypothetical example to explain the complex idea.",
    options: ["yes", "no"],
    category: "unknown",
    a: 0,
  },
  {
    id: 32,
    q: "marred",
    definition: "Damaged or spoiled to a certain extent.",
    example:
      "The beauty of the painting was marred by a scratch across the canvas.",
    options: ["yes", "no"],
    a: 0,
    category: "unknown",
  },
  {
    id: 33,
    q: "episode",
    definition: "An incident or event in a series.",
    example:
      "The first episode of the TV programme had me laughing from start to finish.",
    options: ["yes", "no"],
    a: 0,
    category: "unknown",
  },
  {
    id: 34,
    q: "mire",
    definition:
      "A stretch of swampy or boggy ground; a difficult or unpleasant situation.",
    example: "His car got stuck in the mire after the heavy rain.",
    options: ["yes", "no"],
    a: 0,
    category: "unknown",
  },
  {
    id: 35,
    q: "deduce",
    definition: "To work something out by thinking logically about the facts.",
    example:
      "By examining the footprints in the snow, the detective was able to deduce that the thief had escaped through the back door.",
    options: ["yes", "no"],
    a: 0,
    category: "unknown",
  },
  {
    id: 36,
    q: "negligible",
    definition: "So small or unimportant that it can usually be ignored.",
    example:
      "The difference in size between the two objects was so negligible that it was hard to notice",
    options: ["yes", "no"],
    a: 0,
    category: "unknown",
  },
  {
    id: 37,
    q: "implode",
    definition: "When something collapses in on itself",
    example: "The building will implode in a controlled demolition.",
    options: ["yes", "no"],
    category: "unknown",
    a: 0,
  },
  {
    id: 38,
    q: "acute",
    definition: "Something very sharp, intense or short-lived",
    example: "I had an acute pain in my leg when I cut it.",
    options: ["yes", "no"],
    category: "unknown",
    a: 0,
  },
  {
    id: 39,
    q: "Accommodate",
    definition: "To provide space or meet someone's needs.",
    example:
      "The stadium can accommodate thousands of football fans for the big match.",
    options: ["yes", "no"],
    category: "unknown",
    a: 0,
  },
  // {
  //   id: 40,
  //   q: "",
  //   definition: "",
  //   example: "",
  //   options: ["yes", "no"],
  // category: "unknown",
  //   a: 0,
  // },
  // {
  //   id: 41,
  //   q: "",
  //   definition: "",
  //   example: "",
  //   options: ["yes", "no"],
  // category: "unknown",
  //   a: 0,
  // },
  // {
  //   id: 30,
  //   q: "",
  //   definition: "",
  //   example: "",
  //   options: ["yes", "no"],
  // category: "unknown",
  //   a: 0,
  // },
  // template
  // {
  //   id: 2,
  //   q: "",
  //   definition: "",
  //   example: "",
  //   options: ["yes", "no"],
  // category: "unknown",
  //   a: 0,
  // },
];
