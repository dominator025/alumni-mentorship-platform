# Alumni Mentorship Platform — Interview Preparation Guide

---

# Project Overview

**What is this project?**
A simple, single-page web application called AlumniConnect that lets students browse alumni mentors, book a mentorship session, and post questions in a discussion forum.

**Why was it built?**
To demonstrate fundamental web development skills — HTML structure, CSS styling, and JavaScript DOM manipulation — in a clean, readable, beginner-friendly way.

**What problem does it solve?**
Students often lack access to career guidance. This platform gives them a way to discover alumni mentors, request a session, and ask questions in a community forum.

**Who are the users?**
- Students looking for career mentorship
- Alumni who want to guide juniors

**Main Features**
- Hero section with a call-to-action button
- Activity dashboard showing live stats (Total Mentors, Booking Requests, Discussion Posts)
- Mentor cards grid generated dynamically from a JavaScript array
- Booking form with form validation and success feedback
- Discussion forum where posts appear instantly

**Future Improvements**
- Connect to a real backend (Node.js + database) to store bookings
- Add user login and authentication
- Allow mentors to accept or reject session requests
- Add email notifications
- Store forum posts in localStorage so they persist on refresh

---

# Project Architecture

**Folder Structure**
```
alumini-portal/
├── index.html       ← Main HTML page
├── style.css        ← All CSS styling
├── script.js        ← All JavaScript logic
├── assets/
│   ├── mentor1.png
│   ├── mentor2.png
│   ├── mentor3.png
│   └── mentor4.png
└── README.md
```

**Entry Point**
`index.html` is the entry point. The browser loads it, which links `style.css` in the `<head>` and `script.js` at the bottom of `<body>`.

**File Responsibilities**

| File | Responsibility |
|---|---|
| `index.html` | Structure and layout of every section |
| `style.css` | All visual styling, layout, hover effects, responsiveness |
| `script.js` | Data, dynamic rendering, form handling, stat counters |
| `assets/` | Mentor profile images |

**Data Flow**
1. Browser loads `index.html`
2. `script.js` runs at the bottom of the page
3. `displayMentors()` loops through the `mentors` array and creates HTML cards
4. Cards are appended to `#mentor-grid` in the DOM
5. Mentor names are also injected into the booking form dropdown
6. Event listeners watch both forms for submissions
7. On submission, counters increment and `updateDashboard()` updates the stat numbers

**How the Application Starts**
The last two lines of `script.js` are:
```js
displayMentors();
updateDashboard();
```
These run immediately when the script loads, rendering the cards and setting the initial dashboard values.

---

# Technologies Used

## HTML5
- **What is it?** The standard markup language used to structure web pages.
- **Why was it chosen?** It is the foundation of every webpage. No alternatives exist for basic structure.
- **Where is it used?** `index.html` — defines every section, form, input, button, and nav link.

## CSS3
- **What is it?** A stylesheet language that controls visual appearance of HTML elements.
- **Why was it chosen?** Pure CSS was used to keep the project simple and dependency-free.
- **Where is it used?** `style.css` — layout (Flexbox, Grid), card styles, hover effects, responsive breakpoints.

## Vanilla JavaScript
- **What is it?** Plain JavaScript with no libraries or frameworks.
- **Why was it chosen?** Keeps the code beginner-friendly, readable, and easy to explain in an interview.
- **Where is it used?** `script.js` — mentor array data, dynamic card creation, form event handling, stat counter updates.

---

# HTML Interview Questions

**Q: Why do we use semantic HTML?**
Semantic tags like `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` describe the meaning of the content, not just its appearance. This improves accessibility, SEO, and code readability.

**Q: What is the difference between `<div>` and `<section>`?**
`<div>` is a generic container with no semantic meaning. `<section>` represents a standalone section of content with a clear topic, like the Mentors section or Booking section in this project.

**Q: What is the difference between `id` and `class`?**
`id` is unique — only one element per page should have the same id (e.g., `id="booking-form"`). `class` can be shared by multiple elements (e.g., `class="mentor-card"` is used on all 4 cards).

