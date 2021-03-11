## How would we build this (in JS)?

- We need some functions
  - Increment, IncrementCompleted
  - Maybe a different function to remove completed?
  - DecrementCompleted?
  - MarkCompleted, MarkIncompleted
- How do we do strikethrough?
  - Another function?
  - How does JS interact with CSS?

## Functions

- Writing Functions
- Calling Functions

## Retreving DOM elements

- By the way, what is the DOM?
  - You should go look up what the DOM is.
- We can use document.getElementById to retrieve an HTML element.
  - Note that the HTML elements actually have to be rendered before the JavaScript runs
    - We can put the JS script tag at the bottom or use defer
  - There are LOTS of other ways to retrieve HTML elements from the DOM

## Types

- We tried to add 1 to numCompleted.innerText, but it gave us "01" instead of "1". And when we tried to do it three times, we got "0111" instead of "3". Why is that?
  - Adding a string to a number results in a "smooshed" string. JS literally just glues the number on to the end of the string as if it were also a string.
  - We can instead coerce the string into a number with the `Number()` function.
- Typescript is a tool that makes these type errors less problematic.

## Assignment

- Get this project to a point where you can click on a grocery item and it get the linethough style, and the completed tag updates accordingly.
- You'll need to learn about:
  - adding event listeners
  - changing style attributes
  - writing custom functions
  - Keeping track of data