let previous = document.getElementById('previous');
let next = document.getElementById('next');

let image = document.getElementById('image');
let title = document.getElementById('title');
let story = document.getElementById('story');
let stat = document.getElementById('stat');
let rating = document.getElementById('rating');

// Global values
let room_index = 0;

// Rooms
let rooms = [
   {
      img: "images/Toy-Box.png",
      title: "Toy Box",
      story: "For weeks, reports of the serial killer known as 'The Toyman' have flooded news outlets, the last thing you ever expected was to wind up as one of his victims. Trapped in his labyrinth of building blocks, ball pits and ragged toys, you must escape from this nightmare, before playtime is over forever.",
      difficulty: "icons/skull.png",
      fear: "icons/skull.png",
      time: "60 mins",
      players: "1-6"
   },
   {
      img: "images/Doom-Town.png",
      title: "Doom Town",
      story: "For weeks, reports of the serial killer known as 'The Toyman' have flooded news outlets, the last thing you ever expected was to wind up as one of his victims. Trapped in his labyrinth of building blocks, ball pits and ragged toys, you must escape from this nightmare, before playtime is over forever.",
      difficulty: "icons/skull.png",
      fear: "icons/skull.png",
      time: "60 mins",
      players: "1-6"
   },
   {
      img: "images/Moloch-Trials.png",
      title: "The Moloch Trials",
      story: "For weeks, reports of the serial killer known as 'The Toyman' have flooded news outlets, the last thing you ever expected was to wind up as one of his victims. Trapped in his labyrinth of building blocks, ball pits and ragged toys, you must escape from this nightmare, before playtime is over forever.",
      difficulty: "icons/skull.png",
      fear: "icons/skull.png",
      time: "60 mins",
      players: "1-6"
   }
]

// * FUNCTIONS

changeRoom = (room_index) => {

   // Change room
   image.src = rooms[room_index].img;
   title.textContent = rooms[room_index].title;
   story.textContent = rooms[room_index].story;
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