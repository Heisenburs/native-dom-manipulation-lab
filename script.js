let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  let title = document.getElementById("main-title");
  title.innerText = "DOM Toretto | Homepage";

  // Part 2
  const body = document.querySelector("body");
  body.style.backgroundColor = "beige";
  // Part 3

  let favThings = document.getElementById("favorite-things");
  console.log(favThings);

  favThings.removeChild(favThings.lastElementChild);

  // const arrayofLis = Array.from(favThings);
  // console.log(arrayofLis);

  // Part 4
  const specTitle = document.querySelectorAll(".special-title");
  console.log(specTitle);
  specTitle.forEach((element) => {
    element.style.fontsize = "2rem";
  });

  // Part 5
  const pastRaces = document.getElementById("past-races");
  console.log(pastRaces);

  pastRaces.removeChild(
    pastRaces.lastElementChild.previousElementSibling.previousElementSibling
  );

  // Part 6
  const newLi = document.createElement("li");
  newLi.textContent = "Amsterdam";
  pastRaces.appendChild(newLi);

  // Part 7
  const newPost = document.createElement("div");

  newPost.classList.add("blog-post");
  newPost.classList.add("purple");

  const newHeading = document.createElement("h1");
  newHeading.textContent = "Amsterdam";

  const newText = document.createElement("p");
  newText.textContent = "I RAN OVER A CLOWN WITH MY CAR!";

  newPost.appendChild(newHeading);
  newPost.appendChild(newText);

  console.log(newPost);

  const main = document.querySelector(".main");

  main.appendChild(newPost);

  // Part 8
  const quoteTitle = document.getElementById("quote-title");
  console.log(quoteTitle);

  quoteTitle.addEventListener("click", randomQuote);

  // Part 9
  const posts = document.querySelectorAll(".blog-post");
  console.log(posts);

  posts.forEach(
    (post) =>
      addEventListener("mouseenter", function (event) {
        post.classList.toggle("red");
      }),

    addEventListener("mouseout", function (event) {
      post.classList.toggle("purple");
    })
  );
});