**Q: How does the booking form work in HTML?**
The `<form>` element wraps inputs. Each input has `type`, `id`, `required`, and `placeholder` attributes. The `<label>` tag uses `for` to link to its matching input's `id`.

**Q: What input types are used in this project?**
- `type="text"` — Student Name, Forum Name
- `type="email"` — Email Address (browser validates email format)
- `type="date"` — Preferred Date
- `<select>` — Mentor dropdown
- `<textarea>` — Message and Question fields

**Q: Why is the button type `submit`?**
`type="submit"` tells the browser to trigger the form's `submit` event when clicked. Without it, clicking the button does nothing useful.

**Q: Why do we use `<label>` with forms?**
Labels improve accessibility — screen readers read them aloud. The `for` attribute links the label to the correct input using the input's `id`.

**Q: What do the meta tags in `<head>` do?**
- `<meta charset="UTF-8">` — supports all characters and special symbols
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` — makes the site responsive on mobile devices

**Q: Where is `<article>` used and why?**
Each mentor card is an `<article>` element because it is a self-contained, independently meaningful piece of content — a mentor's profile.

**Q: Why is the `<script>` tag placed at the bottom of `<body>`?**
So the HTML elements load first. If the script runs before the HTML exists, `querySelector` returns `null` and the code breaks.

---

# CSS Interview Questions

**Q: What is a CSS selector?**
A selector targets which HTML element to style. In this project: `nav`, `.mentor-card`, `#stat-mentors`, `.btn:hover` are all different selectors.

**Q: What is CSS specificity?**
Specificity decides which rule wins when two rules target the same element. IDs (`#id`) beat classes (`.class`), which beat tags (`div`). Example: `#stat-mentors` is more specific than `.stat-number`.

**Q: Explain the CSS Box Model.**
Every element is a box with: content → padding → border → margin. In this project, `box-sizing: border-box` is applied globally so padding and border are included inside the element's width.

**Q: How is Flexbox used in this project?**
- `nav` uses `display: flex` with `justify-content: space-between` to push the logo left and links right.
- `.stats-grid` uses `display: flex` with `flex-wrap: wrap` so stat cards wrap on small screens.
- `.post-header` uses `display: flex` with `justify-content: space-between` to show name and time on the same row.

**Q: How is CSS Grid used in this project?**
- `.mentor-grid` uses `display: grid` with `grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))` — this auto-fills columns that are at least 260px wide.
- `.forum-container` uses `grid-template-columns: 1fr 1fr` — two equal columns for the forum form and posts list.

**Q: What is `position: sticky`?**
It makes the element scroll normally until it hits a specified position, then sticks there. The `<header>` uses `position: sticky; top: 0` so the navigation bar stays visible as you scroll.

**Q: What is the difference between `margin` and `padding`?**
`padding` is space inside the element between content and border. `margin` is space outside the element between it and other elements.

**Q: How is responsive design handled in this project?**
A media query `@media (max-width: 768px)` changes the layout for screens 768px or smaller. On mobile: nav stacks vertically, the forum grid becomes one column, and font sizes reduce.

**Q: What is a CSS transition? Where is it used?**
A transition smoothly animates a property change over time. Used on:
- Nav links: `transition: color 0.2s ease` (color changes on hover)
- Buttons: `transition: background-color 0.2s ease`
- Mentor cards: `transition: transform 0.2s ease, box-shadow 0.2s ease`

**Q: What pseudo-class is used for hover effects?**
`:hover` — applied to nav links, buttons, and mentor cards. Example: `.mentor-card:hover { transform: translateY(-5px); }` lifts the card up slightly on hover.

**Q: What is `overflow-y: auto`?**
It adds a vertical scrollbar only when the content is taller than the container. Used on `.forum-posts-container` with `max-height: 500px` so long post lists become scrollable.

**Q: What CSS units are used?**
- `px` — fixed sizes for font sizes, padding, border-radius
- `%` — for widths (e.g., `width: 100%` on inputs and submit button)
- `fr` — fractional units in CSS Grid (e.g., `1fr 1fr`)

