# odin-etch-a-sketch

This project made me think alot about DOM manipulation, order of execution, and other things. First off, things that I left for later when I have greater mastery - dynamically resize boxes to fit width and height of the windows, both on reset and on resizing the window.

The first step of dynamically creating a 16x16 grid of boxes was easy, but the button resizing gave me a lot of trouble. At the moment, I have my button event listener in my HTML, because I needed it to load after the button was created in the HTML, and wasn't sure how to do it in JS (though I'm sure when I come back to this project in a couple months I will know an easy solution.) After that, it was just a matter of passing in a variable amount of rows with default of 16 into the create the grid function, and using .setProperty to change the grid-template-columns to make it display evenly.

All in all, this project gave me a decent amount of pause, and alot of research was done, but I was able to get it done in a couple hours over 2 days.