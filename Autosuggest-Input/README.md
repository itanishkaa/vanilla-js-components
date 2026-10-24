# Autosuggest Search Input

**This project is part of my Vanilla JavaScript Mini Projects series, where I'm recreating commonly used frontend components from scratch to strengthen my understanding of JavaScript, DOM manipulation, performance optimisation, and reusable UI design.**

A mini project built using **Vanilla JavaScript** to understand how autosuggest (autocomplete) search inputs work without relying on frameworks or third-party libraries.

This project recreates a location search experience similar to Google Search by displaying real-time suggestions as the user types. It also implements **debouncing** to optimise performance and reduce unnecessary search operations or API calls.

---

## ✨ Features

- Real-time autosuggest search
- Search by **city** or **country**
- Debounced input handling (300ms delay)
- Highlight matching search text
- Click a suggestion to autofill the input
- Hide suggestions when:
  - Clicking outside the search box
  - No matching results are found
  - A suggestion is selected
- Responsive and clean UI

---

## 🛠️ Built With

- HTML5
- CSS3
- Vanilla JavaScript (ES6)

---

## 📚 What I Learned

Building this project helped me understand how modern autocomplete components work behind the scenes.

Some of the key concepts I explored include:

- Building an autosuggest component from scratch
- DOM manipulation and dynamic rendering
- Event handling using the `input` event
- Debouncing user input to improve performance
- Creating reusable higher-order functions
- Filtering data using JavaScript array methods
- Case-insensitive searching
- Highlighting matched text using Regular Expressions
- Optimising DOM updates with `DocumentFragment`
- Detecting clicks outside a component
- Writing clean, modular JavaScript

---

## 🚀 Project Structure

```
├── index.html
├── style.css
└── script.js
```

---

## ⚙️ How It Works

1. The user starts typing in the search input.
2. The input event is debounced to avoid unnecessary searches.
3. After the user stops typing for 300ms, the location list is filtered.
4. Matching cities and countries are displayed as suggestions.
5. Matching text is highlighted.
6. Clicking a suggestion fills the input and hides the suggestion list.
7. Clicking outside the component closes the suggestion list.

---

## 🎯 Why I Built This

Autosuggest inputs are one of the most common UI components used in modern web applications.

Instead of using an existing library, I wanted to understand how autocomplete functionality works internally—from handling user input and debouncing to dynamically rendering suggestions and managing user interactions.

Building this component from scratch strengthened my understanding of JavaScript fundamentals and common frontend interview concepts.


---

## 🔮 Future Improvements

- Keyboard navigation (↑ ↓ Enter)
- Highlight active suggestion
- Fetch suggestions from a real API
- Loading indicator while fetching data
- Recent search history
- Fuzzy search for better matching
- Group suggestions by country
- Search result caching
- Mobile gesture improvements

---

## 💡 Key JavaScript Concepts Practised

- DOM Manipulation
- Event Handling
- Debouncing
- Higher-Order Functions
- Closures
- Array Methods (`filter`, `map`)
- Regular Expressions
- Dynamic Rendering
- DocumentFragment
- Event Delegation
- Component Thinking