**Q: What is `z-index` and where is it used?**
`z-index` controls which element appears on top when elements overlap. The sticky `<header>` uses `z-index: 100` so it always appears above other page content when scrolling.

**Q: What is `box-shadow`?**
It adds a shadow effect around an element. Syntax: `box-shadow: x-offset y-offset blur color`. Mentor cards use `box-shadow: 0 4px 6px rgba(0,0,0,0.05)` for a subtle depth effect.

---

# JavaScript Interview Questions

**Q: What is the difference between `var`, `let`, and `const`?**
`var` is function-scoped and can be re-declared. `let` is block-scoped and can be reassigned. `const` is block-scoped and cannot be reassigned. This project uses `var` throughout for simplicity and beginner readability.

**Q: What is a JavaScript array?**
An ordered list of values. The `mentors` array holds 4 objects, one per mentor. Example: `mentors[0].name` returns `"Sarah Jenkins"`.

**Q: What is a JavaScript object?**
A collection of key-value pairs. Each mentor is an object with keys like `name`, `domain`, `experience`, `bio`, `availability`, `photo`.

**Q: What is a for loop? How is it used here?**
A `for` loop repeats code a set number of times. In `displayMentors()`, it loops from `i = 0` to `mentors.length - 1`, creating one card per mentor.

**Q: What is `document.querySelector()`?**
It finds and returns the first HTML element matching a CSS selector. Example: `document.querySelector("#mentor-grid")` finds the element with id `mentor-grid`.

**Q: What is `addEventListener()`?**
It attaches a function to run when a specific event happens on an element. Example: `bookingForm.addEventListener("submit", function(event) { ... })` runs code when the form is submitted.

**Q: What is `event.preventDefault()`?**
It stops the browser's default behavior for an event. For forms, the default behavior is to reload the page. Calling `event.preventDefault()` stops that reload, keeping everything on the same page.

**Q: What is `document.createElement()`?**
Creates a new HTML element in memory. Example: `document.createElement("article")` creates a new `<article>` element that doesn't exist in the DOM yet.

**Q: What is `appendChild()`?**
Adds a child element inside a parent element. Example: `mentorGrid.appendChild(card)` inserts the newly created mentor card into the `#mentor-grid` container in the DOM.

**Q: What is `textContent`?**
It sets or gets the plain text content of an element. Example: `heading.textContent = mentor.name` sets the card heading text to the mentor's name.

**Q: What is `insertBefore()`?**
Inserts a new element before a specified existing element. Used in the forum to add new posts at the top: `postsList.insertBefore(postItem, postsList.firstChild)`.

**Q: What is `element.style.display`?**
It directly sets the CSS `display` property via JavaScript. Used to show/hide the booking success message: `bookingSuccess.style.display = "block"` (show) and `"none"` (hide).

**Q: What is `setTimeout()`?**
Runs a function once after a delay in milliseconds. Used to auto-hide the booking success message after 5 seconds: `setTimeout(function() { ... }, 5000)`.

**Q: What is `form.reset()`?**
Clears all input fields in a form back to their default values. Called after both the booking form and forum form are successfully submitted.

**Q: What is scope in JavaScript?**
Scope is where a variable is accessible. `var` variables declared inside a function are only accessible within that function. Variables declared at the top level (like `mentors`, `bookingRequestsCount`) are global.

**Q: What is hoisting?**
JavaScript moves `var` declarations and `function` declarations to the top of their scope before code runs. This means you can call a function before it's defined in the file (though with `var`, the value is `undefined` until assigned).

**Q: What is a closure? Is it used in this project?**
A closure is when an inner function remembers variables from its outer function even after the outer function finishes. Yes — the `bookBtn.addEventListener` uses an IIFE (Immediately Invoked Function Expression) to capture the correct `mentor.name` for each button in the loop.

**Q: What is `element.value`?**
Gets the current value typed into an input or selected in a dropdown. Used to read `forum-name` and `forum-question` input values before creating a post.

