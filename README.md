# 📝 Smart Textarea

**This project is part of my Vanilla JavaScript Mini Projects series, where I'm recreating commonly used frontend components from scratch to strengthen my understanding of JavaScript, DOM manipulation, performance optimisation, and reusable UI design.**

A Twitter-inspired smart textarea built with **HTML, CSS, and Vanilla JavaScript**.

This mini project recreates some of the core features of Twitter's post composer, including live character counting, overflow detection, progress indicator, mention/hashtag formatting, and dynamic post rendering.

The primary goal of this project was to strengthen my understanding of **Vanilla JavaScript**, DOM manipulation, event handling, and browser APIs without relying on any frontend framework.

---

## 🚀 Features

- ✅ Live character counter
- ✅ Configurable character limit
- ✅ Circular progress indicator
- ✅ Warning when approaching the character limit
- ✅ Overflow detection with highlighted excess characters
- ✅ Automatic hashtag highlighting
- ✅ Automatic mention highlighting
- ✅ Submit button validation
- ✅ Dynamic post creation
- ✅ HTML escaping for safer rendering
- ✅ Scroll synchronization between textarea and highlight layer

---

## 🛠️ Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES6)

---

## 📚 What I Learned

Building this project helped me gain practical experience with:

### JavaScript

- DOM Manipulation
- Event Listeners
- Dynamic HTML rendering
- String manipulation
- Regular Expressions
- Template Literals
- Arrays and Objects
- Function decomposition
- State updates
- Browser events

### Browser APIs

- SVG manipulation
- Scroll synchronization
- HTML escaping
- Dynamic element creation

### CSS

- Flexbox
- Layered UI
- Positioning
- Responsive layouts
- Progress ring styling
- Custom component styling

---

## 💡 Challenges Faced

One of the most interesting parts of this project was recreating Twitter's character overflow behaviour.

Since a native `<textarea>` cannot style individual characters, I implemented a layered editor approach:

- A transparent textarea captures user input.
- A backdrop layer renders formatted HTML.
- Overflow characters are highlighted separately.
- Scroll positions are synchronized to create the illusion of a styled textarea.

This helped me better understand how advanced text editors work under the hood.

---

## 📂 Project Structure

```
smart-textarea/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🔮 Future Improvements

- Dark Mode
- Local Storage
- Emoji Picker
- Edit/Delete Posts
- Keyboard Shortcuts
- Accessibility Improvements
- Responsive Mobile Layout
- Unit Tests

---

## ▶️ Running the Project

Clone the repository

```bash
git clone https://github.com/your-username/smart-textarea.git
```

Navigate into the folder

```bash
cd smart-textarea
```

Open `index.html` in your browser.

---

## 🎯 Purpose

This project is part of my Vanilla JavaScript learning journey.

Instead of using React or another framework, I focused on understanding how modern UI components can be built from scratch using only HTML, CSS, and JavaScript.

---

## 👩‍💻 Author

**Tanishka Goel**
