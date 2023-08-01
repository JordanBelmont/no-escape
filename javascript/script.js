let carousel = document.getElementById('carousel');
let image = document.getElementById('image');
let title = document.getElementById('title');
let story = document.getElementById('story');
let difficultyOne = document.getElementById('difficultyOne');
let difficultyTwo = document.getElementById('difficultyTwo');
let difficultyThree = document.getElementById('difficultyThree');
let difficultyFour = document.getElementById('difficultyFour');
let difficultyFive = document.getElementById('difficultyFive');
let fearOne = document.getElementById('fearOne');
let fearTwo = document.getElementById('fearTwo');
let fearThree = document.getElementById('fearThree');
let fearFour = document.getElementById('fearFour');
let fearFive = document.getElementById('fearFive');
let time = document.getElementById('time');
let players = document.getElementById('players');

let previous = document.getElementById('previous');
let next = document.getElementById('next');


let dots = document.getElementById('dots');

// GLOBAL VALUES
let room_index = 0;

// ROOMS
let rooms = [
   {
      img: "images/Toy-Box.png",
      title: "Toy Box",
      storyone: "For weeks, reports of the serial killer known as 'The Toyman' have flooded news outlets, the last thing you ever expected was to wind up as one of his victims.",
      storytwo: "Lost in a hand-crafted maze of building blocks, ball pits and ragged toys, you must escape from this nightmare, before playtime is over forever.",
      difficultyone: "icons/redskull.png",
      difficultytwo: "icons/redskull.png",
      difficultythree: "icons/redskull.png",
      difficultyfour: "icons/whiteskull.png",
      difficultyfive: "icons/whiteskull.png",
      fearone: "icons/redskull.png",
      feartwo: "icons/redskull.png",
      fearthree: "icons/redskull.png",
      fearfour: "icons/redskull.png",
      fearfive: "icons/whiteskull.png",
      time: "60 mins",
      players: "1-6"
   },
   {
      img: "images/Doom-Town.png",
      title: "Doom Town",
      storyone: "As part of the atomic testing site research crew, it was your task to simply document any findings, but you just couldn't shake the feeling you were being watched.",
      storytwo: "Trapped in an atomic-blistered ruin, you'll need to conquer your fears in order to escape, before you become a permanent resident of Doom Town.",
      difficultyone: "icons/redskull.png",
      difficultytwo: "icons/redskull.png",
      difficultythree: "icons/redskull.png",
      difficultyfour: "icons/redskull.png",
      difficultyfive: "icons/redskull.png",
      fearone: "icons/redskull.png",
      feartwo: "icons/redskull.png",
      fearthree: "icons/redskull.png",
      fearfour: "icons/redskull.png",
      fearfive: "icons/redskull.png",
      time: "60 mins",
      players: "1-4"
   },
   {
      img: "images/Moloch-Trials.png",
      title: "Moloch Trials",
      storyone: "Rumours have been spreading about the increase in missing children coinciding with the emergence of a secret society known only as 'The Embers of Tophet'.",
      storytwo: "As a local journalist, you've been invited to shed light on the order to quell some of the allegations. But you're about to learn why this order is so exclusive.",
      difficultyone: "icons/redskull.png",
      difficultytwo: "icons/redskull.png",
      difficultythree: "icons/redskull.png",
      difficultyfour: "icons/redskull.png",
      difficultyfive: "icons/whiteskull.png",
      fearone: "icons/redskull.png",
      feartwo: "icons/redskull.png",
      fearthree: "icons/redskull.png",
      fearfour: "icons/whiteskull.png",
      fearfive: "icons/whiteskull.png",
      time: "60 mins",
      players: "1-6"
   }
]

// FUNCTIONS

changeRoom = (room_index) => {

   // CHANGE ROOM
   image.src = rooms[room_index].img;
   title.textContent = rooms[room_index].title;
   storyone.textContent = rooms[room_index].storyone;
   storytwo.textContent = rooms[room_index].storytwo;
   difficultyOne.src = rooms[room_index].difficultyone;
   difficultyTwo.src = rooms[room_index].difficultytwo;
   difficultyThree.src = rooms[room_index].difficultythree;
   difficultyFour.src = rooms[room_index].difficultyfour;
   difficultyFive.src = rooms[room_index].difficultyfive;
   fearOne.src = rooms[room_index].fearone;
   fearTwo.src = rooms[room_index].feartwo;
   fearThree.src = rooms[room_index].fearthree;
   fearFour.src = rooms[room_index].fearfour;
   fearFive.src = rooms[room_index].fearfive;
   time.textContent = rooms[room_index].time;
   players.textContent = rooms[room_index].players;
}

// ! NEED TO FIX SLIDERS !

// SLIDER DOTS
document.querySelectorAll('.dot').forEach((selector, room_index) => {
   selector.addEventListener('click', function () {
      document.querySelector('.active').classList.remove('active');
      selector.classList.add('active');
      changeRoom(room_index);
   })
});

// NEXT ROOM
next.addEventListener('click', function nextRoom() {
   if (room_index < rooms.length - 1) {
      room_index += 1;
   } else {
      room_index = 0;
   }
   document.querySelector('.active').classList.remove('active');
   dots.children[room_index].classList.add('active');
   changeRoom(room_index);
});

// PREVIOUS ROOM
previous.addEventListener('click', function prevRoom() {
   if (room_index > 0) {
      room_index -= 1;
   } else {
      room_index = 2;
   }
   document.querySelector('.active').classList.remove('active');
   dots.children[room_index].classList.add('active');
   changeRoom(room_index);
});

changeRoom(room_index);

// BURGER
let nav = document.getElementById('navBurger');
let burger = document.getElementById('burgerButton');

burger.addEventListener('click', () => {
   burger.classList.toggle('opened');
   burger.setAttribute('aria-expanded', nav.classList.contains('nav'))
   nav.classList.toggle('nav');
});