**Q: What is JSON?**
JavaScript Object Notation — a text format for storing and sharing structured data. The mentor objects in the array follow JSON-like structure (key-value pairs).

**Q: Does this project use Local Storage?**
No. All data (booking count, post count, posts) lives only in JavaScript variables. Refreshing the page resets everything. Local Storage would require `localStorage.setItem()` and `localStorage.getItem()`.

**Q: Does this project use Promises or Async/Await?**
No. There are no API calls or asynchronous operations. All data is static and already available in the `mentors` array.

---

# Git Questions

**Q: What is Git?**
A version control system that tracks changes to your code over time, so you can undo mistakes and collaborate with others.

**Q: What is a repository?**
A folder tracked by Git that stores all your project files and their full history of changes.

**Q: What is `git clone`?**
Downloads a copy of a remote repository to your local computer.

**Q: What is `git commit`?**
Saves a snapshot of your current changes with a description message. Example: `git commit -m "Add simple README"`.

**Q: What is `git push`?**
Uploads your local commits to the remote repository on GitHub.

**Q: What is `git pull`?**
Downloads the latest changes from the remote repository and merges them into your local branch.

**Q: What is a branch?**
A separate line of development. `main` is the default branch in this project.

**Q: What is `git merge`?**
Combines changes from one branch into another branch.

**Q: What is a fork?**
A personal copy of someone else's repository on your GitHub account so you can make changes without affecting the original.

**Q: What is GitHub?**
A cloud platform that hosts Git repositories online and adds collaboration features like pull requests, issues, and actions.

**Q: What is a README?**
A `README.md` file that describes your project — what it does, the tech stack, and key features. It is shown on the GitHub repository homepage.

**Q: What is `.gitignore`?**
A file that tells Git which files or folders to ignore and not track. For example, `node_modules/`, `.env`, or OS files like `.DS_Store`.

**Q: How do you resolve a merge conflict?**
When two branches edit the same line differently, Git marks the conflict in the file. You manually edit the file to choose which version to keep, then `git add` and `git commit` to finish the merge.

**Q: What commands were used for this project?**
```
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <url>
git push -u origin main
```

---

# Project Specific Questions

**Q: How does mentor booking work?**
The user clicks "Request Session" on a mentor card. JavaScript reads the mentor's name and pre-fills the booking form dropdown, then scrolls to the booking section. The user fills in their details and submits. `event.preventDefault()` stops a page reload, the counter increments, a success message appears, and the form resets.

**Q: How are mentor cards rendered dynamically?**
The `displayMentors()` function loops through the `mentors` array using a `for` loop. For each mentor, it creates an `<article>` element, then creates and appends child elements (image, name, domain, experience, bio, availability, button) one by one, then appends the completed card to `#mentor-grid`.

**Q: How is state managed in this project?**
State is managed using simple JavaScript variables at the top of `script.js`:
- `totalMentorsCount` = `mentors.length` (4)
- `bookingRequestsCount` = starts at 0, increments on each booking
- `discussionPostsCount` = starts at 0, increments on each forum post

The `updateDashboard()` function reads these variables and updates the DOM text.

**Q: How is routing handled?**
There is no JavaScript routing. Navigation links use HTML anchor tags with `href="#section-id"` (e.g., `href="#mentors"`) which scroll the page to the matching `id` on the same page. This is called single-page anchor navigation.

**Q: How are the "Request Session" buttons connected to the booking form?**
An IIFE (closure) is used inside the loop to capture the correct mentor name. When clicked, the button sets `mentorSelect.value = selectedMentorName` and calls `scrollIntoView({ behavior: "smooth" })` on the `#booking` section.

**Q: How is the booking form dropdown populated?**
Inside `displayMentors()`, after building each card, an `<option>` element is created and appended to the `#mentor-select` dropdown. So the dropdown is also built dynamically from the same `mentors` array.

**Q: How is responsive design achieved?**
A single media query `@media (max-width: 768px)` handles mobile layout. It changes the nav to stack vertically, reduces heading font sizes, and switches the forum's two-column grid to a single column.

