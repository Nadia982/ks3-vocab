const questions = [
  {
    id: 0,
    q: "onus",
    example: "The onus is on the captain to lead the team to victory.",
    definition: "A responsibility or duty that someone is expected to take on.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 1,
    q: "gnawing",
    // pronunciation: "",
    definition:
      "Biting or chewing something repeatedly, often to wear it down or break it apart. Can also mean a constant, annoying pain or feeling, like something biting or chewing at you.",
    example:
      "The gnawing hunger in my stomach made it difficult to concentrate on anything else.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 2,
    q: "rind",
    example: "He grated the lemon rind and added it to the cake mixture.",
    definition:
      "the hard outer layer of cheese, or the tough outer skin of fruits like lemons or oranges.",
    options: ["yes", "no"],
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
    a: 0,
  },
  {
    id: 4,
    q: "senile",
    example:
      "The elderly man was becoming somewhat senile, often forgetting where he left his keys.",
    definition:
      "Someone who has lost the ability to think clearly or remember things, usually because of old age.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 5,
    q: "slander",
    definition:
      "saying something untrue about someone to harm their reputation.",
    example: "Mark's false claim that Emma cheated in her exam was slander.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 6,
    q: "vessel",
    definition:
      "something that carries something else, like a ship that carries people or goods, a blood vessel that carries blood in the body, or a drinking container like a mug or cup.",
    example:
      "The large vessel carried thousands of passengers across the ocean.",
    options: ["yes", "no"],
    a: 0,
  },
  // {
  //   id: 7,
  //   q: "permit (noun) - note that the stress is on the first syllable",
  //   definition: "An official document that gives permission to do something",
  //   example: "You need a permit to park your car in this area.",
  //   options: ["yes", "no"],
  //   a: 0,
  // },
  {
    id: 8,
    q: "permit (verb) - note that the stress is on the second syllable",
    definition: "To allow something to happen.",
    example:
      "The teacher does not permit students to use their phones in class.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 9,
    q: "douse",
    definition: "To drench or soak someone or something in liquid.",
    example: "She had to douse the fire with water to stop it from spreading.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 10,
    q: "sane",
    definition: "Mentally healthy; of sound mind",
    example:
      "After a long holiday in a sunny country, I finally feel sane again.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 11,
    q: "corrugated",
    definition:
      "Having a surface that is wavy or ridged, like the folds of a cardboard box.",
    example: "The roof of the shed was made of corrugated metal sheets.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 12,
    q: "apocryphal",
    definition:
      "A story or statement that is widely believed but probably not true.",
    example:
      "The apocryphal tale of a haunted house scared the children at bedtime.",
    options: ["yes", "no"],
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
  },
  {
    id: 14,
    q: "digression",
    definition:
      "When someone talks about something unrelated to the main topic, or deviates from a route on a journey.",
    example:
      "His speech was full of digressions, and it took a while to get back to the main point.",
    options: ["yes", "no"],
    a: 0,
  },
  {
    id: 15,
    q: "burrow",
    definition: "A hole or tunnel dug by an animal to live in",
    example: "The rabbit disappeared into its burrow to hide from the fox.",
    options: ["yes", "no"],
    a: 0,
  },
  // {
  //   id: 16,
  //   q: "",
  //   definition: "",
  //   example: "",
  //   options: ["yes", "no"],
  //   a: 0,
  // },
  // {
  //   id: 17,
  //   q: "",
  //   definition: "",
  //   example: "",
  //   options: ["yes", "no"],
  //   a: 0,
  // },
  // {
  //   id: 18,
  //   q: "",
  //   definition: "",
  //   example: "",
  //   options: ["yes", "no"],
  //   a: 0,
  // },
  // {
  //   id: 19,
  //   q: "",
  //   definition: "",
  //   example: "",
  //   options: ["yes", "no"],
  //   a: 0,
  // },
  // {
  //   id: 20,
  //   q: "",
  //   definition: "",
  //   example: "",
  //   options: ["yes", "no"],
  //   a: 0,
  // },
  // {
  //   id: 21,
  //   q: "",
  //   definition: "",
  //   example: "",
  //   options: ["yes", "no"],
  //   a: 0,
  // },
  // {
  //   id: 22,
  //   q: "",
  //   definition: "",
  //   example: "",
  //   options: ["yes", "no"],
  //   a: 0,
  // },
  // {
  //   id: 23,
  //   q: "",
  //   definition: "",
  //   example: "",
  //   options: ["yes", "no"],
  //   a: 0,
  // },
  // {
  //   id: 24,
  //   q: "",
  //   definition: "",
  //   example: "",
  //   options: ["yes", "no"],
  //   a: 0,
  // },
  // template
  // {
  //   id: 2,
  //   q: "",
  //   definition: "",
  //   example: "",
  //   options: ["yes", "no"],
  //   a: 0,
  // },
];
