var quotes = [
  {
    id: 1,
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "― Albert Einstein"},
  {
    id: 2,
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "― Robert Frost"
  },
  {
    id: 3,
    quote:
      "If you tell the truth, you don't have to remember anything.",
    author: "― Mark Twain"
  },
  {
    id: 4,
    quote:
      "The best revenge is massive success.",
    author: "― Frank Sinatra"
  },

  {
    id: 5,
    quote:
      "Do not take life too seriously. You will not get out alive.",
    author: "― Elbert Hubbard"
  },

  {
    id: 6,
    quote:
      "It's not what happens to you, but how you react to it that matters.",
    author: "― Epictetus"
  },

  {
    id: 7,
    quote:
      "You miss 100% of the shots you don't take.",
    author: "― Wayne Gretzy"
  },

  {
    id: 8,
    quote:
      "Resentment is like drinking poison and waiting for your enemies to die.",
    author: "― Nelson Mandela"
  },
  {
    id: 9,
    quote:
      "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    author: "― Albert Einstein"
  },
  {
    id: 10,
    quote: "We are all in the gutter, but some of us are looking at the stars.",
    author: "― Oscar Wilde"
  },
  {
    id: 11,
    quote: "Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).",
    author: "― Mark Twain"
  },
];

var quoteContainer = document.getElementById("quoteContainer");

var generates = [];


function generate() {
    var idGenerate = Number(Math.round(Math.random()*10));
    
    while(generates[generates.length - 1] === idGenerate) {
        idGenerate = Number(Math.round(Math.random()*10));
    }

    generates.push(idGenerate);

    quoteContainer.innerHTML = `
    <div class="quote-box position-relative p-5 mx-auto my-5 shadow rounded-5 d-flex flex-column justify-content-center align-items-center"">
        <p class="text-white mb-3">${quotes[idGenerate].quote}</p>
        <h4 class="fs-5">${quotes[idGenerate].author}</h4>
    </div>`;
}
