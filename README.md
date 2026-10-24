# ⬆️ Back To Top Button

A mini frontend project built using **HTML, CSS, and Vanilla JavaScript** that implements a floating **Back To Top** button for long webpages.

The button appears after the user scrolls down the page and smoothly takes them back to the top when clicked. This is a common UI pattern used to improve navigation and user experience on content-heavy websites.

## ✨ Features

* Floating Back To Top button
* Button appears after scrolling down the page
* Smooth scrolling back to the top
* Button remains fixed in the viewport
* Hover animation and visual feedback
* Accessible button with `title` and `aria-label`
* Clean and responsive UI
* Built entirely with Vanilla JavaScript — no frameworks or libraries

## 🛠️ Tech Stack

* HTML5
* CSS3
* Vanilla JavaScript (ES6)

## 📚 What I Learned

This project helped me understand how to build a small but useful interactive UI component using browser APIs and core JavaScript.

Key concepts explored include:

* Listening to the `scroll` event
* Detecting the current scroll position using `window.scrollY`
* Dynamically showing and hiding elements using CSS classes
* DOM selection and manipulation
* Handling click events
* Using `window.scrollTo()` for programmatic scrolling
* Implementing smooth scrolling with `behavior: "smooth"`
* Creating fixed-position UI elements with CSS
* Using CSS transitions and transforms for animations
* Improving accessibility with `aria-label` and `title`
* Understanding how JavaScript and CSS work together to create interactive UI

## 📂 Project Structure

```text
back-to-top/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate to the project folder.

3. Open `index.html` in your browser.

No installation or external dependencies are required.

## 🎯 How It Works

The button is initially hidden using CSS.

When the user scrolls more than **300px**, JavaScript adds the `show` class:

```javascript
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});
```

When the button is clicked, the page smoothly scrolls back to the top:

```javascript
window.scrollTo({
    top: 0,
    behavior: "smooth"
});
```

## 🎯 Future Improvements

* Add a scroll progress indicator
* Allow users to customize the scroll threshold
* Add different button styles and icons
* Add reduced-motion support for accessibility
* Add a tooltip animation
* Create multiple positioning options
* Improve mobile-specific styling

---

This project is part of my **Vanilla JavaScript Mini Projects** series, where I build commonly used frontend components from scratch to strengthen my JavaScript fundamentals, browser API knowledge, DOM manipulation, and UI development skills.
