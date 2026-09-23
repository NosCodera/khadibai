const birthdayData = {
  name: "KHADIJA",

  openingLine: "A little something for you.",

  birthdayMessage: "Happy Birthday!",

  subtitle: "Today is all about you.",

  reasons: [
    {
      emoji: "😂",
      title: "The chaos",
      text: "For all the random conversations and completely unnecessary nonsense.",
    },
    {
      emoji: "❤️",
      title: "The memories",
      text: "For all the little moments that somehow became some of my favourite memories.",
    },
    {
      emoji: "✨",
      title: "The person you are",
      text: "For the warmth, kindness and little things that make you uniquely you.",
    },
    {
      emoji: "🌙",
      title: "The comfort",
      text: "For being one of those people who can make an ordinary day feel a little better.",
    },
  ],

  memories: [
    {
      type: "image",
      image: `${import.meta.env.BASE_URL}photos/memory1.jpg`,
      title: "That one moment",
      message:
        "Some moments are ordinary when they happen, but become precious when you look back.",
    },
    {
      type: "image",
      image: `${import.meta.env.BASE_URL}photos/memory2.jpg`,
      title: "A little memory",
      message:
        "I didn't know it then, but this would become a moment worth remembering.",
    },
    {
      type: "image",
      image: `${import.meta.env.BASE_URL}photos/memory3.jpg`,
      title: "One of my favourites",
      message:
        "Some memories don't need a reason to make you smile.",
    },
    {
      type: "image",
      image: `${import.meta.env.BASE_URL}photos/memory4.jpg`,
      title: "Still makes me smile",
      message:
        "Funny how a single picture can bring back an entire feeling.",
    },
    {
      type: "image",
      image: `${import.meta.env.BASE_URL}photos/memory5.jpg`,
      title: "Another little chapter",
      message:
        "Even in the middle of a busy office, you somehow found the perfect time to take a break. 😂",
    },
    {
      type: "image",
      image: `${import.meta.env.BASE_URL}photos/memory6.jpg`,
      title: "A moment to keep",
      message:
        "If I could keep a few moments exactly as they were, this would be one of them.",
    },
    {
      type: "image",
      image: `${import.meta.env.BASE_URL}photos/memory7.jpg`,
      title: "Just us",
      message:
        "A simple moment, but somehow one I'll always be glad we had.",
    },
    {
      type: "image",
      image: `${import.meta.env.BASE_URL}photos/memory8.jpg`,
      title: "One more memory",
      message:
        "I somehow always end up looking for you, just to see what you're up to.",
    },
    {
      type: "video",
      video: `${import.meta.env.BASE_URL}photos/memory-video.mp4`,
      title: "One last round",
      message:
        "Our final team meet, and you decided to go out with a strike. All the pins down — what a way to end it.",
    },
  ],

  quiz: [
    {
      question: "Who is more likely to start a completely random conversation?",
      options: ["Me", "You", "Both of us", "Neither"],
      answer: 2,
    },
    {
      question: "Who remembers the smallest details?",
      options: ["Me", "You", "Google", "Nobody"],
      answer: 1,
    },
    {
      question: "What do our best conversations usually become?",
      options: [
        "Very serious",
        "A five-minute chat",
        "Complete chaos",
        "An argument",
      ],
      answer: 2,
    },
    {
      question: "What matters most in a friendship?",
      options: [
        "Being perfect",
        "Being there",
        "Winning arguments",
        "Never disagreeing",
      ],
      answer: 1,
    },
  ],

  letter: {
    greeting: "Khadija",
    paragraphs: [
      "Some people come into our lives and quietly become a part of our favourite memories.",
      "I hope this birthday brings you the kind of happiness that stays long after the candles are gone.",
      "No matter where life takes us, I hope there will always be more conversations, more laughter and more little moments worth remembering.",
      "Happy Birthday. You deserve a beautiful year ahead.",
      "So even if our paths never cross again, I hope you always carry this little certainty with you — that long after I'm no longer here to say it myself, somewhere, somehow, my wish for your happiness will still remain.",
    ],
    signature: "— With lots of love",
  },

  sketch: {
    image: `${import.meta.env.BASE_URL}photos/sketch.jpg`,
    title: "One last little surprise",
    message: "I made something for you.",
  },
};

export default birthdayData;