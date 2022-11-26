let previous = document.getElementById('previous');
let next = document.getElementById('next');

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

// Global values
let room_index = 0;

// Rooms
let rooms = [
   {
      img: "images/Toy-Box.png",
      title: "Toy Box",
      storyone: "For weeks, reports of the serial killer known as 'The Toyman' have flooded news outlets, the last thing you ever expected was to wind up as one of his victims.",
      storytwo: "Trapped in a hand-crafted maze of building blocks, ball pits and ragged toys, you must escape from this nightmare, before playtime is over forever.",
      difficultyone: "icons/skull.png",
      difficultytwo: "icons/skull.png",
      difficultythree: "icons/skull.png",
      difficultyfour: "",
      difficultyfive: "",
      fearone: "icons/skull.png",
      feartwo: "icons/skull.png",
      fearthree: "icons/skull.png",
      fearfour: "icons/skull.png",
      fearfive: "",
      time: "60 mins",
      players: "1-6"
   },
   {
      img: "images/Doom-Town.png",
      title: "Doom Town",
      storyone: "As part of the atomic testing site research crew, it was your task to simply document finding, but you just couldn't shake the feeling you were being watched.",
      storytwo: "Trapped in an atomic-blistered ruin, you'll need to conquer your fears in order to escape your ordeal before you become a permanent resident of Doom Town.",
      difficultyone: "icons/skull.png",
      difficultytwo: "icons/skull.png",
      difficultythree: "icons/skull.png",
      difficultyfour: "icons/skull.png",
      difficultyfive: "",
      fearone: "icons/skull.png",
      feartwo: "icons/skull.png",
      fearthree: "icons/skull.png",
      fearfour: "icons/skull.png",
      fearfive: "icons/skull.png",
      time: "60 mins",
      players: "1-4"
   },
   {
      img: "images/Moloch-Trials.png",
      title: "The Moloch Trials",
      storyone: "Rumours have been spreading about the increase in missing children coinciding with the emergence of a secret society known only as 'The Embers of Tophet'.",
      storytwo: "As a local journalist, you've been invited to shed light on the order to quell some of the allegations. But you're about to learn why this order has such an exclusive membership.",
      difficultyone: "icons/skull.png",
      difficultytwo: "icons/skull.png",
      difficultythree: "icons/skull.png",
      difficultyfour: "icons/skull.png",
      difficultyfive: "icons/skull.png",
      fearone: "icons/skull.png",
      feartwo: "icons/skull.png",
      fearthree: "icons/skull.png",
      fearfour: "",
      fearfive: "",
      time: "60 mins",
      players: "1-6"
   }
]

// * FUNCTIONS

changeRoom = (room_index) => {

   // Change room
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

// Next Room
next.addEventListener("click", function nextRoom() {
   if (room_index < rooms.length - 1) {
      room_index += 1;
   } else {
      room_index = 0;
   }
   changeRoom(room_index);
});

// Previous Room
previous.addEventListener("click", function prevRoom() {
   if (room_index > 0) {
      room_index -= 1;
   } else {
      room_index = rooms.length;
   }
   changeRoom(room_index);
});

changeRoom(room_index);