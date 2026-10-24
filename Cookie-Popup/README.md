# 🍪 Cookie Consent Popup

**This project is part of my Vanilla JavaScript Mini Projects series, where I'm recreating commonly used frontend components from scratch to strengthen my understanding of JavaScript, DOM manipulation, performance optimisation, and reusable UI design.**

A lightweight **Vanilla JavaScript** mini project that recreates the cookie consent pop-ups commonly found on modern websites. Users can accept all cookies, reject optional cookies, or customize their preferences, with the selected preferences stored using browser cookies.

This project focuses on DOM manipulation, browser cookies, event handling, timers, and state persistence without using any frameworks or libraries.

---

## 🚀 Features

- Displays a cookie consent popup when the page loads
- Accept all cookies with a single click
- Reject all optional cookies while keeping necessary cookies enabled
- Manage cookie preferences individually
- Stores user preferences using browser cookies
- Applies saved preferences on future visits
- Automatically dismisses the popup after 12 seconds with default preferences
- Responsive and clean UI built with HTML and CSS
- Built entirely using Vanilla JavaScript

---

## 📚 What I Learned

Through this project, I gained hands-on experience with:

- Working with the Browser Cookie API
- Creating, reading, and updating cookies
- Persisting user preferences across sessions
- DOM selection and manipulation
- Event handling using JavaScript
- Managing application state
- Using timers with `setTimeout()` and `clearTimeout()`
- Building reusable helper functions
- Creating interactive UI components without external libraries

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6)

---

## 📂 Project Structure

```
cookie-consent-popup/
│── index.html
│── style.css
│── script.js
└── README.md
```

---

## ⚙️ How It Works

1. The page loads and checks whether a cookie consent already exists.
2. If no consent is found, the popup is displayed.
3. The user can:
   - Accept All
   - Reject Optional Cookies
   - Manage Preferences
4. Selected preferences are saved as browser cookies.
5. On future visits, saved preferences are automatically applied.
6. If the user doesn't interact within 12 seconds, the popup is dismissed and the default preferences are stored.

---

## 🎯 Cookie Preferences

| Cookie Type | Default | Can Disable |
|-------------|---------|-------------|
| Necessary | ✅ Enabled | ❌ No |
| Analytics | ❌ Disabled | ✅ Yes |
| Marketing | ❌ Disabled | ✅ Yes |

---

## 💡 Future Improvements

- Dark mode support
- Accessibility (ARIA roles and keyboard navigation)
- Cookie expiration customization
- Smooth open/close animations
- Reopen cookie preferences from the footer
- Integration with Google Analytics or other tracking services
- LocalStorage implementation as an alternative to cookies

---

## ⭐ Key JavaScript Concepts Practiced

- DOM Manipulation
- Event Listeners
- Browser Cookies
- State Management
- Timers
- Conditional Rendering
- Helper Functions
- UI Component Development
