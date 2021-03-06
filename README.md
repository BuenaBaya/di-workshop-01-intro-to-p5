# Workshop 1: Introducing JavaScript with P5.js

Collaborators: [your github username] & [your partners github username]

Make sure you’re working in pairs - on a single laptop. You’ll be **pair
programming**. In pair programming, there are two roles - **driver** and
**navigator**.

The **driver** is at the keyboard. They’re responsible for typing and figuring
out syntax. They shouldn’t make decisions though! That’s the responsibility of
the **navigator**. They make decisions, and ask the driver to implement them.

Start by forking this repo:
![fork button](https://readme-pics.s3.amazonaws.com/fork_button.jpg)

Forking creates a copy of this repo in your own GitHub account. Add your partner
as a collaborator by going to 'Settings' > 'Collaborators & teams' and entering
their GitHub username in the 'Collaborators' box. That means you'll both have
access to the repo.

You should now have a copy of this git repository in your own github account.
Now, we need to get a copy on our own laptop for us to work with. Start by
opening a terminal and creating a projects/ada folder if you don't already have
one:

```sh
cd Desktop
mkdir Projects
cd Projects
```

Next, we need to clone the repo. This copies all the files and history from
github to our own computer:

```sh
git clone https://github.com/<your github username>/di-workshop-01-intro-to-p5.git
cd di-workshop-01-intro-to-p5
```

You can see that it's a git repository and some of the history by running these
commands:

```sh
git status
git log
```

> **Note:** If you get stuck in `git log`, it's because you're in something
> called a pager. This is a really old bit of software from before computers
> could scroll in the way we're used to. You can move up and down in the pager
> with your arrow keys, and exit it by pressing `q`

Finally, we need to install some bits and pieces that in our new repo to finish
setting it up:

```sh
npm install
```

---

We’ll be working with some software called P5. P5 is a **JavaScript library**
for drawing shapes - it’s used for making simple games and cool generative art.

For each of the **bold** questions below:

<h3 align="center">
  🗣 Discuss &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  👩‍💻 Change &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  👀 Observe &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  🔄 Repeat
</h3>

1. **🗣 Discuss** the question with your partner
1. **👩‍💻 Change the code** - what do you expect your changes to do?
1. **👀 Observe the results** - what happened when you ran your code? How did it
   differ from your expectations
1. **🔄 Repeat** - keep discussing, changing, and running the code until you
   feel you understand it

**The aim of this workshop is _exploration_, hopefully leading to
_understanding_. It’s really important that you _take your time_. The questions
below are _guidelines_, meant to prompt your _curiosity_. If you can’t answer a
question, use a search engine or ask someone nearby. Don’t move on until you
_fully understand_ what’s happening.**

**Explore and have fun! Be curious!**

# Setup

Now you've got the repo cloned and installed, we need to start it up:

```sh
npm start
```

This runs a web server - a little program that your browser can connect to so
that the files you write in this project can run in there. Now, when you visit
http://localhost:5000/, you'll see all your files right there.

Open the workshop folder in your editor. In VSCode, choose File > Open and
select the folder - _not any of the files inside it_. You should see all the
workshop files in the left-hand file pane.

Open this file - README.md - in your editor. Make notes in here about everything
you do. If you don't know the answer to a question, it's your job to experiment
with the code to see what you can find out.

# Sketch A

Open the `part-a` sketch in your browser, and open `part-a/sketch.js` in your
editor. The code in `sketch.js` is what's running on the page. Every time you
make a change in `sketch.js`, you need to save the file (ctrl-S or cmd-S) and
refresh your web browser (ctrl-r or cmd-r) to see the change.

---

Look at these lines:

```js
var r = 255
var g = 80
var b = 0
```

**What might these lines do?**
These are the values of the colours red (r), green (g), blue (b) between 0 and 255. Lower values represent less presence of the noted colours, with 0 being absent, and 255 being fully present.

**What happens if you change the numbers?**
Changing individual values will edit the colour profile of the background, creating a new colour from the mix of these three colour values. Using these three colours as a primary base, a multitude of colours across a gamut can be represented, including black (all at 0) and white (all at 255).

**What numbers are allowed / What numbers have an effect?**
Values from 0 to 255 are effective. Numbers below 0 will act as 0, and numbers above 255 will act as 255.

Look at this line:

```js
createCanvas(400, 400)
```

**What does createCanvas do?**
createCanvas creates a two-dimensional, four-sided shape, with the first number the width, and the second the height.

**What happens if you change the numbers?**
Changing the first number will change the width to the noted amount (in pixels), and the second number will change the height in pixels.

**What numbers are allowed/what numbers have an effect?**
Between 0 and 16384 [(2^14)-1]

**What happens if you add/remove a number?**
As it seems createCanvas works in two dimensions, another number does not in fact have any effect, when an assumption could be made for it to add depth if it was creating a three dimensional shape. Removing a number may in fact create a one dimensional shape, but it is not in fact representable. Having just one number returns a page with no visible shape, but no error returned.

**Can you guess what the `function setup() {` part does? What happens if you
change the name of setup?**
I guess this function tells the code that the following code needs to be executed in a certain way, in this case - createCanvas needs to be setup to work. Without this line, or with the word 'setup' supplanted with another words, the function is not defined properly to be executed, and therefore does not run, and provides errors in the console.

Look at this line:

```js
background(r, g, b)
```

**What does background do?**
Background defines a the colour of a shape (made with createCanvas this time) with a solid colour mixed from variables defined within the brackets.

**What happens if you change the order of the letters in background? What does
this tell you about how the computer uses them?**
Changing the order of the letters within the brackets after background tells me that the three integers are being read as red>green>blue, regardless of what the variables are named as.

**What happens if you change the number of letters?**
Changing the amount of letters to a single variable makes the backround render in grayscale. Whereas adding one more letter (to make four) reads


# Sketch B

Open the `part-b` sketch in your browser, and open `part-b/sketch.js` in your
editor.

Read the code and play with the sketch in your browser.

> **Note**: There's two main sections in the code - the bit called `setup` and
> the bit called `draw`. The code in the `setup` section runs **once**, when
> your program first starts up. The code in the `draw` section runs again and
> again and again - 60 times every second.

Look at these lines:

```js
function setup() {
  createCanvas(400, 400)
  background(0, 0, 0)
}
```

**What does setup do?**

**What do `{` `}` mean? What happens if you remove one?**

**What do the numbers in `background(0, 0, 0)` do? What happens when you change
them? How is this different from Sketch A?**

Now look at these lines:

```js
function draw() {
  fill(255, 0, 0)
  ellipse(mouseX, mouseY, 30, 30)
}
```

**What does draw do?**
draws a red circle with a black outline at the mouse cursor position 60 times per second.

Now look at:

```js
fill(255, 0, 0)
```

**What do these numbers do? What happens when you change them?**
This is the fill colour for the drawn shape.

**What does fill mean? What happens if you change it to stroke?**
Fill is the fill colour for the drawn shape. Stroke is the outline for this shape. And you can colour it and stuff.

**What happens if you remove (or comment out) this line? What about if you
include both fill and stroke on seperate lines?**

Now look at this line:

```js
ellipse(mouseX, mouseY, 30, 30)
```

**What does `ellipse` do?**
creates an ellipse at mouse x and mouse y 30x30px

**What happens if you change the numbers?**
it changes the dimension of the shape

**What do `mouseX` and `mouseY` mean?**
These are the position of the mouse cursor, and reflect in this instance the position of the drawn ellipse.

**What happens if you change the order of the items between the `(` `)`?**
it seems the first two items are the X and Y values of the location of the drawn shape, and the next two integers are the X, Y values of the dimensions of the shape. Whne you change the meeses with the numbers, the position of the ellipse stays the same, whilst the size changes.
---

**What happens if you add `background(0)` after `draw() {`? Why?**

Replace the ellipse with a triangle. Use https://p5js.org/reference/ (the 2D
primitives section) to help.