**Q: How are forum posts displayed?**
When the forum form is submitted, JavaScript reads the name and question values, creates a new `<div class="post-item">` with a header (author + "Just now") and content, then uses `insertBefore` to add it to the top of `#posts-list`. The "No posts yet" text is hidden on the first post.

**Q: How is form validation handled?**
HTML's built-in `required` attribute is used on all inputs. The browser shows a validation warning if a required field is empty when the user tries to submit. `type="email"` also validates the format of the email field automatically.

**Q: How does data flow through the application?**
`mentors` array (data) → `displayMentors()` (creates DOM nodes) → appended to `#mentor-grid` (display). User interacts with forms → event listeners catch `submit` event → counter variables update → `updateDashboard()` updates DOM text.

**Q: How would you improve this project?**
- Add `localStorage` so bookings and posts survive a page refresh
- Connect a backend API to save booking requests to a database
- Add real-time updates using WebSockets for the forum
- Add a filter/search bar to find mentors by domain
- Allow mentors to respond to forum posts

---

# Why Did You Choose This Approach?

**Q: Why Vanilla JavaScript instead of React?**
This project is a beginner-level portfolio piece. Using React would add unnecessary complexity (JSX, components, state management, build tools). Vanilla JS keeps everything readable and easy to explain in an interview.

**Q: Why a single HTML file instead of multiple pages?**
The scope is small and simple. Using anchor navigation (`#section-id`) within one page avoids the need for routing logic or a server, and the site can be opened directly by double-clicking `index.html`.

**Q: Why `var` instead of `let` or `const`?**
To demonstrate beginner-level JavaScript fundamentals clearly. `var` is the most basic variable declaration and avoids confusion for someone just learning scope rules.

**Q: Why is data stored in a JavaScript array instead of a database?**
No backend is needed. The mentor data is static — it doesn't change. An array inside the script is the simplest way to store and loop through this data without any server.

**Q: Why are stats stored in variables instead of localStorage?**
The requirement was no persistent storage. Variables in memory are the simplest approach. Every page refresh resets the counters, which is acceptable for this demo scope.

**Q: Why use CSS Grid for mentor cards?**
`grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))` automatically adjusts from 4 columns on wide screens down to 1 column on mobile without any media query. It is the most flexible approach for a card grid.

**Q: Why is the `<script>` tag at the bottom of `<body>`?**
So the HTML elements (like `#mentor-grid`) exist in the DOM before `querySelector` tries to find them. If the script ran from `<head>`, all `querySelector` calls would return `null`.

---

# Possible Improvements

- **Persistent storage** — Use `localStorage` to save bookings and forum posts across page refreshes
- **Backend integration** — Connect to Node.js + Express + MongoDB to actually store and retrieve data
- **User authentication** — Let students and mentors create accounts and log in
- **Search and filter** — Filter mentors by domain or availability
- **Mentor response feature** — Let mentors reply to forum questions
- **Email confirmation** — Send confirmation emails on booking using a service like EmailJS
- **Real mentor data** — Load mentor data from an API instead of a hardcoded array
- **Booking calendar** — Integrate a date/time picker that respects mentor availability

---

# Common HR Questions

**Tell me about yourself.**
"I am a web development student who enjoys building clean, practical projects. I recently built an Alumni Mentorship Platform to practice HTML, CSS, and JavaScript fundamentals. I focus on writing readable, well-commented code that I can confidently explain."

**Walk me through your project.**
"The project is a single-page website called AlumniConnect. It has five sections: a hero, a stats dashboard, a mentor grid, a booking form, and a discussion forum. All mentor cards are generated dynamically from a JavaScript array. The booking form and forum use event listeners to update the page without reloading. No libraries or frameworks were used."

**What was your biggest challenge?**
"The trickiest part was the IIFE inside the loop for the mentor card buttons. When using `var` inside a `for` loop, all buttons would close over the same `i` variable. Wrapping the event listener in an immediately invoked function captures the correct mentor name for each button."

