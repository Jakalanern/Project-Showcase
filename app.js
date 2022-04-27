const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let count = 0;
let image = $(".image");
let slider = $(".slider");
let imageDesc = $(".image-desc");
let gitBtn = $(".github-logo");
let demoBtn = $(".demo-logo");
let prevBtn = $(".previous-btn");
let nextBtn = $(".next-btn");
let hoverContainer = $(".hover-container");
let projects = [
  {
    show: true,
    order: 1,
    id: "1",
    img: "./sites-2022/brick-breaker.png",
    desc: "Fun challenge to re-create the 'Brick-Breaker' game from scratch using the canvas element and collision functions!<br><br> I implemented many custom features such as the pause system, pause screen, sounds, sound toggle system with button control, win/loss conditions, score counter, life counter, DARK / LIGHT themes with button control, game difficuly, etc!",
    git: "https://github.com/Jakalanern/Challenge-20-Bricker-Breaker-Game",
    demo: "https://jakalanern.github.io/Challenge-20-Bricker-Breaker-Game",
    alt: "Photo of Brick Breaker Game",
  },
  {
    show: true,
    order: 3,
    id: "2",
    img: "./sites-2022/flash-cards.png",
    desc: "Flashcard application built from scratch with HTML, CSS, and JavaScript!<br><br> Used an array of objects to store the information of each card, then iterated through them to create new flashcard elements on the page whenever the 'Create Card' form is submitted.<br><br> Each card has a hidden answer which can be revealed with a toggle. Each card is fully editable and removable as well.",
    git: "https://github.com/Jakalanern/Challenge-15-Flash-Card-Challenge",
    demo: "https://jakalanern.github.io/Challenge-15-Flash-Card-Challenge/",
    alt: "Photo of Flash Card App",
  },
  {
    show: true,
    order: 2,
    id: "5",
    img: "./sites-2022/tic-tac-toe-win.png",
    desc: "Tic-Tac-Toe game built from scratch using HTML, CSS, and JavaScript!<br><br> Game includes player name input screens, a persistent score tracking system, sound effects, a sound toggle system, glow animations to guide the user, scoreboard with player name display, win screen with an imported confetti effect, loss screen, draw conditions, clear board button, full reset button, and more!",
    git: "https://github.com/Jakalanern/Tic-Tac-Toe",
    demo: "https://jakalanern.github.io/Tic-Tac-Toe/",
    alt: "Photo of Tic Tac Toe Game",
  },
  {
    show: true,
    order: 4,
    id: "3",
    img: "./sites-2022/budget.png",
    desc: "Budget Calculator built from scratch using HTML, CSS, and JavaScript!<br><br> Features trackable expenses that append themselves to a list. Each expense is fully editable and removable. All expenses added or removed will be calculated into remaining balance based off of the overall budget specified!",
    git: "https://github.com/Jakalanern/Challenge-16-Budget-Application-Intermediate",
    demo: "https://jakalanern.github.io/Challenge-16-Budget-Application-Intermediate/",
    alt: "Photo of Budget Calculator App",
  },
  {
    show: true,
    order: 5,
    id: "4",
    img: "./sites-2022/todo-list.png",
    desc: "To-do list built from scratch using HTML, CSS, and JavaScript!<br><br> On input, a todo-item is created and appended to a list. Each todo-item can be crossed out, is fully editable, and removable.",
    git: "https://github.com/Jakalanern/Challenge-12-To-Do-List",
    demo: "https://jakalanern.github.io/Challenge-12-To-Do-List/",
    alt: "Photo of Todo List App",
  },
  {
    show: true,
    order: 10,
    id: "6",
    img: "./sites-2022/chuck-norris.png",
    desc: "Random Joke Generator using an API and built from scratch using HTML, CSS, and JavaScript!<br><br> Used the fetch API to GET, then parsed the response to JSON and used that data to display a random joke on each button press. Taught me an understanding of Promises, AJAX, GET, POST, PUT, DELETE etc...",
    git: "https://github.com/Jakalanern/Random-Joke-Generator-API-Fetch-",
    demo: "https://jakalanern.github.io/Random-Joke-Generator-API-Fetch-/",
    alt: "Photo of Random Joke App",
  },
  {
    show: true,
    order: 9,
    id: "7",
    img: "./sites-2022/random-person.png",
    desc: "Random Person Generator using an API and built from scratch using HTML, CSS, and JavaScript!<br><br> Used the fetch API and Async callbacks to GET, then parsed the response to JSON and used that data to display a random person on each button press.",
    git: "https://github.com/Jakalanern/Random-Person-Generator-Async-JS",
    demo: "https://jakalanern.github.io/Random-Person-Generator-Async-JS/",
    alt: "Photo of Random Joke App",
  },
  {
    show: true,
    order: 8,
    id: "8",
    img: "./sites-2022/grocery.png",
    desc: "Grocery List built from scratch with HTML, CSS, and JavaScript!<br><br> Web app that allows you to create any grocery item you like and append them to a list. Also provides feedback to the user with a message upon item submit, item remove, and full clear!",
    git: "https://github.com/Jakalanern/Challenge-13-Grocery-List",
    demo: "https://jakalanern.github.io/Challenge-13-Grocery-List/",
    alt: "Photo of Random Joke App",
  },
  {
    show: true,
    order: 7,
    id: "9",
    img: "./sites-2022/course-generator.png",
    desc: "Course Generator built from scratch with HTML, CSS, and JavaScript!<br><br> Involves creating and cloning elements based off of user input, as well as generating a random image for each course made. Input outline color changes to green when character requirements are met, and includes conditions to prevent form submission without all forms being filled first.",
    git: "https://github.com/Jakalanern/Challenge-14-Course-Form",
    demo: "https://jakalanern.github.io/Challenge-14-Course-Form-OOP/",
    alt: "Photo of Random Joke App",
  },
  {
    show: true,
    order: 6,
    id: "10",
    img: "./sites-2022/calculator.png",
    desc: "Fully functioning calculator built from scratch with HTML, CSS, and JavaScript!<br><br> All operations are possible using this calculator, supports floating point numbers, and includes a clear button.",
    git: "https://github.com/Jakalanern/Challenge-10-Calculator",
    demo: "https://jakalanern.github.io/Challenge-10-Calculator/",
    alt: "Photo of Calculator App",
  },
];
let isHovered = false;
let hoverCount = 0;
// Sort projects by order
let sortedProjects = projects
  .sort(function (a, b) {
    return a.order - b.order;
  })
  .filter(function (project) {
    if (project.show === true) {
      projects.pop[project];
      return project;
    }
  });

console.log(sortedProjects);

//DEFAULTS
image.src = sortedProjects[0].img;
image.alt = sortedProjects[0].alt;
imageDesc.innerHTML = sortedProjects[0].desc;

prevBtn.addEventListener("click", function () {
  if (count > 0) {
    count--;
    changeImg(count);
  } else {
    count = sortedProjects.length - 1;
    changeImg(count);
  }
});
nextBtn.addEventListener("click", function () {
  if (count < sortedProjects.length - 1) {
    count++;
    changeImg(count);
  } else {
    count = 0;
    changeImg(count);
  }
});

gitBtn.addEventListener("click", function () {
  window.open(sortedProjects[count].git);
});

demoBtn.addEventListener("click", function () {
  // Take to projects[count].demo
  window.open(sortedProjects[count].demo);
});

slider.addEventListener("mouseover", function () {
  hoverContainer.style.transition = "opacity .25s";
  hoverContainer.style.opacity = 0;
});
slider.addEventListener("mouseout", function () {
  hoverContainer.style.opacity = 1;
});

function changeImg() {
  // Display project
  image.src = sortedProjects[count].img;
  image.alt = sortedProjects[count].alt;
  imageDesc.innerHTML = sortedProjects[count].desc;
}