Play around with the sketch - how else can you change it?

# Sketch C

Open the `part-c` sketch in your browser, and open `part-c/sketch.js` in your
editor.

Read the code, then play with the sketch and observe what happens - try clicking
the mouse on the sketch.

Look at:

```js
if (mouseIsPressed) {
  fill(255, 0, 0)
} else {
  fill(0, 255, 0)
}
```

**What does `mouseIsPressed` mean?**

**What happens if you change `mouseIsPressed` to `keyIsPressed`?** You’ll need
to click on the sketch so it registers keyboard events – use the ctrl key if you
have issues with the keyboard.

**What does if / else do?**

**What happens if you remove the { } or ( )? Why?**

**What happens if you change 255 to mouseX ? Why?**

**Remove the outline of the circle. Use Google and the P5.js reference to help
you.**

# Challenge

In your pairs, take the code in sketch c and adapt it into a simple paint
program. The user should be able

- click and drag to paint on the screen
- press keys on the keyboard to choose a colour
  - e.g. pressing ‘r’ changes the paint colour to red, pressing ‘g’ changes the
    paint colour to green.

Use this code as a starting point:

```js
if (keyIsPressed) {
  if (key == 'r') {
    // set paint colour to red
  }
  if (key == 'g') {
    // set paint colour to green
  }
  // add more keys/colours
}
```

**Document your process in this file.**

## Extension

- Change the shape of the brush (explore other shapes like squares or triangles)
  based on a key pressed
- Change the size of the brush based on a key pressed.
