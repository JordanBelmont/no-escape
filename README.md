<p align="center">
   <h1 class="title"><span class="title-no">No</span> Escape</h1>
</p>
<h3 align="center"> 
   The Static Escape Room Webpage
</h3>

# Description
Abattoir Inc. is part of a series of static webpages I created wherein I showcase a web **_feature_** and wrap it in a **_theme_** I like.

## Feature
The main feature of Abattoir Inc. is a fully-responsive carousel.

## Theme
The chosen theme of Abattoir Inc. is a fictional horror-based Escape Room company.

# Requirements
No special requirements.
- Clone this repository to your desktop
- Navigate to the top level of the directory
- Open index.html in your browser.

# Technologies
- HTML5
- CSS
- JavaScript
- Adobe Photoshop 2022


# Issues & Bugs

## Issues
- Separating the stat labels of the room (difficulty, fear, time and players) to line up correctly with the actual stats proved impossible without using a `table`.

- I wanted to have the directional SVG arrows shift from top and bottom of the carousel to the sides as the screen size shrinks, but due to the small size of the screen, it didn't look good having the arrows squashed in at the sides.

- The SVG arrows would render when using inspect for all media query sizes, but when testing it live on a phone they wouldn't display until I set the SVG to have a specific size.

## Bugs
- The carousel can change from one slide to the next using both the directional arrows and dot indicators. However, when clicking the dots and arrows alternatingly the carousel resets to the first slide no matter where you click. https://github.com/JordanBelmont/abattoir-inc/blob/527f0f7739abecd89cdcfc89f8b53ee31ba06325/javascript/script.js#L108-L141

- The carousel can't be changed using swipes.

# Credits
CSS icons sourced from Icons8 at https://icons8.com

SVG icons sourced from heroicons at https://heroicons.com/