**What did you learn?**
"I got a much deeper understanding of how the DOM works — creating elements, setting attributes, appending children, and listening for events. I also learned how `event.preventDefault()` works and why the script tag placement matters."

**What mistake did you make?**
"Initially I placed the `<script>` tag in the `<head>` and my `querySelector` calls were all returning `null`. I learned that the script needs to load after the HTML elements exist, so I moved it to the bottom of `<body>`."

**What is your favorite feature?**
"The dynamic mentor cards. I love how a simple JavaScript array of objects is transformed into fully styled HTML cards with interactive buttons, all through loops and DOM manipulation — no framework needed."

**How would you scale this?**
"I would add a Node.js backend with a REST API, connect it to a MongoDB database, add JWT authentication for mentor and student logins, and host it on a cloud platform. The front-end would move to React for better state management as features grow."

**Why should we hire you?**
"I write clean, readable code and I can explain every line. I understand web fundamentals deeply, not just how to copy-paste from frameworks. I am eager to learn, I ask the right questions, and I take ownership of what I build."

---

# Rapid Fire Round

| # | Question | Answer |
|---|---|---|
| 1 | What does HTML stand for? | HyperText Markup Language |
| 2 | What does CSS stand for? | Cascading Style Sheets |
| 3 | What is the DOM? | Document Object Model — the live tree of HTML elements in the browser |
| 4 | What tag wraps the entire visible page? | `<body>` |
| 5 | What does `<!DOCTYPE html>` do? | Tells the browser this is an HTML5 document |
| 6 | What is `<meta charset="UTF-8">`? | Sets the character encoding so all characters display correctly |
| 7 | What is a `<section>` vs `<div>`? | `<section>` has semantic meaning; `<div>` is a generic container |
| 8 | What does `required` do on an input? | Makes the field mandatory — form won't submit if empty |
| 9 | What is `type="email"` on an input? | Browser validates that the value is a valid email address format |
| 10 | What is `<article>` used for? | Self-contained content — used for each mentor card in this project |
| 11 | What does `id` do in HTML? | Uniquely identifies one element on the page |
| 12 | What does `class` do in HTML? | Labels an element so CSS or JS can target multiple elements |
| 13 | What is `box-sizing: border-box`? | Padding and border are included inside the element's total width |
| 14 | What is `display: flex`? | Enables Flexbox layout on a container |
| 15 | What is `display: grid`? | Enables CSS Grid layout on a container |
| 16 | What is `position: sticky`? | Element scrolls normally then sticks at a set position |
| 17 | What is `z-index`? | Controls which element appears on top when elements overlap |
| 18 | What does `transition` do in CSS? | Smoothly animates a property change over a duration |
| 19 | What does `:hover` do? | Applies styles when the user hovers the mouse over an element |
| 20 | What is a media query? | CSS rule that applies styles only at certain screen widths |
| 21 | What breakpoint is used in this project? | `max-width: 768px` for mobile layout |
| 22 | What is `overflow-y: auto`? | Adds a vertical scrollbar when content overflows the container |
| 23 | What is `border-radius`? | Rounds the corners of an element |
| 24 | What is `box-shadow`? | Adds a shadow around an element |
| 25 | What is `var` in JavaScript? | A function-scoped variable declaration |
| 26 | What is an array in JS? | An ordered list of values — `mentors` is an array of 4 objects |
| 27 | What is an object in JS? | A collection of key-value pairs — each mentor is an object |
| 28 | What does `mentors.length` return? | `4` — the number of items in the array |
| 29 | What does `document.querySelector()` do? | Returns the first element matching a CSS selector |
| 30 | What does `addEventListener()` do? | Attaches a function to run when a specific event occurs |
| 31 | What does `event.preventDefault()` do? | Stops the browser's default action (e.g., page reload on form submit) |
| 32 | What does `createElement()` do? | Creates a new HTML element in memory |
| 33 | What does `appendChild()` do? | Adds a child element inside a parent element |
| 34 | What does `textContent` do? | Gets or sets the text content of an element |
| 35 | What does `insertBefore()` do? | Inserts a new element before a specified existing element |
| 36 | What does `form.reset()` do? | Clears all inputs in a form back to default values |
| 37 | What does `setTimeout()` do? | Runs a function once after a specified delay in milliseconds |
| 38 | What is a closure? | An inner function that remembers variables from its outer scope |
| 39 | What is an IIFE? | Immediately Invoked Function Expression — a function that runs instantly |
| 40 | What is hoisting? | JS moves `var` and `function` declarations to top of scope before running |
| 41 | What is `scrollIntoView()`? | Scrolls the browser to make a specific element visible |
| 42 | What does `element.value` give you? | The current value typed or selected in an input |
| 43 | What is `style.display = "none"`? | Hides an element by setting CSS display to none |
| 44 | What is git init? | Creates a new empty Git repository in the current folder |
| 45 | What is git add .? | Stages all changed files for the next commit |
| 46 | What is git commit? | Saves a snapshot of staged changes with a message |
| 47 | What is git push? | Uploads local commits to the remote GitHub repository |
| 48 | What is a README.md? | A markdown file describing the project on GitHub |
| 49 | Why place `<script>` before `</body>`? | So HTML loads first and elements exist when JS tries to find them |
| 50 | What would you add next to this project? | localStorage for persistence, then a backend API to store bookings |

