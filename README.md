# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Solution URL](https://www.frontendmentor.io/solutions/responsive-age-calculator-page-using-js-and-jquery-SoQUPmYYr6)
- Live Site URL: [Live site URL](https://ntshpawar.github.io/age-calculator-app-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [jquery](https://jquery.com//) - JS library

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

```js
function getDateDifference(e) {
  e.preventDefault();

  // Logic coede
}
```

Prevents your page from reloading on form submit.

### Continued development

Used jquery in this project for easing js code. Took some time in logic building.

### Useful resources

- [Difference between two dates](https://stackoverflow.com/questions/17732897/difference-between-two-dates-in-years-months-days-in-javascript) - This helped me for JS Logic.

## Author

- Frontend Mentor - [@ntshpawar](https://www.frontendmentor.io/profile/ntshpawar)
- Twitter - [@ntshpawar](https://www.twitter.com/ntshpawar)