---

# Revision Sheet

## Project
- **Name:** AlumniConnect Mentorship Platform
- **Type:** Static single-page website
- **Purpose:** Connect students with alumni mentors for career guidance

## Tech Stack
| Tech | Version | Purpose |
|---|---|---|
| HTML5 | Standard | Page structure and content |
| CSS3 | Standard | Styling, layout, responsiveness |
| Vanilla JS | ES5/ES6 | Logic, DOM manipulation, event handling |

## Key Features
1. Hero section with "Find Mentor" CTA button
2. Live stats dashboard (Mentors: 4, Bookings: 0+, Posts: 0+)
3. 4 mentor cards generated dynamically from JS array
4. Booking form → success message → counter increments
5. Forum → instant post display → counter increments

## Important Functions in `script.js`
| Function | What it does |
|---|---|
| `displayMentors()` | Loops through `mentors[]`, builds and appends HTML cards |
| `updateDashboard()` | Updates stat numbers using `.textContent` |
| Booking form listener | Prevents reload, shows success, increments counter |
| Forum form listener | Creates post element, prepends to list, increments counter |

## Important Files
| File | Key Responsibility |
|---|---|
| `index.html` | All HTML structure — 6 sections, 2 forms |
| `style.css` | Flexbox nav, Grid cards, hover effects, media query |
| `script.js` | Data array, dynamic rendering, event handling, counters |
| `assets/` | 4 mentor profile images (mentor1-4.png) |

## Key Git Commands Used
```
git init
git add .
git commit -m "message"
git branch -M main
git remote add origin <url>
git push -u origin main
```

## Key Concepts to Remember
- **`event.preventDefault()`** — stops form from reloading page
- **`querySelector()`** — select elements by CSS selector
- **`createElement()` + `appendChild()`** — build and inject HTML via JS
- **`textContent`** — set text safely without HTML injection
- **IIFE in loop** — closure to capture correct value per iteration
- **`position: sticky`** — nav bar stays on screen while scrolling
- **`grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))`** — responsive card grid with zero media queries
- **`@media (max-width: 768px)`** — mobile layout breakpoint
- **`setTimeout(fn, 5000)`** — hides success message after 5 seconds
- **`scrollIntoView({ behavior: "smooth" })`** — smooth scroll to booking form

## Things to Remember Before the Interview
- [ ] Know all 4 mentor names and domains by heart
- [ ] Be able to explain `displayMentors()` step by step
- [ ] Explain why `event.preventDefault()` is needed
- [ ] Explain the IIFE closure in the card button loop
- [ ] Know the folder structure from memory
- [ ] Know what the media query breakpoint is (`768px`)
- [ ] Be ready to say "I would add localStorage next"
- [ ] Be ready to say "No frameworks were used intentionally"
